import { normalizeLeadingSlash } from "@app/utilities/normalizePathSegment";
import { CssBaseline } from "@geist-ui/core";
import { renderToStream } from "react-streaming/server";
import { dangerouslySkipEscape, escapeInject } from "vike/server";
import { getDocumentProps } from "./getDocumentProps";
import { PageShell } from "./PageShell";
import schemaJson from "./schema-org.json";
import type { PageContextServer } from "./types";

export { render };
export { passToClient };

const passToClient = ["pageProps", "documentProps"];

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;

  const stream = await renderToStream(
    <PageShell pageContext={pageContext} isClient={false}>
      <Page {...pageProps} />
    </PageShell>,
    // We don't need react-streaming for this app. (We use it merely to showcase that VPS can handle react-streaming with a pre-rendered app. Note that using react-streaming with pre-rendering can make sense if we want to be able to use React's latest <Suspsense> techniques.)
    { disable: true }
  );

  const { title, description, additionalMetaTags } =
    getDocumentProps(pageContext);

  const geistUiBaseStyles = CssBaseline.flushToHTML();
  const origin = `https://${__HOST__}${__BASE__}`;

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover">
        <meta property="og:title" content="${title}">
        <meta property="og:description" content="Moritz Rehbach: Personal homepage">
        <meta property="og:type" content="website">
        <meta property="og:image" content="${origin}water-og-600.jpg">
        <meta property="og:image:url"  content="${origin}water-og.jpg"  />
        <meta property="twitter:image" content="${origin}water-og.jpg"  />
        <link rel="image_src" href="${origin}water-og.jpg">
        <link rel="canonical" href="${origin}${normalizeLeadingSlash(
    pageContext.urlPathname,
    false
  )}">
        <script type="application/ld+json">
          ${dangerouslySkipEscape(JSON.stringify(schemaJson))}
        </script>
        
        <title>${title}</title>
        ${
          description
            ? escapeInject`<meta name="description" content="${description}">`
            : ""
        }
        ${
          additionalMetaTags
            ? additionalMetaTags
                .map(
                  ({ name, content }) =>
                    escapeInject`<meta name="${name}" content="${content}">`
                )
                .join("")
            : ""
        }
        <script async>
          ${
            /*Delay rendering if JS is enabled: in SSG context we can't use any cookie tricks or similar to check for prev. color scheme.
              Also provide a class to adjust initial page background to stored user selection as early as possible.*/ ""
          }
          document.documentElement.classList.add("js");
          try {
            const preference = JSON.parse(localStorage.getItem("usehooks-ts-ternary-dark-mode"));
            ${
              /*preferences "system" can be ignored: "system" leads to the same result
              in JS as the CSS media query does. "light" and "dark" might both override 
              the default, so we adjust the initial CSS before hydration.
              Note that the preference comes from localStorage. But it is not injected into
              the script as a string, it is part of the script itself, so the .includes() check
              should be more than enough. Even without this check, it shouldn't be possible
              to inject anything into the script context from local storage here.
              */ ""
            }
            if (["dark", "light"].includes(preference)) {
              document.documentElement.classList.add("initially-"+preference);
            }
          }
          catch {}
        </script>
        <style>
          :root.js:not(.hydrated) * {
            display: none;
          }
          @media (prefers-color-scheme: dark) {
            :root.js:not(.hydrated) {
              background-color: #000;
              color: #fff;
            }
          }
          :root.js.initially-dark:not(.hydrated) {
            background-color: #000;
            color: #fff;
          }
          :root.js.initially-light:not(.hydrated) {
            background-color: #fff;
            color: #000;
          }
        </style>
        ${dangerouslySkipEscape(geistUiBaseStyles)}
      </head>
      <body>
        <div id="page-view">${stream}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    // See https://vike.dev/stream#initial-data-after-stream-end
    pageContext: async () => {
      return {
        //SSG only here so far, we do not return async page props from server.
      };
    },
  };
}
