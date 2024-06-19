'use client'

import { useRouter } from 'next/navigation'
import {Button} from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import RightArrowIcon from "../../public/svg/RightArrow.svg";
import LeftArrowIcon from "../../public/svg/LeftArrow.svg";

const TopBar = () => {
  const router = useRouter();

  return (
    <body className={"bg-background"}>
      <div className={"top-bar"}>
        <Button className={"top-bar-button"} type="button" onClick={() => router.push('/weld')}>
          WELD
        </Button>
        <Button className={"top-bar-button"}>
          TRIGGER
        </Button>
        <Button className={"top-bar-button"} type="button" onClick={() => router.push('/sequence')}>
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
    </body>
  );
}

export default TopBar