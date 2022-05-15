import React, { ReactNode } from "react";
import style from "./card.module.css";
type Props = {
  className?: string;
  children: ReactNode;
};

export default function Card({ children, className }: Props) {
  return (
    <div className={`${style.card} ${className} drop-shadow-xl rounded-lg  `}>
      {children}
    </div>
  );
}

interface HProps {
  children: ReactNode;
  className?: string;
}
Card.Header = function Header({ children, className }: HProps) {
  return (
    <>
      <div
        className={`${className} border-b border-b-gray-300 border-b-solid p-2`}
      >
        {children}
      </div>
    </>
  );
};
interface BProps {
  children: ReactNode;
  className?: string;
}
Card.Body = function Body({ children, className }: BProps) {
  return (
    <>
      <div className={`${className} p-2`}>{children}</div>
    </>
  );
};
interface FProps {
  children: ReactNode;
  className?: string;
}
Card.Footer = function Footer({ children, className }: FProps) {
  return (
    <>
      <div className={`${className}`}>{children}</div>
    </>
  );
};
