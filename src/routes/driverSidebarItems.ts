
import ActiveRides from "@/pages/driver/ActiveRider";
import Earnings from "@/pages/driver/Earnings";
import GetRide from "@/pages/driver/GetRide";
import RideHistoryDriver from "@/pages/driver/RideHistoryDriver";
import type { ISidebarItem } from "@/types";


export const driverSidebarItems: ISidebarItem[] = [
  {
    title: "DriverDashboard",
    items: [
      {
        title: "ActiveRider",
        url: "/driverDashboard/activeRider",
        component: ActiveRides
      },
      {
        title: "Earnings",
        url: "/driverDashboard/earnings",
        component: Earnings
      },
      {
        title: "GetRide",
        url: "/driverDashboard/getRide",
        component: GetRide
      },
      {
        title: "RideHistory",
        url: "/driverDashboard/rideHistory",
        component: RideHistoryDriver
      },

    ],
  },


]