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
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
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
          <div className="flex size-7 items-center justify-center rounded-full bg-[#2AB25517] text-[#2AB255]">
            <PiShoppingBagOpenFill className="!size-4" />
          </div>
          <p className="text-base font-medium">USDC Wallet Address</p>
        </div>

        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold leading-none md:text-2xl">
            {formatAddress(connectedAccount || "", 2)}
          </h1>
          <Clipboard content={connectedAccount || ""} />
        </div>
      </div>
    </div>
  );
};

export default DashCards;
