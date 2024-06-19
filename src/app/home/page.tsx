import React from 'react';

import TopBar from "@/components/TopBar";
import MemoryBar from "@/components/MemoryBar";
import TriggerIconBar from "@/components/TriggerIconBar";
import SequenceIconBar from "@/components/SequenceIconBar";
import LeftMeterBox from "@/components/home/LeftMeterBox";
import RightMeterBox from "@/components/home/RightMeterBox";
import MiddleBox from "@/components/home/MiddleBox";

export default async function Home() {
  return (
    <main>
      <TopBar buttonLabels={["WELD", "TRIGGER", "SEQUENCE", ""]} showMoreButton={true} />
      <MemoryBar/>
      <div className="icon-bar-box">
        <TriggerIconBar/>
        <SequenceIconBar/>
      </div>
      <div className={"m-2 flex justify-between"}>
        <LeftMeterBox/>
        <MiddleBox/>
        <RightMeterBox/>
      </div>
    </main>
  );
}
