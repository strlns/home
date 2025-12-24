import useDeferredTernaryDarkMode from "@app/hooks/useDeferredDarkMode";
import iconStyles from "@app/styles/Icon.module.css";
import spotifyConsentStyles from "@app/styles/SpotifyConsent.module.css";
import clsx from "clsx";
import spotifyIconB from "./Spotify_Icon_RGB_Black.eps.svg";
import spotifyIconW from "./Spotify_Icon_RGB_White.eps.svg";

/**
 * There are strict guidelines on how to use the logo, e.g. minimum size and colors.
 * See https://developer.spotify.com/documentation/design#using-our-logo
 */
export default function Spotify() {
  const { isDarkMode } = useDeferredTernaryDarkMode();
  const src = isDarkMode ? spotifyIconW : spotifyIconB;
  return (
    <img
      className={clsx(iconStyles.icon, spotifyConsentStyles.icon)}
      src={src}
      alt="Spotify® icon, intellectual property of Spotify"
      title="Spotify® icon, intellectual property of Spotify"
      width="48"
      height="48"
    />
  );
}
