import SidebarContextProvider from "@/contexts/sidebar-context";
import ThemeContextProvider from "@/contexts/theme-context";
import "@/styles/styles.scss";
import "@/styles/tailwind.css";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard Design | Mohd Ayan Ansari",
  description:
    "A fully fledged website which is scalable and modular, It has pre-made user end responsive dashboard design. Created by Mohd Ayan Ansari",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body suppressHydrationWarning={true}>
        <ThemeContextProvider>
          <SidebarContextProvider>{children}</SidebarContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
