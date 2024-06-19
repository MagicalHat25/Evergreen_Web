import React from 'react';
import TopBar from "@/components/TopBar";

export default async function Home() {
  
  return (
    <main>
      <TopBar buttonLabels={["HOME", "", "", ""]} showMoreButton={false} />
    </main>
  );
}
