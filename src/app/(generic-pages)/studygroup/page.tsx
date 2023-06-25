import Grid from "@components/atoms/Grid";
import Page from "@components/templates/page";
import React from "react";
import Section from "@components/templates/section";
import { createClient } from "@/prismicio";

export default async function StudyGroupPage() {
  const client = createClient();
  const page = await client.getByUID("page", "studygroup");

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
          <h1>Study Group Page</h1>
        </Grid>
      </Section>
    </Page>
  );
}
