import Footer from "app/organisms/footer/Footer";
import Navigation from "app/organisms/navigation/Navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
