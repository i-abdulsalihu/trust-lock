import { Metadata } from "next";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SearchBar from "@/components/shared/search-bar";
import { Wrapper } from "@/components/shared/wrapper";
import MarketCard from "./_components/market-card";

export const metadata: Metadata = {
  title: "Marketplace",
};

export default function MarketplacePage() {
  return (
    <div className="flex-1 py-4 sm:px-6 md:py-6 lg:py-10">
      <Wrapper className="flex flex-col gap-8">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold">Marketplace</h1>
          <p className="text-base font-medium tracking-wide">
            Browse tasks posted by verified clients. Secure work, submit
            deliverables, and get paid through smart escrow.
          </p>
        </div>

        <div className="flex w-full items-center gap-4 rounded-md bg-background p-4 shadow-sm">
          <SearchBar className="!w-full" />

          <Select defaultValue="united-state">
            <SelectTrigger className="h-11 w-[180px] sm:h-12">
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className="h-12 rounded-md" value="united-state">
                United States
              </SelectItem>
              <SelectItem className="h-12 rounded-md" value="nigeria">
                Nigeria
              </SelectItem>
              <SelectItem className="h-12 rounded-md" value="france">
                France
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex w-full items-center gap-6 rounded-md bg-background p-4 shadow-sm sm:p-6">
          <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
            {Array.from({ length: 4 }).map((_, _key) => (
              <MarketCard index={_key + 1} key={_key} />
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
