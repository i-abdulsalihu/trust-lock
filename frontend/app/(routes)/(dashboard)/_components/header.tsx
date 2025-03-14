import SearchBar from "@/components/shared/search-bar";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Header = () => {
  return (
    <header className="sticky left-0 top-0 w-full bg-background py-4">
      <div className="flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="flex md:hidden">
            <SidebarTrigger />
          </div>

          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
