import type { Metadata } from "next";
import "./styles/globals.css";
import "./styles/home.css";
import React from "react";

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
        {children}
      </body>
    </html>
  );
}
