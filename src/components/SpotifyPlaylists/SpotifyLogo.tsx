import useThemeUnit from "@app/hooks/useUnit";
import spotifyLogo from "./Spotify_Logo_RGB_Green.eps.svg";

type SpotifyLogoProps = {
  /** max-width in (CSS) pixels, will be clamped to match required minimum logo size. */
  maxWidth?: number;
};

const SpotifyLogo = ({ maxWidth = 267 }: SpotifyLogoProps) => {
  const unit = useThemeUnit();
  return (
    <img
      src={spotifyLogo}
      alt="Spotify® logo, intellectual property of Spotify"
      title="Spotify® logo, intellectual property of Spotify"
      width="267"
      height="80"
      style={{
        minHeight: "74px",
        margin: `calc(${unit} / 2) auto`,
        maxWidth: `${Math.max(267, maxWidth)}px`,
      }}
    />
  );
};

export default SpotifyLogo;
