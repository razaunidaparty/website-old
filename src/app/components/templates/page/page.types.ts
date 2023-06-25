import { StaticImageData } from "next/image";

export interface PageProps {
  title?: string;
  children: React.ReactNode;
  cover?: {
    src: string | StaticImageData;
    alt: string;
    theme?: "light" | "dark";
  };
  modules?: PageModulesProps[];
}

export type PageModulesProps = "tally";
