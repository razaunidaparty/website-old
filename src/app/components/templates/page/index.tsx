import Cover from "@components/organisms/Cover";
import HeaderNav from "@components/organisms/HeaderNav";
import Nav from "@components/organisms/Nav";
import React from "react";
import { StaticImageData } from "next/image";

interface PageProps {
  title: string;
  children: React.ReactNode;
  cover: {
    src: string | StaticImageData;
    alt: string;
    theme?: "light" | "dark";
  };
}

export default function Page({
  title = "Page Title",
  cover,
  children,
}: PageProps) {
  const CoverImage = cover && cover.src && (
    <Cover title={title} src={cover.src} alt={cover.alt} theme={cover.theme} />
  );

  return (
    <>
      <HeaderNav />
      <Nav />
      {CoverImage}
      <main>{children}</main>
    </>
  );
}
