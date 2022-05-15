import React, { ReactElement } from "react";
import { Props } from "./Props";
import style from "./container.module.css";
export default function Container({
  children,
  className = "",
  fluid,
}: Props): ReactElement {
  return (
    <div
      className={`${fluid ? "px-4" : "container mx-auto px-4 md:px-0"} ${
        style.container
      } ${className}`}
    >
      {children}
    </div>
  );
}
