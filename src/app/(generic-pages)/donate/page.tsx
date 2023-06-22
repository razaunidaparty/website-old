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
        src: "https://cdn.wccftech.com/wp-content/uploads/2023/06/iOS-17-7.jpg",
        alt: "Donate to Raza Unida Party",
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
