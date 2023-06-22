import "@styles/base/reset.css";
import "@styles/base/globals.css";

import { Montserrat } from "next/font/google";
import Providers from "./providers";
// import "bootstrap/dist/css/bootstrap.min.css";


const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-primary",
});
export const metadata = {
  title: "Raza Unida Party",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
