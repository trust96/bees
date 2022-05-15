import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";

interface Props {
  size?: "small" | "medium" | "large";
}

export default function Logo({ size = "small" }: Props): ReactElement {
  return (
    <Link href="/">
      <a className="">
        <Image
          src="/logo.png"
          width={size === "small" ? 79.64 : size === "medium" ? 132.74 : 146.01}
          height={size === "small" ? 60 : size === "medium" ? 100 : 110}
          alt="logo"
        />
      </a>
    </Link>
  );
}
