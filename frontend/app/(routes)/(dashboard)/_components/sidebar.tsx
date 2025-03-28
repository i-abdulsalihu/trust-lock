"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  Sidebar as SidebarContainer,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site.config";
import { sidebarItems } from "@/lib/constants";

const Sidebar = () => {
  const pathname = usePathname();
  const { setOpenMobile } = useSidebar();

  return (
    <SidebarContainer className="!border-r-0">
      <SidebarHeader className="mb-4 p-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={siteConfig.favicon}
            alt={siteConfig.title}
            width={28}
            height={28}
            priority
            quality={100}
            className="object-contain"
          />
          <Image
            src="/svg/logo.svg"
            alt={siteConfig.title}
            width={100}
            height={30}
            priority
            quality={100}
            className="object-contain"
          />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => {
                const isActive = item.path === pathname;
                const Icon = isActive ? item.activeIcon : item.inactiveIcon;

                return (
                  <SidebarMenuItem
                    key={item.title}
                    onClick={() => setOpenMobile(false)}
                  >
                    <SidebarMenuButton
                      asChild
                      className={cn("h-12 gap-3 px-6 sm:h-14", {
                        "bg-[#F5F9FF] text-primary hover:bg-[#F5F9FF] hover:text-primary":
                          isActive,
                      })}
                    >
                      <Link href={item.path}>
                        <Icon className="!size-5 sm:!size-6" />
                        <span className="text-base font-medium tracking-wide sm:text-lg">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;
