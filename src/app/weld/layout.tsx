import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import "./../styles/globals.css";
import Image from 'next/image';

import LeftArrowIcon from "../../../public/svg/LeftArrow.svg";
import RightArrowIcon from "../../../public/svg/RightArrow.svg";
import React from "react";
import Link from 'next/link';

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
    <div className={"top-bar"}>
      <Button className={"top-bar-button"}>
        <Link href="/">HOME</Link>
      </Button>
      <Button className={"top-bar-button"}>
        TRIGGER
      </Button>
      <Button className={"top-bar-button"}>
        SEQUENCE
      </Button>
      <Button className={"top-bar-button"}>
      </Button>
      <Button className={"top-bar-button"}>
        MORE
        <Image className={"more-arrow-icon"}
               priority
               src={RightArrowIcon}
               alt={"Right Arrow"}
        />
      </Button>
    </div>
    <div className={"memory-bar"}>
      <div className={"left-arrow-box"}>
        <Image className={"left-arrow-icon"}
               priority
               src={LeftArrowIcon}
               alt={"Left Arrow"}
        />
      </div>
      <div className={"memory-box"}>MEMORY: 1</div>
      <div className={"right-arrow-box"}>
        <Image className={"right-arrow-icon"}
               priority
               src={RightArrowIcon}
               alt={"Right Arrow"}
        />
      </div>
    </div>
    {children}
    </body>
    </html>
  );
}
