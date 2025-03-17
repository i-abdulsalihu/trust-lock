"use client";

import { ChevronDown } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const projectData = [
  { month: "Jan", projects: 36 },
  { month: "Feb", projects: 50 },
  { month: "Mar", projects: 17 },
  { month: "Apr", projects: 28 },
  { month: "May", projects: 60 },
  { month: "Jun", projects: 38 },
  { month: "Jul", projects: 20 },
  { month: "Aug", projects: 50 },
  { month: "Sep", projects: 28 },
  { month: "Oct", projects: 17 },
  { month: "Nov", projects: 38 },
  { month: "Dec", projects: 67 },
];

const chartConfig = {
  views: {
    label: "Projects",
  },
  projects: {
    label: "Projects",
    color: "#3b82f6",
  },
} satisfies ChartConfig;

const DashGraph = () => {
  return (
    <div className="w-full space-y-1 rounded-3xl border bg-background">
      <div className="flex items-center justify-between p-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-medium text-muted-foreground">
            Total Projects
          </h2>
          <p className="font-normal">
            <span className="font-medium text-primary">12</span> projects this
            month
          </p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <h2 className="text-xl font-medium text-muted-foreground">67</h2>
          <button className="flex items-center justify-between rounded-md border px-4 py-2 text-sm">
            <span>Month</span>
            <ChevronDown className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>

      <ChartContainer config={chartConfig} className="h-[280px] w-full">
        <BarChart
          accessibilityLayer
          data={projectData}
          margin={{
            right: 20,
            top: -10,
            left: 0,
            bottom: 20,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            dy={10}
            minTickGap={32}
          />

          <YAxis
            domain={[0, 80]}
            tickLine={false}
            axisLine={false}
            dx={-10}
            tickCount={5}
          />

          <ChartTooltip
            content={
              <ChartTooltipContent
                className="w-[150px]"
                nameKey="views"
                labelFormatter={(value) => `${value} Projects`}
              />
            }
          />
          <Bar dataKey="projects" fill="hsl(var(--primary))" />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default DashGraph;
