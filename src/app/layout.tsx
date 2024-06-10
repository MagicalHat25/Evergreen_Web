import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Inter } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sandbox",
  description: "Just a Sandbox, for now",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-background"}>
        <nav className={"m-2"}>
          <div className={"flex justify-between w-full"}>
            <Button className={"flex-1 mx-1 h-14 bg-topbar text-xl font-light"}>
              WELD
            </Button>
            <Button className={"flex-1 mx-1 h-14 bg-topbar text-xl font-light"}>
              TRIGGER
            </Button>
            <Button className={"flex-1 mx-1 h-14 bg-topbar text-xl font-light"}>
              SEQUENCE
            </Button>
            <Button className={"flex-1 mx-1 h-14 bg-topbar text-xl font-light"}>
            </Button>
            <Button className={"flex-1 mx-1 h-14 bg-topbar text-xl font-light"}>
              MORE -{">"}
            </Button>
            </div>
        </nav>
        <div className={"flex justify-between w-full"}>
          <div className={"left-arrow-box"}></div>
          <div className={"memory-box"}></div>
          <div className={"right-arrow-box"}></div>
        </div>
      {children}
      </body>
    </html>
  );
}
