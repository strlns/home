import Box from "@app/components/Atoms/Box";
import { Card, CardProps, Divider, Text } from "@geist-ui/core";
import { shuffle } from "lodash-es";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { useEffectOnce } from "usehooks-ts";
import { extractID } from "./extractID";
import SpotifyConsent, { useSpotifyConsent } from "./SpotifyConsent";

type SpotifyPlaylistsProps = {
  shuffleOrder?: boolean;
  maxItems?: number;
} & Pick<CardProps, "id">;

export default function SpotifyPlaylists({
  shuffleOrder = false,
  maxItems = 64,
  id,
}: SpotifyPlaylistsProps) {
  const [hasConsent, , hasStoredConsent] = useSpotifyConsent();

  const [SpotifyComponent, setSpotifyComponent] = useState(<SpotifyConsent />);
  const [playlists, setPlaylists] = useState<string[]>([]);
  const [numPinned, setNumPinned] = useState(0);
  const [loading, setLoading] = useState(false);

  const hasInitialConsent = useRef(false);
  useEffectOnce(() => {
    hasInitialConsent.current = hasStoredConsent;
  });

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        setLoading(true);
        const playlists = await fetchPlaylistLinks(maxItems, shuffleOrder);
        setPlaylists(() => playlists.links);
        setNumPinned(() => playlists.numPinned);
      } finally {
        setTimeout(() => {
          setLoading(() => false);
        }, 500);
      }
    };
    (async () => {
      if (!hasConsent) {
        return;
      }
      const SpotifyPlaylists = lazy(() => import("./SpotifyPlaylistList"));
      if (playlists.length === 0) {
        await fetchPlaylists();
      }
      setSpotifyComponent(() => (
        <SpotifyPlaylists
          links={playlists}
          onReload={fetchPlaylists}
          loading={loading}
          numberOfPinnedPlaylists={numPinned}
        />
      ));
      const resizeObserver = new ResizeObserver((entries) => {
        const threshold = Math.max(window.innerHeight * 1.25, 1024);
        const isTall =
          entries.length && entries[0].contentBoxSize[0].blockSize > threshold;
        if (isTall) {
          setTimeout(() => {
            entries[0].target.scrollIntoView({ block: "start" });
            hasScrolled.current = true;
            resizeObserver.disconnect();
          }, 250);
        }
      });
      if (
        spotifyOuterBoxRef.current &&
        !hasScrolled.current &&
        !hasInitialConsent.current
      ) {
        resizeObserver.observe(spotifyOuterBoxRef.current);
      }
      return () => {
        resizeObserver.disconnect();
      };
    })();
  }, [hasConsent, shuffleOrder, maxItems, playlists, loading, numPinned]);

  const spotifyOuterBoxRef = useRef<HTMLDivElement>(null);
  const hasScrolled = useRef(false);

  return (
    <section>
      <Card my={2} shadow id={id}>
        <Card.Content>
          <hgroup>
            <Text h3 my={0}>
              Music that I like
            </Text>
            <Text p small my={0} style={{ lineHeight: 1 }}>
              Some random spotify playlists that help me unwind
            </Text>
          </hgroup>
        </Card.Content>
        <Divider my={0} />
        <Card.Body>
          <Box horizontal flexWrap="wrap" ref={spotifyOuterBoxRef}>
            <Suspense>{SpotifyComponent}</Suspense>
          </Box>
        </Card.Body>
        <Card.Footer>
          <Text p small>
            To avoid a GDPR popup on this page, you'll have to consent anew in
            every session if you are interested in my Spotify playlists.
          </Text>
        </Card.Footer>
      </Card>
    </section>
  );
}

const fetchPlaylistLinks = async (maxItems: number, shuffleOrder = false) => {
  const playlistJSON = await import("./playlists.json");
  const pinnedPlaylists = playlistJSON.pinned.slice();
  const otherPlaylists = (
    shuffleOrder ? shuffle(playlistJSON.IDs) : playlistJSON.IDs
  ).filter(
    (playlist) =>
      !pinnedPlaylists.map((p) => extractID(p)).includes(extractID(playlist))
  );
  const playlists = [...playlistJSON.pinned, ...otherPlaylists].slice(
    0,
    maxItems
  );

  const links = playlists.map((route: string) =>
    route.replace(
      /^(?:https:\/\/open.spotify.com\/)?/,
      "https://open.spotify.com/"
    )
  );

  return { links, numPinned: playlistJSON.pinned.length };
};

/*eslint-disable-next-line @typescript-eslint/no-unused-vars */
const containsLink = (link: string, links: string[]) => {
  const ID = extractID(link);
  return links.some((link) => extractID(link) === ID);
};
