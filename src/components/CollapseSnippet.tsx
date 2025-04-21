import useDeferredTernaryDarkMode from "@app/hooks/useDeferredDarkMode";
import usePrevious from "@app/hooks/usePrevious";
import styles from "@app/styles/Snippet.module.css";
import { Snippet, SnippetProps } from "@geist-ui/core";
import { ChevronDown, ChevronUp } from "@geist-ui/icons";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import SquareButton from "./Atoms/SquareButton";

type CollapseSnippetProps = {
  initiallyCollapsed?: boolean;
} & Omit<SnippetProps, "symbol">;

export default function CollapseSnippet({
  text,
  className: outerClassName,
  initiallyCollapsed = true,
}: CollapseSnippetProps) {
  const { isDarkMode } = useDeferredTernaryDarkMode();

  const [collapsed, setCollapsed] = useState(initiallyCollapsed);
  const wasCollapsed = usePrevious(collapsed);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!collapsed && wasCollapsed) {
      wrapperRef.current?.scrollIntoView({ block: "start" });
    }
  }, [wasCollapsed, collapsed]);

  return (
    <div className={styles.wrap} ref={wrapperRef}>
      <Snippet
        className={clsx(
          collapsed && styles.truncated,
          isDarkMode && styles.dark,
          outerClassName
        )}
        symbol=""
        text={text}
      />
      <SquareButton
        icon={collapsed ? <ChevronDown /> : <ChevronUp />}
        className={styles.chevron}
        onClick={() => setCollapsed((before) => !before)}
      />
    </div>
  );
}
