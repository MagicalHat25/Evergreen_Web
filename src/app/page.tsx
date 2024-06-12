import Image from 'next/image';
import FourTIcon from "../../public/svg/4T Icon.svg";
import React, { ReactNode } from 'react';

interface IconBarProps {
  children: ReactNode;
}

function IconBar({ children }: IconBarProps) {
  return (
    <div className="icon-bar-box">
      {children}
    </div>
  );
}

function TriggerIconBox() {
  return (
    <div className={"trigger-icon-box"}>
      <div className={"title-box"}>
        <span className="title-box-text">TRIGGER</span>
      </div>
      <div className="icon-row">
        <Image className={"icon"}
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
        <Image className={"icon"}
           priority
           src={FourTIcon}
           alt={"4T Icon"}
        />
      </div>
    </div>
  )
}

function SequenceIconBox() {
  return (
    <div className={"sequence-icon-box"}>
      <div className={"title-box"}>
        <span className="title-box-text">SEQUENCE</span>
      </div>
    </div>
  )
}

function LeftMeterBox () {
  return (
    <div className={"left-meter-box"}>
      <div className={"title-box"}>
        <span className="title-box-text">VOLTAGE</span>
      </div>
    </div>
  )
}

function MiddleBox () {
  return (
    <div className={"middle-box"}>
      <div className={"title-box"}>
        <span className="title-box-text text-nowrap">WELD PARAMETERS</span>
      </div>
    </div>
  )
}

function RightMeterBox () {
  return (
    <div className={"right-meter-box"}>
      <div className={"title-box"}>
        <span className="title-box-text text-nowrap">WIRE SPEED</span>
      </div>
    </div>
  )
}

export default async function Home() {
  return (
    <main>
      <IconBar>
        <TriggerIconBox/>
        <SequenceIconBox/>
      </IconBar>
      <div className={"m-2 flex justify-between"}>
        <LeftMeterBox/>
        <MiddleBox/>
        <RightMeterBox/>
      </div>
    </main>
  );
}
