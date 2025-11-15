
import ActiveRides from "@/pages/driver/ActiveRider";
import DriverEarning from "@/pages/driver/DriverEarning";
import DrivingProfile from "@/pages/driver/DrivingProfile";

import GetRide from "@/pages/driver/GetRide";
import RideHistoryDriver from "@/pages/driver/RideHistoryDriver";
import type { ISidebarItem } from "@/types";


export const driverSidebarItems: ISidebarItem[] = [
  {
    title: "DriverDashboard",
    items: [
      {
        title: "My Earnings",
        url: "/driverDashboard/earnings",
        component: DriverEarning
      },
      {
        title: "ActiveRider",
        url: "/driverDashboard/activeRider",
        component: ActiveRides
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
       {
        title: "My Driver Profile",
        url: "/driverDashboard/drivingProfile",
        component: DrivingProfile
      },

    ],
  },


]