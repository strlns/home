import Box from "@app/components/Atoms/Box";
import NavLink from "@app/components/Atoms/NavLink";
import SwitchThemesButton from "@app/components/SwitchThemesButton";
import quiberon from "@app/imgShared/quiberon.jpeg?w=60&h=60&imagetools";
import { routeWithBasePath } from "@app/renderer/normalizeRoutePath";
import headerBarStyles from "@app/styles/HeaderBar.module.css";
import navStyles from "@app/styles/Nav.module.css";
import listStyles from "@app/styles/UnstyledList.module.css";
import { Link, Text, useTheme } from "@geist-ui/core";
import { Home } from "@geist-ui/icons";
import clsx from "clsx";
import { routePaths, routes } from "../routes";

const navbarEntries = routes
  .filter(({ name }) => name !== "Legal notice")
  .map(({ name, path }) => ({
    name,
    path: routeWithBasePath(path),
  }));

export default function NavigationBar() {
  const {
    layout: { radius },
  } = useTheme();

  return (
    <Box
      horizontal
      tagName="nav"
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      style={{ order: 1 }}
    >
      <NavLinks links={navbarEntries} />
      <Box horizontal className={headerBarStyles.titleContainer} gap={4}>
        <a
          href={`${__BASE__}moritz.jpg`}
          title="Moritz Rehbach in Quiberon, France"
          style={{ display: "contents" }}
        >
          <img
            alt="Moritz Rehbach in Quiberon, France"
            src={quiberon}
            width="60"
            height="60"
            style={{
              borderRadius: radius,
              height: "2.5rem",
              width: "auto",
            }}
          />
        </a>
        <Link href={routePaths.Home}>
          <Text h1 className={headerBarStyles.pageTitle} my={0}>
            {__PAGE_TITLE__}
          </Text>
        </Link>
        <SwitchThemesButton className={headerBarStyles.headerThemeSwitch} />
      </Box>
    </Box>
  );
}

function NavLinks({ links }: { links: typeof navbarEntries }) {
  return (
    <Box
      horizontal
      gap={3}
      tagName="ul"
      className={clsx(navStyles.navLinks, listStyles.unstyledList)}
    >
      {links.map(({ name, path }) => (
        <li key={name}>
          {name === "Home" ? (
            <NavLink href={path} title={name} className={navStyles.home}>
              <Home />
            </NavLink>
          ) : (
            <NavLink href={path}>{name}</NavLink>
          )}
        </li>
      ))}
    </Box>
  );
}
