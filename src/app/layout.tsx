import type { Metadata } from "next";
import { Open_Sans, PT_Sans_Narrow } from "next/font/google";
import "./globals.css";
import "@/components/sites/amaali/amaali.css";
import { ShopProvider } from "@/components/sites/amaali/cart";
import { SiteChrome } from "@/components/sites/amaali/chrome";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const ptSansNarrow = PT_Sans_Narrow({
  variable: "--font-pt-sans-narrow",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ama-Ali – Just another WordPress site",
  description:
    "Ama.Ali Shop — furniture marketplace. Design furniture, living room, dining room and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${ptSansNarrow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ShopProvider>
          <SiteChrome>{children}</SiteChrome>
        </ShopProvider>
      </body>
    </html>
  );
}
