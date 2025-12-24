import { DocumentProps } from "./types";

export { getDocumentProps };

function getDocumentProps(pageContext: {
  exports: { documentProps?: DocumentProps };
  documentProps?: DocumentProps;
}): DocumentProps {
  const title =
    // For static titles (defined in the `export { documentProps }` of the page's `.page.js`)
    (pageContext.exports.documentProps || {}).title ||
    // For dynamic titles (defined in the `export addContextProps()` of the page's `.page.server.js`)
    (pageContext.documentProps || {}).title ||
    __PAGE_TITLE__;

  const description =
    // For static descriptions (defined in the `export { documentProps }` of the page's `.page.js`)
    (pageContext.exports.documentProps || {}).description ||
    // For dynamic descriptions (defined in the `export addContextProps()` of the page's `.page.server.js`)
    (pageContext.documentProps || {}).description ||
    undefined;

  return {
    title,
    description,
  };
}
