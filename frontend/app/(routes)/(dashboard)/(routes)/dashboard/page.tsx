import { Metadata } from "next";

import { Wrapper } from "@/components/shared/wrapper";
import DashCards from "./_components/dash-cards";
import DashGraph from "./_components/dash-graph";
import ClientCard from "./_components/client-card";
import ProjectsCard from "./_components/projects-card";
import RecommendedCard from "./_components/recommended-card";

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

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1fr] xl:grid-cols-[2fr_1fr]">
          <DashGraph />
          <ClientCard />
          <ProjectsCard />
          <RecommendedCard />
        </div>
      </Wrapper>
    </div>
  );
}
