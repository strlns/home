import { normalizePath } from "@app/renderer/normalizeRoutePath";
import { usePageContext } from "@app/renderer/usePageContext";
import navStyles from "@app/styles/Nav.module.css";
import { WithRequired } from "@app/utilities/utilityTypes";
import { Link, LinkProps } from "@geist-ui/core";
import clsx from "clsx";
import { useCallback, useMemo, useRef } from "react";

type NavLinkProps = WithRequired<LinkProps, "href">;

export default function NavLink({ href, children, ...props }: NavLinkProps) {
  const { urlPathname } = usePageContext();

  const isActive = useMemo(() => {
    return normalizePath(href) === normalizePath(urlPathname);
  }, [urlPathname, href]);

  const ref = useRef<HTMLAnchorElement>(null);

  //This makes navigation feel snappier on mobile as it circumvents "hover" state without click.
  //In navbar, we can count every tap as a "click".
  const onTouchStart = useCallback(() => {
    ref.current?.click();
  }, []);

  const className = clsx(
    navStyles.navLink,
    isActive && navStyles.active,
    props.className
  );
  return (
    <Link
      ref={ref}
      onTouchStart={onTouchStart}
      href={href}
      {...props}
      className={className}
    >
      {children}
    </Link>
  );
}
