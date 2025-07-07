import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { TopNav } from "./_components/topnav";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Prod Gallery",
  description: "Generated as a image gallery app using Next.js and Clerk",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geist.variable}` + "flex flex-col gap-4"}>
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
