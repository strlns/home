import styles from "@app/styles/TextPicture.module.css";
import { setChildrenProps } from "@app/utilities/setChildrenProps";
import { Divider, Text } from "@geist-ui/core";
import clsx from "clsx";
import { PropsWithChildren, ReactNode } from "react";

type TextPictureBaseProps = PropsWithChildren<{
  image: ReactNode; //easier than picking this apart.
  orient?: "left" | "right";
  mobileFull?: boolean;
  square?: boolean;
  divider?: boolean;
  rounded?: boolean;
  float?: boolean;
  figure?: boolean;
  caption?: string;
}>;

type TextPicturePropsWithFigure = TextPictureBaseProps & {
  figure: true;
  caption?: string;
};

type TextPicturProps = TextPictureBaseProps | TextPicturePropsWithFigure;

export default function TextPictureFloat({
  image,
  orient = "right",
  mobileFull = false,
  children,
  divider = false,
  square = false,
  rounded = false,
  float = false,
  figure = false,
  caption,
}: TextPicturProps) {
  const imageClasses = clsx(
    styles.image,
    styles[orient],
    square && styles.square,
    rounded && styles.rounded,
    mobileFull && styles.mobileFull
  );
  let theImage = image;
  if (!figure) {
    theImage = setChildrenProps(
      theImage,
      {
        className: imageClasses,
      },
      ["img"]
    );
  }
  return (
    <div
      className={clsx(
        styles.wrap,
        styles[orient],
        float ? styles.float : styles.grid
      )}
    >
      {figure ? (
        <figure className={clsx(imageClasses, styles.figure)}>
          {theImage}
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      ) : (
        theImage
      )}
      <Text p>{children}</Text>
      {divider && <Divider mb={0} className={styles.divider} />}
    </div>
  );
}
