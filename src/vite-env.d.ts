/// <reference types="vite/client" />

declare const __IS_DEV__: boolean;
declare const __BASE__: string;
declare const __PAGE_TITLE__: string;
declare const __HOST__: string;

/*
Workaround for vite-imagetools + TypeScript, from here:
https://github.com/JonasKruckenberg/imagetools/issues/160#issuecomment-1009292026
*/
declare module "*&imagetools" {
  /**
   * actual types
   * - code https://github.com/JonasKruckenberg/imagetools/blob/main/packages/core/src/output-formats.ts
   * - docs https://github.com/JonasKruckenberg/imagetools/blob/main/docs/guide/getting-started.md#metadata
   */
  const out;
  export default out;
}
