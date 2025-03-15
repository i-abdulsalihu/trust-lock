import { TbLayoutDashboardFilled, TbLayoutDashboard } from "react-icons/tb";
import { TbShieldLock, TbShieldLockFilled } from "react-icons/tb";
import { RiShoppingCartLine, RiShoppingCartFill } from "react-icons/ri";
import { IoWallet, IoWalletOutline } from "react-icons/io5";
import { BsChatDotsFill, BsChatDots } from "react-icons/bs";
import { IoSettingsOutline, IoSettings } from "react-icons/io5";

export const sidebarItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    activeIcon: TbLayoutDashboardFilled,
    inactiveIcon: TbLayoutDashboard,
  },
  {
    title: "My Escrow",
    path: "/escrow",
    activeIcon: TbShieldLockFilled,
    inactiveIcon: TbShieldLock,
  },
  {
    title: "Marketplace",
    path: "/marketplace",
    activeIcon: RiShoppingCartFill,
    inactiveIcon: RiShoppingCartLine,
  },
  {
    title: "Wallet",
    path: "/wallet",
    activeIcon: IoWallet,
    inactiveIcon: IoWalletOutline,
  },
  {
    title: "Messages",
    path: "/messages",
    activeIcon: BsChatDotsFill,
    inactiveIcon: BsChatDots,
  },
  {
    title: "Settings",
    path: "/settings",
    activeIcon: IoSettings,
    inactiveIcon: IoSettingsOutline,
  },
];
