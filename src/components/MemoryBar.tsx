import React from "react";
import Image from "next/image";
import RightArrowIcon from "../../public/svg/RightArrow.svg";
import LeftArrowIcon from "../../public/svg/LeftArrow.svg";

const TopBar: React.FC = () => {
  return (
    <div className={"bg-background"}>
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
    </div>
  );
}

export default TopBar