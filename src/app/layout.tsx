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
      <body className={inter.className}>
        <nav>
          <div className={"flex justify-between w-full"}>
            <Button className={"flex-1 mx-0.5"}>
              WELD
            </Button>
            <Button className={"flex-1 mx-0.5"}>
              TRIGGER
            </Button>
            <Button className={"flex-1 mx-0.5"}>
              SEQUENCE
            </Button>
            <Button className={"flex-1 mx-0.5"}>
              
            </Button>
            <Button className={"flex-1 mx-0.5"}>
              MORE -{">"}
            </Button>
            </div>
        </nav>
      {children}
      </body>
    </html>
  );
}
