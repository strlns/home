import { routeWithBasePath } from "@app/renderer/normalizeRoutePath";

export const routes = [
  { name: "Home", path: "/" },
  { name: "Competences", path: "/competences" },
  { name: "Tech", path: "/tech" },
  { name: "Contact me", path: "/contact" },
  { name: "Legal notice", path: "/legal-notice" },
] as const;
type RouteName = (typeof routes)[number]["name"];
type RoutePath = (typeof routes)[number]["path"];
type RoutePaths = {
  [key in RouteName]: RoutePath;
};

export const routePaths: RoutePaths = Object.fromEntries(
  routes.map((route) => [route.name, routeWithBasePath(route.path)])
) as RoutePaths;
