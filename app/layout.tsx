import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Vikas Yadav",
  description:
    "Frontend Engineer, Building performant softwares with React, Next.JS, NodeJS and all the cool stuffs out there",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${open_sans.className} antialiased dark`}>
        {children}
      </body>
    </html>
  );
}
