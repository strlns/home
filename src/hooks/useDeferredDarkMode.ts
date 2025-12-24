import { ThemeType } from "@app/styles/ThemeType";
import { useEffect, useState } from "react";
import { useTernaryDarkMode } from "usehooks-ts";

export default function useDeferredTernaryDarkMode() {
  //assign to a variable before destructuring, because the hook doesn't export its output type.
  const ternaryDarkModeOutput = useTernaryDarkMode();
  const { isDarkMode, ternaryDarkMode } = ternaryDarkModeOutput;

  /**
   * We need an effect here to avoid hydration errors.
   * Choosing correct theme from server side is not possible using only SSG
   * (even with SSR this would require cookies at best and a complicated setup –
   * problem is that:
   * 1) Geist UI requires setting theme type in JS anyway, cannot rely only on media queries in CSS -
   *    so the "ternary" dark mode does not add to the problem, why not allow it.
   * 2) Return value from the hook is dependend on localStorage + matchMedia, so
   *    we have to use it in an effect.
   * 3) useLayoutEffect sounds tempting, but as React itself warns: this is a fallacy,
   *    it doesn't help when the initial statically-rendered HTML should be displayed at all.
   * => As logic dictates, we can only set dark mode retroactively as soon as we use CSS-in-JS
   *    and allow user overrides. Global CSS contains a bit of cheating to reduce flickering
   *    for the system-theme case by setting an initial background color before hydration.
   */
  const [themeData, setThemeData] = useState({
    isDarkMode: false,
    ternaryDarkMode: "system",
  });
  useEffect(() => {
    setThemeData({ isDarkMode, ternaryDarkMode });
  }, [isDarkMode, ternaryDarkMode]);

  return {
    isDarkMode: themeData.isDarkMode,
    ternaryDarkMode: themeData.ternaryDarkMode,
    themeType: (themeData.isDarkMode ? "dark" : "light") as ThemeType,
  };
}
