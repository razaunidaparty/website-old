"use client";

import { SimpleGrid as Grid } from "@chakra-ui/react";
import Page from "@components/templates/page";
import React from "react";
import Section from "@components/templates/section";

export default function StudyGroupPage() {
  return (
    <Page
      title="Study Group"
      cover={{
        src: "/cover/donate_cover.jpg",
        alt: "Raza Unida Party Study Group",
        theme: "dark",
      }}
    >
      <Section>
        <Grid>
          <iframe
            data-tally-src="https://tally.so/embed/3XrQ6j?hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="598"
            frameBorder="0"
            // marginHeight="0"
            // marginWidth="0"
            title="Study Group"
          ></iframe>
          <div>
            <h1>Study Group Page</h1>
          </div>
        </Grid>
      </Section>
    </Page>
  );
}
