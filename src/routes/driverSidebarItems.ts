
import DriverAvailability from "@/pages/driver/DriverAvailability";
import Earnings from "@/pages/driver/Earnings";
import type { ISidebarItem } from "@/types";


export const driverSidebarItems : ISidebarItem[] = [
    {
      title: "DriverDashboard",
      items: [
        {
          title: "Earnings",
          url: "/driverDashboard/earnings",
          component: Earnings
        },
         {
          title: "AvailabilityUpdate",
          url: "/driverDashboard/avilability",
          component: DriverAvailability
        },
      
       
            
      
      ],
    },
   

  ]