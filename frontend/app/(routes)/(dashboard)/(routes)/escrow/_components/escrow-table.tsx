"use client";

import { useState } from "react";
import { TbInfoTriangleFilled } from "react-icons/tb";
import { RiClipboardFill, RiSearch2Line } from "react-icons/ri";
import { HiDotsVertical } from "react-icons/hi";
import { IoStarSharp } from "react-icons/io5";
import { MdSimCardDownload } from "react-icons/md";
import { BiSolidHourglassBottom } from "react-icons/bi";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { TbEdit } from "react-icons/tb";
import { PiTrashSimpleFill } from "react-icons/pi";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const tabs = [
  {
    label: "Active Escrows",
    value: "escrows",
    icon: RiClipboardFill,
  },
  {
    label: "Resolutions",
    value: "resolutions",
    icon: TbInfoTriangleFilled,
  },
];

const statuses = [
  {
    label: "Submitted",
    value: "submitted",
    icon: MdSimCardDownload,
    style: "text-[#AF52DE] bg-[#F9F3FD] border-[#AF52DE4A]",
  },
  {
    label: "In Progress",
    value: "progress",
    icon: BiSolidHourglassBottom,
    style: "text-[#2A6FD0] bg-[#EFF8FF] border-[#9BC2F9]",
  },
  {
    label: "Paid",
    value: "paid",
    icon: HiMiniCurrencyDollar,
    style: "text-[#2AB255] bg-[#2AB25517] border-[#2AB2554A]",
  },
  {
    label: "Disputed",
    value: "disputed",
    icon: TbInfoTriangleFilled,
    style: "text-[#EF4444] bg-[#FDECEC] border-[#EF44444A]",
  },
  {
    label: "Revision Requested",
    value: "requested",
    icon: TbEdit,
    style: "text-[#FF9500] bg-[#FFF7EC] border-[#FF95004A]",
  },
  {
    label: "Canceled",
    value: "canceled",
    icon: PiTrashSimpleFill,
    style: "text-[#747474] bg-[#F5F5F5] border-[#D1D1D1]",
  },
];

