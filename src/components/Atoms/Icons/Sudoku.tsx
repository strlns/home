import iconStyles from "@app/styles/Icon.module.css";
import clsx from "clsx";
import { SVGIconProps } from "./SVGIconProps";

export default function SudokuIcon({
  className: externalClassName,
  ...props
}: SVGIconProps) {
  const className = clsx(iconStyles.icon, externalClassName);
  return (
    <svg
      className={className}
      viewBox="0 0 228 230"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        style={{
          fill: "none",
          fillOpacity: "1",
          stroke: "currentColor",
          strokeWidth: "3",
          strokeLinejoin: "round",
          strokeMiterlimit: "4",
          strokeOpacity: "1",
        }}
        d="M12.34 733.578h205.993v207.993H12.34z"
        transform="translate(-1.336 -722.526)"
      />
      <path
        style={{
          color: "currentColor",
          fill: "none",
          fillOpacity: "1",
          fillRule: "evenodd",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "4",
          strokeOpacity: "1",
        }}
        d="M12.382 837.865h205.26M115.42 939.629V734.154"
        transform="translate(-1.336 -722.526)"
      />
      <path
        style={{
          color: "currentColor",
          clipRule: "nonzero",
          fill: "none",
          fillOpacity: "1",
          fillRule: "evenodd",
          stroke: "currentColor",
          strokeWidth: "1",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "4",
          strokeDasharray: "none",
          strokeDashoffset: "0",
          strokeOpacity: "1",
        }}
        d="M11.999 769.694h205.332m-204.68 33.327h206.206M47.03 940.162V733.764m33.745 207.742V733.108m-68.04 139.964h204.882M12.033 906.626h204.881m-66.576 33.461V733.69m33.744 207.741V733.033"
        transform="translate(-1.336 -722.526)"
      />
    </svg>
  );
}
