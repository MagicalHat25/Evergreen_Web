import "./../styles/globals.css";
import React from "react";

import TopBar from "@/components/TopBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-background"}>
        <TopBar />
      {children}
      </body>
    </html>
  );
}
