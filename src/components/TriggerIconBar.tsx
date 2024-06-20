import Image from "next/image";
import FourTIcon from "../../public/svg/4T Icon.svg";
import React from "react";

function TriggerIconBar() {
  return (
    <div className={"trigger-icon-box"}>
      <div className={"title-box"}>
        <span className="title-box-text">TRIGGER</span>
      </div>
      <div className="icon-row">
        <Image className={"icon icon-active"}
               priority
               src={FourTIcon}
               alt={"4T Icon"}
        />
        <Image className={"icon icon-inactive"}
               priority
               src={FourTIcon}
               alt={"4T Icon"}
        />
        <Image className={"icon icon.inactive"}
               priority
               src={FourTIcon}
               alt={"4T Icon"}
        />
        <Image className={"icon icon.inactive"}
               priority
               src={FourTIcon}
               alt={"4T Icon"}
        />
      </div>
    </div>
  )
}

export default TriggerIconBar