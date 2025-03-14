import { RiSearch2Line } from "react-icons/ri";

import { Input } from "../ui/input";

const SearchBar = () => {
  return (
    <div className="relative h-11 w-full sm:h-12 sm:w-[320px] lg:w-[555px]">
      <RiSearch2Line className="absolute left-4 top-1/2 size-5 -translate-y-1/2 opacity-40" />
      <Input
        type="search"
        placeholder="Search..."
        className="size-full bg-secondary pl-12 pr-4 !text-base"
      />
    </div>
  );
};

export default SearchBar;
