import type { Metadata } from "next";
import { Didact_Gothic } from "next/font/google";
import "./globals.css";
import { cx } from "class-variance-authority";
import Header from "@/components/system/header";
import CustomHeader from "@/components/system/customHeader";
import ContactHeader from "@/components/system/contact_header";

const inter = Didact_Gothic({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Ти ай ложистик",
  description: "ТЭЭВЭР ЗУУЧЛАЛЫН ЦОГЦ ШИЙДЭЛ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cx(inter.className, "")}>
        <div className="relative overflow-x-hidden w-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
