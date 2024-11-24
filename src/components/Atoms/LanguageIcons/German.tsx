import { Tooltip } from "@geist-ui/core";

export default function German({ text = "German" }: { text?: string }) {
  return (
    <Tooltip text={text} aria-label={text}>
      🇩🇪
    </Tooltip>
  );
}
