import About from "@blocks/home/About";
// import styles from "./page.module.css";
import HeroGrid from "@components/organisms/HeroGrid";
import { ImageTileProps } from "@components/molecules/ImageTile/ImageTile.types";
import Page from "@components/templates/page";
import TypeBar from "@components/molecules/TypeBar";
import { createClient } from "@/prismicio";

export default async function Home() {
  const client = createClient();
  const { data } = await client.getSingle("homepage");

  const heroGridData = data.slices2[0]?.items.map((item, index) => {
    return {
      id: index,
      label: item.label,
      title: item.title as string,
      cover: item.cover.url as string,
      link: item.link,
    };
  }) as ImageTileProps[];

  return (
    <Page>
      <HeroGrid data={heroGridData} />
      <About />
    </Page>
  );
}
