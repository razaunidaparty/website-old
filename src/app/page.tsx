// import Congreso from "./congreso/page";
// import styles from "./page.module.css";

import Page from "@components/templates/page";
import { PrismicRichText } from "@prismicio/react";
import { createClient } from "@/prismicio";

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return (
    <Page>
      {/* <p>Test</p> */}
      <PrismicRichText field={page.data.text} />
    </Page>
  );
}
