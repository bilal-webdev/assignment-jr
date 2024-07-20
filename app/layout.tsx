import type { Metadata } from "next";
import { Alef, Poller_One } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";

const poller_one = Poller_One({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poller-one',
})
const alef = Alef({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-alef',
})

export const metadata: Metadata = {
  title: "Jungle Rani",
  description: "Discover the beauty and secrets of the jungle with Jungle Rani. Join us for stories, photos, and articles on nature and adventure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poller_one.variable} ${alef.variable}`}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
