// import styles from "./page.module.css";
import HeroGrid from "@components/organisms/HeroGrid";
import Page from "@components/templates/page";
import { createClient } from "@/prismicio";

export default async function Home() {
  const client = createClient();
  const { data } = await client.getSingle("homepage");

  const heroGridData = data.slices2[0]?.items.map((item) => {
    return {
      label: item.label,
      title: item.title as string,
      cover: item.cover.url as string,
      link: item.link,
    };
  }) as any;

  return (
    <Page>
      <HeroGrid data={heroGridData} />
    </Page>
  );
}
