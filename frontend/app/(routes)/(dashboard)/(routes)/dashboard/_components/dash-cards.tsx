"use client";

import { Clipboard } from "@/components/shared/clipboard";
import { useWallet } from "@/hooks/useWallet";
import { formatAddress } from "@/lib/utils";
import { BiSolidHourglassBottom } from "react-icons/bi";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { PiShoppingBagOpenFill } from "react-icons/pi";

const DashCards = () => {
  const { connectedAccount } = useWallet();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
      <div className="w-full space-y-3 rounded-2xl border bg-background p-5">
        <div className="flex items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded-full bg-[#D6E7FE] text-primary">
            <HiMiniCurrencyDollar className="!size-4" />
          </div>
          <p className="text-base font-medium">Total Earning</p>
        </div>

        <div className="flex items-center gap-5">
          <h1 className="text-3xl font-bold leading-none md:text-4xl">
            $24,580
          </h1>

          <div className="flex size-8 items-center justify-center rounded-md bg-primary">
            <svg
              className="!size-3"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.67216 0.434812C8.44845 0.211112 8.16941 0.148333 7.90566 0.134887C7.66175 0.122455 7.35874 0.150032 7.01782 0.18106L6.19604 0.255762C5.61764 0.308324 5.13297 0.352362 4.77754 0.437421C4.42205 0.52251 4.0267 0.686919 3.87216 1.11382C3.71763 1.54071 3.91603 1.9201 4.1347 2.21306C4.34251 2.49148 4.66378 2.81621 5.04785 3.20039L0.809544 7.43867C0.5726 7.67566 0.5726 8.05979 0.809544 8.29672C1.0465 8.53371 1.43066 8.53371 1.66761 8.29672L5.9059 4.05845C6.29039 4.44282 6.6153 4.76433 6.89392 4.97226C7.18685 5.19093 7.56625 5.38934 7.99315 5.2348C8.42006 5.08026 8.58442 4.68491 8.66955 4.32942C8.75461 3.97399 8.79866 3.48932 8.85121 2.91093L8.9259 2.08915C8.9569 1.74818 8.98451 1.44519 8.97207 1.20133C8.9586 0.937546 8.89586 0.658512 8.67216 0.434812Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-full space-y-3 rounded-2xl border bg-background p-5">
        <div className="flex items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded-full bg-[#F9F3FD] text-[#AF52DE]">
            <BiSolidHourglassBottom className="!size-4" />
          </div>
          <p className="text-base font-medium">Pending Projects</p>
        </div>

        <div className="flex items-center gap-5">
          <h1 className="text-3xl font-bold leading-none md:text-4xl">04</h1>
        </div>
      </div>
      <div className="w-full space-y-3 rounded-2xl border bg-background p-5">
        <div className="flex items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded-full bg-[#2AB25517] text-[#2AB255]">
            <PiShoppingBagOpenFill className="!size-4" />
          </div>
          <p className="text-base font-medium">Total Projects</p>
        </div>

        <div className="flex items-center gap-5">
          <h1 className="text-3xl font-bold leading-none md:text-4xl">67</h1>
        </div>
      </div>
      <div className="w-full space-y-3 rounded-2xl border bg-background p-5">
        <div className="flex items-center gap-2">
          <svg
            className="size-5"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_148_512)">
              <path
                d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z"
                fill="#5471B8"
              />
              <path
                d="M8.75919 7.92936C8.75919 7.00011 8.19919 6.68161 7.07919 6.54861C6.27944 6.4423 6.11975 6.23011 6.11975 5.85823C6.11975 5.48636 6.38663 5.24748 6.9195 5.24748C7.39944 5.24748 7.66632 5.40673 7.79932 5.8053C7.81318 5.84384 7.83851 5.8772 7.87191 5.9009C7.90531 5.92461 7.94518 5.9375 7.98613 5.93786H8.41269C8.43733 5.93852 8.46184 5.93416 8.48475 5.92506C8.50765 5.91596 8.52847 5.90231 8.54594 5.88492C8.56341 5.86753 8.57716 5.84678 8.58637 5.82392C8.59558 5.80106 8.60005 5.77656 8.5995 5.75192V5.72567C8.54737 5.43732 8.40147 5.17425 8.18446 4.97733C7.96746 4.78042 7.69149 4.66069 7.39944 4.63673V3.99973C7.39944 3.89342 7.31938 3.8138 7.18638 3.78711H6.78607C6.67975 3.78711 6.59969 3.86673 6.573 3.99973V4.61048C5.77282 4.71636 5.26663 5.24748 5.26663 5.91161C5.26663 6.78748 5.7995 7.13267 6.9195 7.26567C7.66632 7.39823 7.90607 7.55792 7.90607 7.98273C7.90607 8.40711 7.53288 8.69936 7.02626 8.69936C6.33282 8.69936 6.09307 8.40755 6.013 8.00898C5.98675 7.90311 5.90625 7.84973 5.82619 7.84973H5.37294C5.34834 7.84914 5.32387 7.85353 5.30102 7.86266C5.27817 7.87179 5.2574 7.88546 5.23998 7.90284C5.22256 7.92022 5.20884 7.94095 5.19966 7.96378C5.19048 7.98661 5.18603 8.01107 5.18657 8.03567V8.06192C5.29288 8.72605 5.71988 9.2038 6.59969 9.3368V9.97423C6.59969 10.0801 6.67975 10.1602 6.81275 10.1864H7.21307C7.31938 10.1864 7.39944 10.1068 7.42613 9.97423V9.33636C8.22632 9.2038 8.75919 8.64598 8.75919 7.92892V7.92936Z"
                fill="white"
              />
              <path
                d="M5.63995 10.7174C3.56007 9.97369 2.49345 7.66369 3.26695 5.61925C3.66682 4.50362 4.54664 3.65444 5.63995 3.25587C5.7467 3.20294 5.79964 3.12331 5.79964 2.99031V2.61844C5.79964 2.51256 5.7467 2.43294 5.63995 2.40625C5.61326 2.40625 5.55989 2.40625 5.5332 2.4325C4.93314 2.61989 4.37607 2.92413 3.89407 3.3277C3.41207 3.73127 3.01466 4.2262 2.72473 4.78399C2.4348 5.34178 2.25806 5.95141 2.2047 6.57778C2.15134 7.20415 2.22241 7.83489 2.41382 8.43369C2.89332 9.92119 4.04001 11.0631 5.5332 11.5408C5.63995 11.5938 5.7467 11.5408 5.77295 11.4345C5.79964 11.4082 5.79964 11.3811 5.79964 11.3282V10.9563C5.79964 10.8767 5.72001 10.7708 5.63995 10.7174ZM8.4662 2.43294C8.35945 2.37956 8.2527 2.43294 8.22645 2.53881C8.19976 2.5655 8.19976 2.59219 8.19976 2.64513V3.017C8.19976 3.12331 8.27939 3.22919 8.35945 3.28256C10.4393 4.02631 11.5059 6.33631 10.7324 8.38075C10.3326 9.49638 9.45276 10.3456 8.35945 10.7441C8.2527 10.7971 8.19976 10.8767 8.19976 11.0097V11.3816C8.19976 11.4874 8.2527 11.5671 8.35945 11.5938C8.38614 11.5938 8.43951 11.5938 8.4662 11.5675C9.06626 11.3801 9.62333 11.0759 10.1053 10.6723C10.5873 10.2687 10.9847 9.7738 11.2747 9.21601C11.5646 8.65823 11.7413 8.04859 11.7947 7.42222C11.8481 6.79585 11.777 6.16511 11.5856 5.56631C11.1061 4.05256 9.9327 2.91069 8.4662 2.43294Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_148_512">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <p className="text-base font-medium">USDC Wallet Address</p>
        </div>

        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold leading-none md:text-4xl">
            {formatAddress(connectedAccount || "", 2)}
          </h1>
          <Clipboard content={connectedAccount || ""} />
        </div>
      </div>
    </div>
  );
};

export default DashCards;
