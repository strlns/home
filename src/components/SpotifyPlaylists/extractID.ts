export const extractID = (link: string): string | undefined =>
  link.match(/\/([^?/]*)(?:\/?\??.*)$/)?.[1];
