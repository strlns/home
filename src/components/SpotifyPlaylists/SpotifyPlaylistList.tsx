import Box from "@app/components/Atoms/Box";
import { Link, Text, Toggle, useMediaQuery } from "@geist-ui/core";
import { MouseEventHandler, useCallback, useState } from "react";
import { Spotify } from "react-spotify-embed";

type SpotifyPlaylistListProps = {
  links: string[];
  onReload: () => Promise<void>;
  loading: boolean;
  numberOfPinnedPlaylists?: number;
};

/*
 * IMPORTANT:
 * ONLY render this component on the client-side using a dynamic import!
 * 1) GDPR consent is required
 * 2) playlist JSON shouldn't slow down page load
 * 3) would lead to hydration mismatch
 */
export default function SpotifyPlaylistList({
  links,
  loading = false,
  onReload: reload,
  numberOfPinnedPlaylists,
}: SpotifyPlaylistListProps) {
  const isMobile = useMediaQuery("mobile");
  //intentionally not using an effect to update this on resize, that
  //would feel weird.
  const [isDetailedView, setIsDetailedView] = useState(!isMobile);

  //Using a callback ref here as this might prevent race conditions when re-rendering child components causes replacement
  //of DOM nodes.
  const [rootBox, setRootBox] = useState<HTMLDivElement | null>(null);
  const boxRef = useCallback((box: HTMLDivElement) => {
    setRootBox(box);
  }, []);

  const scrollToStart = useCallback(
    (skipPinned = false) => {
      let target: HTMLElement | null = rootBox;
      if (!target) {
        return;
      }
      if (skipPinned) {
        const selector = `iframe:nth-child(${
          Number(numberOfPinnedPlaylists) + 1
        })`;
        const firstNew = target.querySelector<HTMLElement>(selector);
        firstNew && (target = firstNew);
      }
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
    [numberOfPinnedPlaylists, rootBox]
  );

  const onClickReload = useCallback<MouseEventHandler>(
    async (event) => {
      event.preventDefault();
      await reload();
      if (rootBox) {
        scrollToStart(true);
      }
    },
    [reload, rootBox, scrollToStart]
  );

  return (
    <Box gap={8} ref={boxRef}>
      <Box flexWrap="wrap" horizontal justifyContent="space-between">
        <Text style={{ flexGrow: 1 }} my={0}>
          {loading ? (
            "Loading…"
          ) : (
            <Link color onClick={onClickReload}>
              Load new playlists
              {numberOfPinnedPlaylists
                ? ` (${numberOfPinnedPlaylists} pinned at the top)`
                : ""}
            </Link>
          )}
        </Text>
        <Box horizontal gap={2} tagName="label" alignItems="center">
          Compact
          <Toggle
            checked={isDetailedView}
            onChange={(event) => {
              setIsDetailedView(event.target.checked);
            }}
            style={{ padding: 0, marginTop: "0.25ex" }}
          />
          Detailed
        </Box>
      </Box>
      <Box horizontal justifyContent="space-evenly" flexWrap="wrap">
        {links.map((link) => (
          <Spotify key={link} wide={!isDetailedView} link={link} />
        ))}
      </Box>
    </Box>
  );
}
