import useDeferredTernaryDarkMode from "@app/hooks/useDeferredDarkMode";
import "@app/styles/_globals.css";
import BackgroundImage from "@app/template/BackgroundImage";
import PageWithDefaultLayout from "@app/template/Root";
import { DeepPartial } from "@app/utilities/utilityTypes";
import {
  CssBaseline,
  GeistProvider,
  GeistUIThemes,
  Themes,
} from "@geist-ui/core";
import { ReactNode, StrictMode, useEffect } from "react";
import type { PageContext } from "./types";
import { PageContextProvider } from "./usePageContext";

export { PageShell };

function PageShell({
  pageContext,
  children,
}: {
  pageContext: PageContext;
  children: ReactNode;
  isClient: boolean;
}) {
  const themeOverrides: DeepPartial<GeistUIThemes> = {};

  const themeOverridesDark: DeepPartial<GeistUIThemes> = {
    palette: {},
  };

  const themeOverridesLight: DeepPartial<GeistUIThemes> = {
    palette: {
      link: "rgb(0, 80, 200)",
    },
  };

  const themes = [
    Themes.createFromLight({
      type: "my-light",
      ...themeOverrides,
      ...themeOverridesLight,
    }),
    Themes.createFromDark({
      type: "my-dark",
      ...themeOverrides,
      ...themeOverridesDark,
    }),
  ];

  const { themeType, isDarkMode } = useDeferredTernaryDarkMode();

  const customThemeType = `my-${themeType}`;
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <GeistProvider themes={themes} themeType={customThemeType}>
          <BackgroundImage />
          <BackgroundImage position="top" />
          <CssBaseline />
          <PageWithDefaultLayout isDarkMode={isDarkMode}>
            {children}
          </PageWithDefaultLayout>
        </GeistProvider>
      </PageContextProvider>
    </StrictMode>
  );
}

/*
  const themeOverride: DeepPartial<GeistUIThemes> = {
    //bit disappointed as this doesn't allow to adjust e.g. default font sizes or line heights.
    //leaving this here in case I need to customize.
  };

  const themes = [
    Themes.createFromLight({
      type: "my-light",
      ...themeOverride,
    }),
    Themes.createFromDark({
      type: "my-dark",
      ...themeOverride,
    }),
  ]
  //can't directly create a new theme of type "light", geist-ui complains about duplicates then.
  .map((theme) => {
    theme.type = theme.type.replace(/^my-/, "");
    return theme;
  });*/
