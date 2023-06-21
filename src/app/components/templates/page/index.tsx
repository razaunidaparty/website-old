import HeaderNav from "@components/organisms/HeaderNav";
import Image from "next/image";
import Nav from "@components/organisms/Nav";
import React from "react";

interface PageProps {
  children: React.ReactNode;
  cover: {
    src: string;
    alt: string;
  };
}

// TODO: Add Navigation and Footer

export default function Page({ cover, children }: PageProps) {
  return (
    <>
      <HeaderNav />
      <Nav />
      <main>{children}</main>
    </>
  );
}
