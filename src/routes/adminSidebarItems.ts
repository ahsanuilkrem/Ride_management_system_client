import AllDriver from "@/pages/admin/AllDriver";
import AllRide from "@/pages/admin/AllRide";
import Analytics from "@/pages/admin/Analytics";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const AllUser = lazy(() => import("@/pages/admin/AllUser"));


export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics
      },
      {
        title: "All User",
        url: "/admin/allUser",
        component: AllUser
      },
      {
        title: "All Ride",
        url: "/admin/allride",
        component: AllRide
      },
       {
        title: "All Driver",
        url: "/admin/allDriver",
        component: AllDriver
      },
      
      

    ],
  },
 

]