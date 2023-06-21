import HeaderNav from "@components/organisms/HeaderNav";
import Nav from "@components/organisms/Nav";
import React from "react";

interface PageProps {
  children: React.ReactNode;
}

// Todos
// TODO: Add Navigation and Footer

export default function Page({ children }: PageProps) {
  return (
    <>
      <HeaderNav />
      <Nav />
      <main>{children}</main>
    </>
  );
}
