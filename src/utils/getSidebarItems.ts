import { role } from "@/constants/role";
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { driverSidebarItems } from "@/routes/driverSidebarItems";
import { riderSidebarItems } from "@/routes/riderSidebarItems";
import type { TRole } from "@/types";



export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.ADMIN:
      return [...adminSidebarItems, ...driverSidebarItems];
    case role.DRIVER:
      return [...driverSidebarItems];
    case role.RIDER:
      return [...riderSidebarItems];
    default:
      return [];
  }
};