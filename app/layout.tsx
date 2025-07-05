import type { Metadata } from "next";
import { Open_Sans, Source_Sans_3, Rouge_Script, Meow_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/home/footer";

export const metadata: Metadata = {
  title: "Claylab",
};

const openSans = Open_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-opensans" });
const sourceSans = Source_Sans_3({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-sourceSans" });
const roughScript = Rouge_Script({ subsets: ["latin"], weight: ["400"], variable: "--font-roughScript" });
const meowScript = Meow_Script({ subsets: ["latin"], weight: ["400"], variable: "--font-meowScript" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${sourceSans.variable} ${roughScript.variable} ${meowScript.variable}`}>
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}