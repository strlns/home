export type { PageContextServer };
export type { PageContextClient };
export type { PageContext };
export type { PageProps };

import { ReactElement } from "react";
import type {
  PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient,
  PageContextBuiltInServer,
} from "vike/types";

type Page = (pageProps: PageProps) => ReactElement;
type PageProps = Record<string, unknown>;

export type PageContextCustom = {
  Page: Page;
  pageProps?: PageProps;
  exports: {
    documentProps?: {
      title: string;
    };
  };
  documentProps?: {
    title: string;
  };
};

type PageContextServer = PageContextBuiltInServer<Page> & PageContextCustom;
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom;

type PageContext = PageContextClient | PageContextServer;

type MetaTag = {
  name: string;
  content: string;
};

export type DocumentProps = {
  title: string;
  description?: string;
  additionalMetaTags?: MetaTag[];
};
