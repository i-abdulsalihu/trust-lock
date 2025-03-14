import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Set Up",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <div className="flex-1 bg-secondary">{children}</div>;
}
