import { TbLayoutDashboardFilled, TbLayoutDashboard } from "react-icons/tb";
import { TbShieldLock, TbShieldLockFilled } from "react-icons/tb";
import { RiShoppingCartLine, RiShoppingCartFill } from "react-icons/ri";
import { IoWallet, IoWalletOutline } from "react-icons/io5";
import { IoChatboxEllipsesOutline, IoChatboxEllipses } from "react-icons/io5";
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
    path: "/my-escrow",
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
    activeIcon: IoChatboxEllipses,
    inactiveIcon: IoChatboxEllipsesOutline,
  },
  {
    title: "Settings",
    path: "/settings",
    activeIcon: IoSettings,
    inactiveIcon: IoSettingsOutline,
  },
];
