import React, { useState } from "react";
import ImageNext from "next/image";
type Props = {
  src: StaticImageData;
  alt: string;
  className?: string;
};

export default function Image({ alt, src, className = "" }: Props) {
  return (
    <>
      <ImageNext
        src={src}
        layout="responsive"
        alt={alt}
        objectFit="contain"
        className={className}
      />
    </>
  );
}
