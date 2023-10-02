import { Sidebar } from "@/components/index";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={`flex bg-app-dark-1`}>
      <Sidebar />
      {children}
    </main>
  );
}
