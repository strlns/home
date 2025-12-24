export { render };
export { onHydrationEnd };
export { onPageTransitionStart };
export { onPageTransitionEnd };

//this needs to be the constant true or not present at all.
//dynamic values are not supported, instead of setting false just remove if not wanted.
export const clientRouting = true;

// default is "hover"
// More prefetching speeds up navigation on mobile, it's OK here because
// page is small and all assets are cached.
export const prefetchStaticAssets = window.matchMedia("(max-width: 600px)")
  .matches
  ? "viewport"
  : "hover";

export const hydrationCanBeAborted = true;

import { normalizeLeadingSlash } from "@app/utilities/normalizePathSegment";
import ReactDOM from "react-dom/client";
import { getDocumentProps } from "./getDocumentProps";
import { PageShell } from "./PageShell";
import type { PageContext, PageContextClient } from "./types";

let root: ReactDOM.Root;
async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;
  const page = (
    <PageShell pageContext={pageContext} isClient={true}>
      <Page {...pageProps} />
    </PageShell>
  );
  const container = document.getElementById("page-view")!;
  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page);
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container);
    }
    root.render(page);
  }
  setDocumentProps(pageContext, document);
}

function setDocumentProps(pageContext: PageContext, document: Document) {
  const { title, description } = getDocumentProps(pageContext);
  document.title = title;
  document.documentElement.classList.add("js");

  const descriptionTag = document.querySelector("meta[name=description]");
  if (description && descriptionTag) {
    descriptionTag.setAttribute("content", description);
  }
  //This should only be relevant in server-rendered HTML normally,
  //but I prefer to keep it updated.
  const canonicalTag = document.querySelector<HTMLLinkElement>(
    "link[rel=canonical]"
  );
  if (canonicalTag) {
    canonicalTag.href = `${window.location.origin}${normalizeLeadingSlash(
      pageContext.urlPathname,
      true
    )}`;
  }
}

function onHydrationEnd() {
  //delay by 50ms to avoid flickering caused by stored dark mode preference.
  setTimeout(() => {
    document!.documentElement.classList.add("hydrated");
  }, 50);
  //console.log("Hydration finished; page is now interactive.");
}
function onPageTransitionStart() {
  //console.log("Page transition start");
  document.querySelector("body")!.classList.add("page-is-transitioning");
}
function onPageTransitionEnd() {
  //console.log("Page transition end");
  document.querySelector("body")!.classList.remove("page-is-transitioning");
}
