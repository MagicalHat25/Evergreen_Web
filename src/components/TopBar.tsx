'use client'

import {Button} from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import RightArrowIcon from "../../public/svg/RightArrow.svg";
import Link from "next/link";

interface TopBarProps {
  buttonLabels: string[];
  showMoreButton?: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ buttonLabels, showMoreButton=false }) => {
  return (
    <div className={"bg-background"}>
      <div className={"top-bar"}>
        {buttonLabels.map((label, index) => (
          <Button 
            key={index} 
            className={"top-bar-button"} 
            asChild
            onClick={(e) => {
              if(!label) {
                e.preventDefault();
            }
          }}
          >
            <Link href={`/${label.toLowerCase()}`} passHref>
              {label}
            </Link>
          </Button>
        ))}
        <Button className={"top-bar-button"}>
          {showMoreButton && (
            <>
              MORE
              <Image className={"more-arrow-icon"}
                     priority
                     src={RightArrowIcon}
                     alt={"Right Arrow"}
              />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}

export default TopBar