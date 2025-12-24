import { createContext, ReactNode, useContext } from "react";
import type { PageContext } from "./types";

export { PageContextProvider };
export { usePageContext };

const Context = createContext<PageContext>(undefined as unknown as PageContext);

function PageContextProvider({
  pageContext,
  children,
}: {
  pageContext: PageContext;
  children: ReactNode;
}) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
}

function usePageContext() {
  const pageContext = useContext(Context);
  return pageContext;
}
