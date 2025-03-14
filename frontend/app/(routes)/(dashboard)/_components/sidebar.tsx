import Image from "next/image";

import {
  Sidebar as Aside,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { siteConfig } from "@/config/site.config";

const Sidebar = () => {
  return (
    <Aside>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Aside>
    // <div className="w-full max-w-xs bg-background px-6 py-8">
    //   <div className="flex items-center gap-2">
    //     <Image
    //       src={siteConfig.favicon}
    //       alt={siteConfig.title}
    //       width={28}
    //       height={28}
    //       priority
    //       quality={100}
    //       className="object-contain"
    //     />
    //     <Image
    //       src="/svg/logo.svg"
    //       alt={siteConfig.title}
    //       width={100}
    //       height={30}
    //       priority
    //       quality={100}
    //       className="object-contain"
    //     />
    //   </div>
    // </div>
  );
};

export default Sidebar;
