import { Metadata } from "next";
import Page from "@components/templates/page";
import React from "react";
import Section from "@components/templates/section";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "",
};

export default function StudygroupSignupPage() {
  return (
    <Page
      title="Sign up"
      cover={{
        src: "/cover/donate_cover.jpg",
        alt: "Raza Unida Party Study Group",
        theme: "dark",
      }}
      modules={["tally"]}
    >
      <Section>
        <iframe
          data-tally-src="https://tally.so/embed/3XrQ6j?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          width="100%"
          height="284"
          frameBorder="0"
          title="Study Group Form"
        ></iframe>
      </Section>
    </Page>
  );
}
