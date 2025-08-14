import type { Metadata } from "next";
import { Outfit} from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import Provider from "./provider";



const outfit =  Outfit({subsets:['latin']})

export const metadata: Metadata = {
  title: "RankTube",
  description: "RankTube helps you optimize YouTube content with AI tools.",
   icons: {
    icon: "/logo.png", // or .png
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={outfit.className}
        >
          <Provider>
            {children}

          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
