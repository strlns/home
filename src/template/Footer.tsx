import Box from "@app/components/Atoms/Box";
import IconLink from "@app/components/Atoms/IconLink";
import { Text, useTheme } from "@geist-ui/core";
import { Github } from "@geist-ui/icons";
import { routePaths } from "../routes";

export default function Footer() {
  const {
    palette,
    layout: { pageMargin, unit },
  } = useTheme();
  const { background, foreground } = palette;
  return (
    <Box
      tagName="footer"
      justifyContent={"space-between"}
      flexWrap="wrap"
      horizontal
      gap={3}
      style={{
        background,
        padding: `calc(${unit} / 2) ${pageMargin}`,
        position: "relative",
        zIndex: 9,
      }}
    >
      <Text small color={foreground}>
        <IconLink href={routePaths["Legal notice"]} rel="nofollow">
          Legal notice / Angaben gemäß § 5 TMG
        </IconLink>
      </Text>
      <Text small>
        <IconLink
          href="https://github.com/strlns"
          iconLeft={<Github />}
          iconLeftAuto={true}
          iconLeftStyles={{ marginTop: ".25ex" }}
        >
          Visit my profile on Github
        </IconLink>
      </Text>
      <Text small>©️ 2025 Moritz Rehbach</Text>
    </Box>
  );
}
