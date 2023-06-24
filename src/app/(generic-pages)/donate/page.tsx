"use client";

import { Box, SimpleGrid as Grid } from "@chakra-ui/react";

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
        <Grid>
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <iframe
              // allowpaymentrequest={true}
              frameBorder="0"
              height="600px"
              name="donorbox"
              scrolling="no"
              seamless={true}
              src="https://donorbox.org/embed/razaunidaparty"
              style={{
                maxWidth: "423px",
                // minWidth: "250px",
                maxHeight: "none !important",
              }}
              width="100%"
            ></iframe>
          </Box>
        </Grid>
      </Section>
      <Script src="https://donorbox.org/widget.js" />
    </Page>
  );
}
