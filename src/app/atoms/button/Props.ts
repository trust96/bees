import { ReactElement, ReactNode } from "react";

export interface Props {
  children: ReactNode;
  className?: string;
  icon?: ReactElement;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  block?: boolean;
  tag?: "button" | "a";
}
