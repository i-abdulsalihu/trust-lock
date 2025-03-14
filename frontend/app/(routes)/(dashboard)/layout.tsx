import { ReactNode } from "react";
import Sidebar from "./_components/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex flex-1 bg-secondary">
      <Sidebar />
      <div className="flex-1">
        <SidebarTrigger />
        {children}
      </div>
    </div>
  );
}
