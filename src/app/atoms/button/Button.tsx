import React, { forwardRef, HtmlHTMLAttributes, ReactElement } from "react";
import style from "./button.module.css";
import { Props } from "./Props";
export default forwardRef<
  HTMLButtonElement & HTMLAnchorElement,
  Props & HtmlHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>
>(function Button(
  {
    children,
    className,
    variant = "primary",
    size = "medium",
    block,
    icon,
    tag: Tag = "button",
    ...props
  }: Props & HtmlHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
  ref
): ReactElement {
  return (
    <Tag
      {...props}
      className={` ${className} ${style.button} ${
        (variant === "primary" && style.primary) ||
        (variant === "secondary" && style.secondary)
      } ${
        (size === "small" && style.small) ||
        (size === "medium" && style.medium) ||
        (size === "large" && style.large)
      }
      ${block && style.block}
      `}
      ref={ref}
    >
      {icon} <label className={`${style.label}`}>{children}</label>
    </Tag>
  );
});
