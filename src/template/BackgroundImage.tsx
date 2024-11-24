/* This was created before adding vite-imagetools, images were
 * manually optimized for small size using GM*/
import waterJpg1280 from "@app/imgShared/water/water_1280.jpeg";
import waterWebP1280 from "@app/imgShared/water/water_1280.webp";
import waterJpg3072 from "@app/imgShared/water/water_3072.jpeg";
import waterWebP3072 from "@app/imgShared/water/water_3072.webp";
import waterJpg400 from "@app/imgShared/water/water_400.jpeg";
import waterWebP400 from "@app/imgShared/water/water_400.webp";
import waterJpg768 from "@app/imgShared/water/water_768.jpeg";
import waterWebP768 from "@app/imgShared/water/water_768.webp";

import useDeferredTernaryDarkMode from "@app/hooks/useDeferredDarkMode";
import overlayStyles from "@app/styles/GradientOverlay.module.css";
import clsx from "clsx";

type BackgroundImageProps = {
  position?: "top" | "bottom";
};

export default function BackgroundImage({
  position = "bottom",
}: BackgroundImageProps) {
  const { isDarkMode } = useDeferredTernaryDarkMode();
  return (
    <div
      className={clsx(
        position === "bottom"
          ? overlayStyles.overlayBottom
          : overlayStyles.overlayTop,
        isDarkMode && overlayStyles.dark
      )}
    >
      <picture>
        <source
          media="(max-width: 400px)"
          srcSet={waterWebP400}
          type="image/webp"
        />
        <source
          media="(min-width: 400px)"
          srcSet={waterWebP768}
          type="image/webp"
        />
        <source
          media="(min-width: 400px)"
          srcSet={waterJpg768}
          type="image/jpeg"
        />
        <source
          media="(min-width: 800px)"
          srcSet={waterWebP1280}
          type="image/webp"
        />
        <source
          media="(min-width: 800px)"
          srcSet={waterJpg1280}
          type="image/jpeg"
        />
        <source
          media="(min-width: 2560px)"
          srcSet={waterWebP3072}
          type="image/webp"
        />
        <source
          media="(min-width: 2560px)"
          srcSet={waterJpg3072}
          type="image/jpeg"
        />
        <img
          src={waterJpg400}
          alt=""
          style={{
            objectFit: "cover",
            opacity: 0.5,
            position: "absolute",
            inset: 0,
            height: "100%",
            width: "100%",
          }}
        />
      </picture>
    </div>
  );
}
