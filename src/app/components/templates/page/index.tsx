import Cover from "../../organisms/Cover";
import HeaderNav from "@components/organisms/HeaderNav";
import Nav from "@components/organisms/Nav";
import React from "react";

interface PageProps {
  title: string;
  children: React.ReactNode;
  cover: {
    src: string;
    alt: string;
  };
}

export default function Page({
  title = "Page Title",
  cover,
  children,
}: PageProps) {
  const CoverImage = cover && cover.src && (
    <Cover title={title} src={cover.src} alt={cover.alt} />
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
