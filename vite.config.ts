import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import postcssNestingPlugin from "postcss-nesting";
import postcssPresetEnvPlugin from "postcss-preset-env";
import ssr from "vike/plugin";
import { ConfigEnv, defineConfig, loadEnv, UserConfigExport } from "vite";
import { imagetools as imageTools } from "vite-imagetools";

const config = ({ mode }: ConfigEnv): UserConfigExport => {
  console.log(`VITE MODE: ${mode}`);

  const {
    VITE_BASE_PATH: base,
    VITE_PAGE_TITLE: pageTitle,
    VITE_HOST: hostname,
  } = loadEnv(mode, process.cwd());

  return defineConfig({
    define: {
      __IS_DEV__: mode === "development",
      __BASE__: JSON.stringify(base),
      __PAGE_TITLE__: JSON.stringify(pageTitle),
      __HOST__: JSON.stringify(hostname),
    },
    resolve: {
      alias: [
        {
          find: "@app",
          replacement: fileURLToPath(new URL("./src", import.meta.url)),
        },
      ],
    },
    plugins: [react(), imageTools(), ssr({ prerender: true })],
    base,
    build: {
      minify: "terser",
      target: "es2020",
      /*
      geist-ui CSS is inlined into style tags. 
      For the tiny amount of CSS I add on top of that, splitting is currently not worth the request overhead.
      */
      cssCodeSplit: false,
    },
    css: {
      postcss: {
        plugins: [postcssPresetEnvPlugin(), postcssNestingPlugin],
      },
    },
    ssr: {
      //this library contains invalid ESM code, see
      //https://github.com/juliencrn/usehooks-ts/issues/162 (could not reproduce fix from there)
      //https://vike.dev/broken-npm-package#solution (this works)
      //Error without this line only occurs in production build.
      noExternal: ["usehooks-ts"],
    },
  });
};

export default config;
