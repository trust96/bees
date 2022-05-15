import React, { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({
  children,
  className,
  id,
}: Props): ReactElement {
  return (
    <section className={`${className} py-24`} id={`${id}`}>
      {children}
    </section>
  );
}
