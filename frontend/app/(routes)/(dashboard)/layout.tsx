import { ReactNode } from "react";

import Sidebar from "./_components/sidebar";
import Header from "./_components/header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex flex-1 bg-secondary">
      <Sidebar />

      <div className="flex-1">
        <Header />
        {children}
      </div>
    </div>
  );
}
