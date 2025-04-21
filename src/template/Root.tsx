import headerBarStyles from "@app/styles/HeaderBar.module.css";
import pageStyles from "@app/styles/Page.module.css";
import NavigationBar from "@app/template/NavigationBar";
import { Page, PageProps, useTheme } from "@geist-ui/core";
import { CSSProperties, PropsWithChildren } from "react";
import Footer from "./Footer";

type PageLayoutProps = PropsWithChildren<PageProps> & {
  isDarkMode: boolean;
};

export default function PageWithDefaultLayout({
  children,
  isDarkMode,
  ...pageProps
}: PageLayoutProps) {
  const { palette } = useTheme();
  const primaryColor = isDarkMode ? palette.cyanLight : palette.foreground;
  const separatorColor = palette.accents_2;
  /*
  Page width is controlled by overriding geist-ui CSS from outside,
  this approach is the only viable one in an SSG setting.∏
  See https://github.com/geist-org/geist-ui/issues/258 or
  https://mui.com/material-ui/react-use-media-query/#server-side-rendering
  (MUI docs explain this well. Unfortunately, geist-ui has less affordances for normal CSS media queries.)
  
  Using geist-ui's own useMediaQuery implementation to control e.g. the prop `width`
  of the Page component would always lead to flickering (when using an effect) 
  or hydration errors (because I can't provide ssrMatchMedia in SSG context).
  */
  return (
    <>
      <Page
        {...pageProps}
        className={pageStyles.page}
        style={
          {
            "--color-primary": primaryColor,
            "--color-divider": separatorColor,
          } as CSSProperties
        }
      >
        <Page.Header className={headerBarStyles.headerBar}>
          <NavigationBar />
        </Page.Header>
        <Page.Body>{children}</Page.Body>
      </Page>
      <Footer />
    </>
  );
}