const EscrowTable = () => {
  const [activeTab, setActiveTab] = useState<"escrows" | "resolutions">(
    "escrows",
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-6 border-b-2">
        {tabs.map((tab) => {
          const isActiveTab = activeTab === tab.value;

          return (
            <div
              key={tab.value}
              role="button"
              onClick={() =>
                setActiveTab(tab.value as "escrows" | "resolutions")
              }
              className={cn("relative flex items-center gap-2 pb-3", {
                "text-primary": isActiveTab,
              })}
            >
              <tab.icon className="!size-5" />
              <p className="text-base font-semibold">{tab.label}</p>

              {isActiveTab && (
                <span className="absolute -bottom-1 left-0 h-1 w-full bg-primary" />
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-lg font-semibold">Your Active Escrows</h2>

        <div className="flex items-center gap-2">
          <Select>
            <SelectTrigger className="h-11 w-max min-w-[128px] sm:h-12">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              {statuses.map((status, _key) => (
                <SelectItem
                  key={_key}
                  className="h-12 rounded-md"
                  value={status.value}
                >
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="relative h-11 w-full sm:h-12 lg:w-[271px]">
            <RiSearch2Line className="absolute left-4 top-1/2 size-5 -translate-y-1/2 opacity-40" />
            <Input
              type="search"
              placeholder="Search..."
              className="size-full bg-background pl-12 pr-4 !text-base"
            />
          </div>

          <Button className="h-11">
            <svg
              className="!size-5"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.62468 7.47005C5.64113 7.93 5.28161 8.3162 4.82167 8.33265C3.47331 8.38089 2.46893 9.36764 2.501 10.5475C2.50791 10.8018 2.6103 11.1565 2.93987 12.2081C3.65315 14.4839 4.7543 16.1727 7.1066 16.5879C7.53446 16.6634 8.02844 16.6666 9.22496 16.6666H10.7755C11.972 16.6666 12.466 16.6634 12.8938 16.5879C15.2461 16.1727 16.3473 14.4839 17.0605 12.2081C17.3901 11.1565 17.4925 10.8018 17.4994 10.5475C17.5315 9.36764 16.5271 8.38089 15.1787 8.33265C14.7188 8.3162 14.3593 7.93 14.3757 7.47006C14.3922 7.01011 14.7784 6.6506 15.2383 6.66705C17.3195 6.74149 19.227 8.32686 19.1655 10.5928C19.1514 11.1122 18.9632 11.7116 18.695 12.5662C18.6805 12.6122 18.6658 12.659 18.651 12.7065C17.8695 15.1997 16.4586 17.6511 13.1835 18.2292C12.5936 18.3333 11.9438 18.3333 10.8679 18.3332C10.8375 18.3332 10.8066 18.3332 10.7755 18.3332H9.22496C9.1938 18.3332 9.16296 18.3332 9.13246 18.3332C8.05661 18.3333 7.40675 18.3333 6.81689 18.2292C3.54177 17.6511 2.1309 15.1997 1.34948 12.7065C1.33459 12.659 1.31991 12.6122 1.30546 12.5661C1.03721 11.7116 0.849065 11.1122 0.834948 10.5928C0.773357 8.32688 2.68095 6.74149 4.76209 6.66705C5.22203 6.6506 5.60823 7.01011 5.62468 7.47005Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.8381 2.49984C10.8381 2.0396 10.4649 1.6665 10.0048 1.6665C9.5445 1.6665 9.17142 2.0396 9.17142 2.49984V8.74986H8.67617C8.52984 8.74978 8.35009 8.74961 8.20306 8.76803L8.20028 8.76836C8.0949 8.78153 7.61487 8.84136 7.38624 9.3127C7.1571 9.78503 7.40871 10.2019 7.46314 10.292L7.46518 10.2954C7.54202 10.4229 7.65381 10.5653 7.74576 10.6824L7.76554 10.7076C8.01107 11.0208 8.32938 11.4243 8.64642 11.7501C8.80459 11.9128 8.98567 12.0804 9.17809 12.2128C9.34909 12.3304 9.64092 12.4999 9.99984 12.4999C10.3588 12.4999 10.6506 12.3304 10.8216 12.2128C11.014 12.0804 11.1951 11.9128 11.3533 11.7501C11.6703 11.4243 11.9886 11.0208 12.2342 10.7076L12.2539 10.6824C12.3458 10.5653 12.4577 10.4229 12.5345 10.2954L12.5365 10.292C12.5909 10.2019 12.8426 9.78503 12.6134 9.3127C12.3848 8.84136 11.9048 8.78153 11.7994 8.76836L11.7966 8.76803C11.6496 8.74961 11.4698 8.74978 11.3235 8.74986H10.8381V2.49984Z"
                fill="white"
              />
            </svg>

            <span className="text-base font-medium">Export</span>
          </Button>
        </div>
      </div>

      <Table className="overflow-hidden rounded-t-lg bg-background">
        <TableHeader className="h-16 bg-[#F4F4F4]">
          <TableRow>
            <TableHead>Escrow ID</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Validator</TableHead>
            <TableHead>Project Name</TableHead>
            <TableHead>Amount Locked</TableHead>
            <TableHead>Project status</TableHead>
            <TableHead>Deadline</TableHead>
            <TableHead className="text-right">
              <HiDotsVertical className="ml-auto !size-4" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {statuses.map((status, _key) => (
            <TableRow key={_key} className="h-[84px]">
              <TableCell className="font-medium">#ESC-{_key + 1}</TableCell>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <div className="size-10 rounded-md bg-[#F4F4F4]"></div>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium">John Doe</p>
                    <span className="text-xs text-muted-foreground">
                      johndoe@gmail.com
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-medium">
                <div className="flex flex-col">
                  <p className="text-sm font-medium">Rookie_022</p>
                  <span className="flex items-center">
                    <IoStarSharp className="size-3 text-yellow-500" />
                    <IoStarSharp className="size-3 text-yellow-500" />
                    <IoStarSharp className="size-3 text-yellow-500" />
                    <IoStarSharp className="size-3 text-yellow-500" />
                    <IoStarSharp className="size-3 text-yellow-500" />
                  </span>
                </div>
              </TableCell>
              <TableCell className="font-medium">IJODA thread post</TableCell>
              <TableCell className="font-medium">
                <div className="flex items-center gap-1.5">
                  <svg
                    className="!size-4"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z"
                      fill="#5471B8"
                    />
                    <path
                      d="M8.75919 7.92936C8.75919 7.00011 8.19919 6.68161 7.07919 6.54861C6.27944 6.4423 6.11975 6.23011 6.11975 5.85823C6.11975 5.48636 6.38663 5.24748 6.9195 5.24748C7.39944 5.24748 7.66632 5.40673 7.79932 5.8053C7.81318 5.84384 7.83851 5.8772 7.87191 5.9009C7.90531 5.92461 7.94518 5.9375 7.98613 5.93786H8.41269C8.43733 5.93852 8.46184 5.93416 8.48475 5.92506C8.50765 5.91596 8.52847 5.90231 8.54594 5.88492C8.56341 5.86753 8.57716 5.84678 8.58637 5.82392C8.59558 5.80106 8.60005 5.77656 8.5995 5.75192V5.72567C8.54737 5.43732 8.40147 5.17425 8.18446 4.97733C7.96746 4.78042 7.69149 4.66069 7.39944 4.63673V3.99973C7.39944 3.89342 7.31938 3.8138 7.18638 3.78711H6.78607C6.67975 3.78711 6.59969 3.86673 6.573 3.99973V4.61048C5.77282 4.71636 5.26663 5.24748 5.26663 5.91161C5.26663 6.78748 5.7995 7.13267 6.9195 7.26567C7.66632 7.39823 7.90607 7.55792 7.90607 7.98273C7.90607 8.40711 7.53288 8.69936 7.02626 8.69936C6.33282 8.69936 6.09307 8.40755 6.013 8.00898C5.98675 7.90311 5.90625 7.84973 5.82619 7.84973H5.37294C5.34834 7.84914 5.32387 7.85353 5.30102 7.86266C5.27817 7.87179 5.2574 7.88546 5.23998 7.90284C5.22256 7.92022 5.20884 7.94095 5.19966 7.96378C5.19048 7.98661 5.18603 8.01107 5.18657 8.03567V8.06192C5.29288 8.72605 5.71988 9.2038 6.59969 9.3368V9.97423C6.59969 10.0801 6.67975 10.1602 6.81275 10.1864H7.21307C7.31938 10.1864 7.39944 10.1068 7.42613 9.97423V9.33636C8.22632 9.2038 8.75919 8.64598 8.75919 7.92892V7.92936Z"
                      fill="white"
                    />
                    <path
                      d="M5.63995 10.7174C3.56007 9.97369 2.49345 7.66369 3.26695 5.61925C3.66682 4.50362 4.54664 3.65444 5.63995 3.25587C5.7467 3.20294 5.79964 3.12331 5.79964 2.99031V2.61844C5.79964 2.51256 5.7467 2.43294 5.63995 2.40625C5.61326 2.40625 5.55989 2.40625 5.5332 2.4325C4.93314 2.61989 4.37607 2.92413 3.89407 3.3277C3.41207 3.73127 3.01466 4.2262 2.72473 4.78399C2.4348 5.34178 2.25806 5.95141 2.2047 6.57778C2.15134 7.20415 2.22241 7.83489 2.41382 8.43369C2.89332 9.92119 4.04001 11.0631 5.5332 11.5408C5.63995 11.5937 5.7467 11.5408 5.77295 11.4345C5.79964 11.4082 5.79964 11.3811 5.79964 11.3282V10.9563C5.79964 10.8767 5.72001 10.7708 5.63995 10.7174ZM8.4662 2.43294C8.35945 2.37956 8.2527 2.43294 8.22645 2.53881C8.19976 2.5655 8.19976 2.59219 8.19976 2.64513V3.017C8.19976 3.12331 8.27938 3.22919 8.35945 3.28256C10.4393 4.02631 11.5059 6.33631 10.7324 8.38075C10.3326 9.49638 9.45276 10.3456 8.35945 10.7441C8.2527 10.7971 8.19976 10.8767 8.19976 11.0097V11.3816C8.19976 11.4874 8.2527 11.5671 8.35945 11.5938C8.38613 11.5938 8.43951 11.5938 8.4662 11.5675C9.06626 11.3801 9.62333 11.0759 10.1053 10.6723C10.5873 10.2687 10.9847 9.7738 11.2747 9.21601C11.5646 8.65822 11.7413 8.04859 11.7947 7.42222C11.8481 6.79585 11.777 6.16511 11.5856 5.56631C11.1061 4.05256 9.9327 2.91069 8.4662 2.43294Z"
                      fill="white"
                    />
                  </svg>
                  <span>500 USDC</span>

                  <div className="rounded-full border border-[#BBBAF8] bg-[#D6D6FB80] px-2 text-[9px] font-semibold uppercase">
                    polygon
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-medium">
                <div
                  className={cn(
                    "5 flex h-7 w-max items-center gap-1 rounded-full border px-2 text-xs",
                    status.style,
                  )}
                >
                  <status.icon className="size-[14px]" />
                  <span>{status.label}</span>
                </div>
              </TableCell>
              <TableCell className="font-medium">2025 - 03 -23</TableCell>
              <TableCell className="text-right">
                <HiDotsVertical className="ml-auto !size-4" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EscrowTable;
