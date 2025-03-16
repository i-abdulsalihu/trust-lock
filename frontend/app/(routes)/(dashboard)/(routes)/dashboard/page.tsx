import { Metadata } from "next";

import { Wrapper } from "@/components/shared/wrapper";
import DashCards from "./_components/dash-cards";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <div className="flex-1 py-4 sm:px-6 md:py-6 lg:py-10">
      <Wrapper className="flex flex-col gap-8">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold">Welcome, Ella! 👋</h1>
          <p className="text-base font-medium tracking-wide">
            Hope your having a good day? Your Moola project is still pending,
            hope you remember.
          </p>
        </div>

        <DashCards />
      </Wrapper>
    </div>
  );
}
