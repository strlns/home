import { useEffect, useState } from "react";

/**
 * When using this in SSR context,
 * the hook must not provide an initial value for the theme
 * using window.matchMedia, as this would lead to hydration error.
 *
 * When in SSG context (here: prod), we know all JS runs on the client
 * and can safely set the initial value.
 * @param query
 * @param isSsr
 * @param effectOnly
 * @returns
 */
export default function useMediaQuery(
  query: string,
  /*
  In SSG-context, we have to rely on an effect for initializing dark mode state, always, to avoid hydration errors,
  Generally, we can't use media queries in SSG context, that's why this switch is provided.
  */
  effectOnly: boolean
) {
  const mediaQueryListHookScope =
    effectOnly || typeof window === "undefined"
      ? undefined
      : window.matchMedia(query);
  const [mediaQueryList, setMediaQueryList] = useState(mediaQueryListHookScope);
  const [matches, setMatches] = useState(mediaQueryList?.matches);
  useEffect(() => {
    /**
     * Don't use the MediaQueryList object created in the
     * top-level hook scope here, instead create a new one every time the effect runs.
     * Using the top-level object would presumably force the browser to keep a reference to every
     * instance of the hook function for every time the hook runs.
     */
    if (!mediaQueryList) {
      const mqList = window.matchMedia(query);
      setMediaQueryList(mqList);
      if (effectOnly) {
        setMatches(mqList.matches);
      }
    }
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };
    mediaQueryList?.addEventListener("change", listener);
    return () => {
      mediaQueryList?.removeEventListener("change", listener);
    };
  }, [query, mediaQueryList, effectOnly]);

  return matches;
}
