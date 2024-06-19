import type { Metadata } from "next";
import "./styles/globals.css";
import React from "react";
import TopBar from "@/components/TopBar";

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
        <TopBar buttonLabels={["WELD", "TRIGGER", "SEQUENCE", ""]} />
      {children}
      </body>
    </html>
  );
}
