import SquareButton from "@app/components/Atoms/SquareButton";
import usePrevious from "@app/hooks/usePrevious";
import themeIconStyles from "@app/styles/SwitchThemesButton.module.css";
import {
  ButtonProps,
  Popover,
  PopoverProps,
  Text,
  useMediaQuery,
  useToasts,
} from "@geist-ui/core";
import { Moon, Sun } from "@geist-ui/icons";
import clsx from "clsx";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import {
  useOnClickOutside,
  useTernaryDarkMode,
  useUpdateEffect,
} from "usehooks-ts";
import Box from "./Atoms/Box";

const SwitchThemesButton = ({ className }: ButtonProps) => {
  const { isDarkMode, ternaryDarkMode, toggleTernaryDarkMode } =
    useTernaryDarkMode();
  const isSystem = ternaryDarkMode === "system";

  const isMobile = useMediaQuery("mobile");

  //toasts are used later to confirm change on mobile, where no tooltip is shown before click.
  const { setToast } = useToasts({
    placement: "topLeft",
    width: "auto",
  });
  /**
   * Tooltip/Popover props can safely be set depending on client state.
   */
  const switchText = useMemo(() => {
    return `Switch ${
      isSystem ? "" : `${isDarkMode ? "to light" : "to system"}`
    } theme`;
  }, [isSystem, isDarkMode]);

  const statusText = useMemo(
    () =>
      `Using ${ternaryDarkMode} theme${
        isSystem ? ` (${isDarkMode ? "dark" : "light"})` : ""
      }`,
    [isDarkMode, isSystem, ternaryDarkMode]
  );

  const [isTooltipVisible, setTooltipVisibility] = useState(false);

  //would be nice to be able to infer the type of a forwarded ref from outside,
  //but a quick google search says this would apparently require a lot of code which I don't understand.
  //https://stackoverflow.com/questions/69233883/infer-the-forwarded-ref-type-of-third-party-component-in-consumer-side-component
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  //on desktop, this works as expected out-of-the-box, but not on mobile.
  useOnClickOutside(
    buttonRef,
    () => {
      setTooltipVisibility(false);
    },
    "mousedown"
  );

  /**
   * The icon and title atribute can NOT be safely set on intitial render,
   * they depend on client state and appear in the initial HTML.
   */
  const [Icon, setIcon] = useState(<Sun />);
  const [title, setTitle] = useState("Toggle color scheme");

  useEffect(() => setTitle(statusText), [statusText]);

  useEffect(() => {
    setIcon(
      isSystem ? (
        <Box
          style={{ display: "inline-flex" }}
          alignItems="center"
          justifyContent="center"
        >
          <Moon
            className={clsx(
              isSystem && themeIconStyles.systemThemeIcon,
              isDarkMode && themeIconStyles.active
            )}
          />

          <Sun
            className={clsx(
              isSystem && themeIconStyles.systemThemeIcon,
              isDarkMode || themeIconStyles.active
            )}
          />
        </Box>
      ) : isDarkMode ? (
        <Moon />
      ) : (
        <Sun />
      )
    );
  }, [isSystem, isDarkMode]);

  const previousMode = usePrevious(ternaryDarkMode);

  useUpdateEffect(() => {
    if (isMobile && previousMode !== ternaryDarkMode) {
      setToast({
        text: `Now using ${ternaryDarkMode} color scheme.`,
        delay: 2000,
      });
    }
  }, [ternaryDarkMode, isMobile, previousMode, setToast]);

  /*
  Avoid hydration mismatch by only adding the tooltip/popover on desktop later.
  Motivation: components are not "controlled", setting visible to false does not prevent the popover from
  opening, and the trigger prop does not have a no-op value
  */
  const [PopoverComponentType, setPopoverComponentType] = useState<
    typeof Fragment | typeof Popover
  >(Fragment);
  const [popoverProps, setPopoverProps] = useState({});

  useEffect(() => {
    const popoverContent = () => (
      <Text my={0} mx={1}>
        {switchText}
      </Text>
    );
    setPopoverComponentType(isMobile ? Fragment : Popover);
    setPopoverProps(
      isMobile
        ? {}
        : ({
            visible: isTooltipVisible,
            placement: "bottom",
            content: popoverContent,
            trigger: "hover",
          } as PopoverProps)
    );
  }, [isMobile, isTooltipVisible, switchText]);

  return (
    <PopoverComponentType {...popoverProps}>
      <SquareButton
        icon={Icon}
        onClick={toggleTernaryDarkMode}
        title={title}
        ref={buttonRef}
        style={{ height: "2.5rem" }}
        className={className}
      />
    </PopoverComponentType>
  );
};

export default SwitchThemesButton;
