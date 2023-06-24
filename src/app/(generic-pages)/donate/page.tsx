"use client";

import Page from "@components/templates/page";
import React from "react";
import Script from "next/script";
import Section from "@components/templates/section";

export default function DonatePage() {
  return (
    <Page
      title="Donate"
      cover={{
        src: "/cover/donate_cover.jpg",
        alt: "Donate to Raza Unida Party",
        theme: "dark",
      }}
    >
      <Section>
        <iframe
          // allowpaymentrequest={true}
          frameBorder="0"
          height="600px"
          name="donorbox"
          scrolling="no"
          seamless={true}
          src="https://donorbox.org/embed/razaunidaparty"
          style={{
            // maxWidth: "425px",
            // minWidth: "250px",
            maxHeight: "none !important",
          }}
          width="100%"
        ></iframe>
      </Section>
      <Script src="https://donorbox.org/widget.js" />
    </Page>
  );
}
