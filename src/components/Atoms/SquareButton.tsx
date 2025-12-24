import { Button, ButtonProps } from "@geist-ui/core";
import { CSSProperties, forwardRef, PropsWithChildren } from "react";

type SquareButtonProps = PropsWithChildren<ButtonProps>;

const SquareButton = forwardRef<HTMLButtonElement, SquareButtonProps>(
  ({ style, ...props }: SquareButtonProps, ref) => {
    const inlineStyle = {
      aspectRatio: 1,
      padding: "0.25rem",
      ...style,
    } as CSSProperties;
    return <Button ref={ref} auto style={inlineStyle} {...props} />;
  }
);

SquareButton.displayName = "SquareButton";

export default SquareButton;
