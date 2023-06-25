// import styles from "./page.module.css";
import HeroGrid from "@components/organisms/HeroGrid";
import Page from "@components/templates/page";
// import { PrismicRichText } from "@prismicio/react";
// import { createClient } from "@/prismicio";

export default async function Home() {
  // const client = createClient();
  // const { data } = await client.getSingle("homepage");

  return (
    <Page>
      <HeroGrid />
    </Page>
  );
}
