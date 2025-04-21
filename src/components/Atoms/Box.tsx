import boxStyles from "@app/styles/Box.module.css";
import { GapValue } from "@app/styles/GapValue";
import gapStyles from "@app/styles/GapValues.module.css";
import clsx from "clsx";
import { clone } from "lodash-es";
import {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  ReactNode,
} from "react";

//type TagName = keyof JSX.IntrinsicElements;
type TagName =
  | "div"
  | "nav"
  | "form"
  | "ul"
  | "label"
  | "footer"
  | "h5"
  | "h4"
  | "h3"
  | "h2"
  | "small";

export type BoxProps<T extends TagName> = {
  children?: ReactNode[] | ReactNode;
  horizontal?: boolean;
  gap?: GapValue;
  flexWrap?: CSSProperties["flexWrap"];
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  inline?: boolean;
  tagName?: T;
} & HTMLAttributes<HTMLElementTagNameMap[T]>;

const Box = forwardRef<HTMLElementTagNameMap[TagName], BoxProps<TagName>>(
  (
    {
      children,
      horizontal = false,
      gap = 2,
      flexWrap,
      alignItems,
      justifyContent,
      inline,
      style,
      tagName = "div",
      className,
      ...attributeProps
    }: BoxProps<TagName>,
    ref: ForwardedRef<HTMLElementTagNameMap[TagName]>
  ) => {
    const TagName = tagName as TagName;
    let styles: CSSProperties = style ?? {};
    if (__IS_DEV__) {
      //The need to clone the style object from outside only arises in some edge cases while using HMR.
      //Also, structuredClone is not available in Node 16.
      //const styles: CSSProperties = style ? structuredClone(style) : {};
      styles = clone(styles);
    }
    alignItems && (styles.alignItems = alignItems);
    justifyContent && (styles.justifyContent = justifyContent);
    flexWrap && (styles.flexWrap = flexWrap);

    const mergedClassName = clsx(
      boxStyles.box,
      horizontal && boxStyles.h,
      //This is exhaustively type-checked when using the workspace TypeScript version with
      //typescript-plugin-css-modules. Otherwise this line will cause a TS error.
      gapStyles[`g-${gap}`],
      inline && boxStyles.inline,
      className
    );

    return (
      <TagName
        /*@ts-expect-error - ref union type wrong*/
        ref={ref}
        className={mergedClassName}
        style={styles}
        {...attributeProps}
      >
        {children}
      </TagName>
    );
  }
);

Box.displayName = "Box";

export default Box;
