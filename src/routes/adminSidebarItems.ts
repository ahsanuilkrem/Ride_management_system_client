import AllRide from "@/pages/admin/AllRide";
import UpdateUser from "@/pages/UpdateUser";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const AllUser = lazy(() => import("@/pages/admin/AllUser"));


export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "AllUser",
        url: "/admin/allUser",
        component: AllUser
      },
      {
        title: "UpdateProfile",
        url: "/admin/UserUpdate",
        component: UpdateUser
      },


    ],
  },
  {
    title: "RiderDashboard",
    items: [
      {
        title: "AllRide",
        url: "/admin/allride",
        component: AllRide
      },

    ],
  },

]