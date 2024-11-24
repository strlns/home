import { GapValue } from "@app/styles/GapValue";
import gapStyles from "@app/styles/GapValues.module.css";
import iconLinkStyles from "@app/styles/IconLink.module.css";
import { setChildrenProps } from "@app/utilities/setChildrenProps";
import { Link, LinkProps } from "@geist-ui/core";
import clsx from "clsx";
import { CSSProperties, HTMLProps, PropsWithChildren, ReactNode } from "react";

type IconLinkProps = {
  iconLeft?: JSX.Element | null;
  iconLeftAuto?: boolean;
  iconLeftStyles?: CSSProperties;
  arrowRight?: boolean;
  gap?: GapValue;
  block?: boolean;
  centered?: boolean;
} & Omit<LinkProps, "icon">;

export default function IconLink({
  iconLeft = null,
  iconLeftAuto = false,
  iconLeftStyles,
  arrowRight = true,
  children,
  gap,
  block,
  centered,
  ...linkProps
}: PropsWithChildren<IconLinkProps>) {
  let Icon: ReactNode;
  if (iconLeft) {
    const propsToSet: HTMLProps<JSX.Element> & Record<string, unknown> = {
      className: iconLinkStyles.iconLeft,
    };
    if (iconLeftStyles) {
      propsToSet.style = iconLeftStyles;
    }
    Icon = setChildrenProps(iconLeft, propsToSet);
  }
  return (
    <Link
      icon={arrowRight}
      style={{ alignItems: "center" }}
      className={clsx(
        iconLinkStyles.iconLink,
        iconLeftAuto && iconLinkStyles.leftAuto,
        block && iconLinkStyles.block,
        centered && iconLinkStyles.centered,
        gap && gapStyles[`g-${gap}`]
      )}
      {...linkProps}
    >
      {Icon}
      <span className={iconLinkStyles.text}>{children}</span>
    </Link>
  );
}
