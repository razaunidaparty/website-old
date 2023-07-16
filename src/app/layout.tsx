import "@styles/base/reset.css";
import "@styles/base/globals.scss";

import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import Providers from "./providers";
import { repositoryName } from "../prismicio";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-primary",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Raza Unida Party",
    default: "Raza Unida Party",
  },
  description: "",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className} suppressHydrationWarning>
        <Providers>{children}</Providers>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
