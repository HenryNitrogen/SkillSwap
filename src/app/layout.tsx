import "@/styles/globals.css";
import "@/styles/theme.css";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { TRPCReactProvider } from "@/trpc/react";
import { SessionProvider } from "@/components/SessionProvider";

export const metadata: Metadata = {
  title: "SkillSwap - Teach & Learn Anything",
  description: "Meet, chat, and study with students from around the world",
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
    <html lang="en" className={`${geist.variable} dark`}>
      <body>
      <SmoothCursor />

        <SessionProvider>
          <TRPCReactProvider>
            <Navbar />
            
            {children}
           
          </TRPCReactProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
