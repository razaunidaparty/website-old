import Script, { handleClientScriptLoad } from "next/script";

import Cover from "@components/organisms/Cover";
import HeaderNav from "@components/organisms/HeaderNav";
import Nav from "@components/organisms/Nav";
import React from "react";
import { StaticImageData } from "next/image";

interface PageProps {
  title?: string;
  children: React.ReactNode;
  cover?: {
    src: string | StaticImageData;
    alt: string;
    theme?: "light" | "dark";
  };
  modules?: PageModulesProps[];
}

type PageModulesProps = "tally";

export default function Page({ title = "Page Title", cover, modules, children }: PageProps) {
  const CoverImage = cover && cover.src && (
    <Cover title={title} src={cover.src} alt={cover.alt} theme={cover.theme} />
  );

  const handleModules = (modules: PageModulesProps[]) => {
    const modulesArray = [];
    if (modules.includes("tally")) {
      modulesArray.push(
        <Script
          key="tally"
          defer
          id="tally-js"
          src="https://tally.so/widgets/embed.js"
          onLoad={handleClientScriptLoad}
        />
      );
    }
    return modulesArray;
  };

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
