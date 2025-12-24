import {
  normalizeLeadingSlash,
  normalizeTrailingSlash,
} from "@app/utilities/normalizePathSegment";
import normalizeUrl from "normalize-url";

export const routeWithBasePath = (routePath: string) => {
  if (routePath.startsWith(__BASE__)) {
    return routePath;
  }
  return `${normalizeTrailingSlash(__BASE__)}${normalizeLeadingSlash(
    routePath,
    false
  )}`;
};

export const normalizePath = (path: string) =>
  new URL(normalizeUrl(`//${__HOST__}${routeWithBasePath(path)}`)).pathname;
