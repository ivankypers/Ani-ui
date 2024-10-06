import type { Metadata } from "next";
import {Space_Grotesk} from 'next/font/google'
import './globals.css'


const spaceGrotesk = Space_Grotesk({subsets: ['latin']});

export const metadata: Metadata = {
  title: "Ani-ui",
  description: "Free animations and components for you¡",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
