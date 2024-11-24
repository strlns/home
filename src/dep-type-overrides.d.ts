import "react";

/*
workaround for https://github.com/geist-org/geist-ui/issues/858
*/
declare module "react" {
  export interface ButtonHTMLAttributes {
    placeholder?: ButtonHTMLAttributes["placeholder"];
    onPointerEnterCapture?: ButtonHTMLAttributes["onPointerEnterCapture"];
    onPointerLeaveCapture?: ButtonHTMLAttributes["onPointerLeaveCapture"];
  }
  export interface AnchorHTMLAttributes {
    placeholder?: AnchorHTMLAttributes["placeholder"];
    onPointerEnterCapture?: AnchorHTMLAttributes["onPointerEnterCapture"];
    onPointerLeaveCapture?: AnchorHTMLAttributes["onPointerLeaveCapture"];
  }
}
