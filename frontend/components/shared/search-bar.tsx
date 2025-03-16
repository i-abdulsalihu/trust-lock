"use client";

import { RiSearch2Line } from "react-icons/ri";
import { FC, useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Skeleton } from "../ui/skeleton";

interface SidebarBarProps {
  className?: string;
}

const SearchComponent: FC<SidebarBarProps> = ({ className }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const currentSearch = searchParams.get("search") || "";
    setSearchTerm(currentSearch);
  }, [searchParams]);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newSearchTerm = event.target.value;
      setSearchTerm(newSearchTerm);

      const params = new URLSearchParams(searchParams.toString());
      if (newSearchTerm) {
        params.set("search", newSearchTerm);
      } else {
        params.delete("search");
      }

      router.replace(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams],
  );

  return (
    <div
      className={cn(
        "relative h-11 w-full sm:h-12 lg:w-[480px] xl:w-[555px]",
        className,
      )}
    >
      <RiSearch2Line className="absolute left-4 top-1/2 size-5 -translate-y-1/2 opacity-40" />
      <Input
        type="search"
        placeholder="Search..."
        className="size-full bg-secondary pl-12 pr-4 !text-base"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

const SearchBar: FC<SidebarBarProps> = ({ className }) => (
  <Suspense
    fallback={
      <Skeleton className="h-11 w-full sm:h-12 lg:w-[480px] xl:w-[555px]" />
    }
  >
    <SearchComponent className={className} />
  </Suspense>
);

export default SearchBar;
