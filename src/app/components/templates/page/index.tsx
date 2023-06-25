import Cover from "@components/organisms/Cover";
import HeaderNav from "@components/organisms/HeaderNav";
import Nav from "@components/organisms/Nav";
import { PageProps } from "./page.types";
import React from "react";
// import { createClient } from "@/prismicio";
import { handleModules } from "./page.handler";

export default async function Page({
  title = "Page Title",
  cover,
  modules,
  children,
}: PageProps) {
  // const client = createClient();
  // const { data } = await client.getSingle("settings");

  // console.log(data);

  const CoverImage = cover && cover.src && (
    <Cover title={title} src={cover.src} alt={cover.alt} theme={cover.theme} />
  );

  return (
    <>
      <HeaderNav />
      <Nav />
      {CoverImage}
      <main>{children}</main>
      {modules && modules.length > 0 && handleModules(modules)}
    </>
  );
}
