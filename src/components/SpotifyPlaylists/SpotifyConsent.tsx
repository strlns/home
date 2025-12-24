import Box from "@app/components/Atoms/Box";
import IconLink from "@app/components/Atoms/IconLink";
import Spotify from "@app/components/Atoms/Icons/Spotify/Spotify";
import German from "@app/components/Atoms/LanguageIcons/German";
import useDeferredTernaryDarkMode from "@app/hooks/useDeferredDarkMode";
import styles from "@app/styles/SpotifyConsent.module.css";
import { Description, Divider, Text, useTheme } from "@geist-ui/core";
import clsx from "clsx";
import { MouseEventHandler, useEffect, useState } from "react";
import { useSessionStorage } from "usehooks-ts";
import placeholderJpg from "./spotify-consent-bg.jpg";
import placeholderSrcSetWebP from "./spotify-consent-bg.jpg?width=400;630&format=webp&srcset&imagetools";
import SpotifyLogo from "./SpotifyLogo";

export const SPOTIFY_CONSENT_SESSIONSTORAGE_KEY = "spotify-consent";

export function useSpotifyConsent() {
  const [clientHasConsent, setClientHasConsent] = useState(false);
  const [hasStoredConsent, setHasConsent] = useSessionStorage(
    SPOTIFY_CONSENT_SESSIONSTORAGE_KEY,
    false
  );

  useEffect(() => {
    setClientHasConsent(hasStoredConsent);
  }, [hasStoredConsent]);

  return [clientHasConsent, setHasConsent, hasStoredConsent] as const;
}

export default function SpotifyConsent() {
  const [, setHasConsent] = useSpotifyConsent();
  const {
    layout: { radius },
    expressiveness: { shadowMedium },
  } = useTheme();

  const { isDarkMode } = useDeferredTernaryDarkMode();

  const onClick: MouseEventHandler = (event) => {
    if (!("matches" in HTMLElement.prototype)) {
      return;
    }
    if (
      !(event.target as HTMLElement).matches(
        "a, a *, .tooltip, .tooltip *, button, button *"
      )
    ) {
      setHasConsent(true);
    }
  };

  return (
    <>
      <SpotifyLogo maxWidth={350} />
      <div style={{ width: "100%" }}>
        <Text small style={{ display: "block" }}>
          Spotify® and the Spotify logo are registered trademarks by Spotify AB.
          I am not affiliated with Spotify.
        </Text>
        <Description
          my={1}
          className={styles.dl}
          title="🇪🇺 GDPR"
          content="Embedded content: Please read below before loading."
        />
        <Description
          mt={1}
          className={styles.dl}
          title={
            <>
              <German />
              &nbsp;Datenschutz
            </>
          }
          content="Eingebetteter Inhalt: Bitte lesen Sie den Text, bevor Sie Ihre Zustimmung durch Klick erteilen."
        />
        <Box
          horizontal
          flexWrap="wrap"
          style={{ margin: "0.75rem 0" }}
          tagName="small"
          justifyContent="center"
        >
          <IconLink
            color
            href="https://www.spotify.com/legal/privacy-policy/"
            target="_blank"
            style={{
              width: "100%",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Datenschutzerklärung von Spotify
          </IconLink>
          <IconLink
            color
            href="https://www.spotify.com/legal/privacy-policy/"
            target="_blank"
            style={{
              width: "100%",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Spotify privacy policy
          </IconLink>
        </Box>
      </div>
      <div
        className={clsx(styles.consentText, isDarkMode && styles.dark)}
        style={{
          boxShadow: shadowMedium,
          borderRadius: radius,
        }}
      >
        <picture>
          <source type="image/webp" srcSet={placeholderSrcSetWebP} />
          <img
            src={placeholderJpg}
            loading="lazy"
            alt=""
            style={{
              objectFit: "cover",
              position: "absolute",
              inset: 0,
              height: "100%",
              backgroundColor: "#1cd760",
              borderRadius: radius,
              overflow: "hidden",
            }}
          />
        </picture>
        <Box
          className={clsx(styles.overlay, isDarkMode && styles.dark)}
          alignItems="center"
          onClick={onClick}
          role="button"
        >
          <Spotify />
          <h4 style={{ maxWidth: "20ch" }}>
            Eingebettete Inhalte von Spotify® &nbsp;zulassen
          </h4>
          <Text p small mt={0} style={{ lineHeight: 1, maxWidth: "28ch" }}>
            Durch Anklicken akzeptieren Sie, dass eingebettete externe Inhalte
            von Spotify geladen und dadurch{" "}
            <strong>Daten an Spotify übertragen werden</strong>.
            <br />
            Die Verarbeitung der Daten erfolgt durch Spotify, nicht durch mich.
            <br />
            <IconLink
              color
              block
              centered
              href="https://www.spotify.com/legal/privacy-policy/"
              target="_blank"
              style={{ marginTop: "0.5em" }}
            >
              Datenschutzerklärung von Spotify
            </IconLink>
            <Text small style={{ display: "block" }} mt={1}>
              Spotify kann nach dem Laden des eingebetteten Inhalts Cookies oder
              ähnliche Daten auf Ihrem Gerät speichern.
            </Text>
          </Text>
          <Divider color="currentColor" width="100%" mt={0} />
          <Box horizontal flexWrap="wrap" justifyContent="center" tagName="h5">
            Allow embedded Spotify® player
          </Box>
          <Text p small mt={0} style={{ lineHeight: 1, maxWidth: "28ch" }}>
            By clicking, you agree to open a player provided by Spotify, which
            will transmit data to Spotify.
            <IconLink
              color
              block
              centered
              href="https://www.spotify.com/legal/privacy-policy/"
              target="_blank"
              style={{ marginTop: "0.5em" }}
            >
              Spotify's privacy policy
            </IconLink>
            <Text small style={{ display: "block" }} mt={1}>
              Spotify can store cookies and similar identifying data on your
              device when you load the embedded player.
            </Text>
          </Text>
        </Box>
      </div>
    </>
  );
}
