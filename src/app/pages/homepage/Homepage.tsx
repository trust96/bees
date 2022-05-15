import React from "react";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

export default function Homepage({ children }: Props) {
  return <>{children}</>;
}

Homepage.Header = Header;
