import { Tooltip } from "@geist-ui/core";

export default function English({ text = "English" }: { text?: string }) {
  return (
    <Tooltip text={text} aria-label={text}>
      🇺🇸 🇬🇧
    </Tooltip>
  );
}
