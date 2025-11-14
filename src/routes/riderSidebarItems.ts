import DirverReguest from "@/pages/rider/DirverReguest";
import RequestRide from "@/pages/rider/RequestRide";
import RiderHistory from "@/pages/rider/RiderHistory";
import type { ISidebarItem } from "@/types";


export const riderSidebarItems: ISidebarItem[] = [
    {
        title: "RederDashboard",
        items: [
             {
                title: "Book Ride",
                url: "/rederDashboard/requestRide",
                component: RequestRide
            },
            {
                title: "Rider History",
                url: "/rederDashboard/riderHistory",
                component: RiderHistory,

            },
            {
                title: "Driver Reguest",
                url: "/rederDashboard/driverReguest",
                component: DirverReguest
            }
            // {
            //     title: "ActiveRider",
            //     url: "/rederDashboard/activeRider",
            //     component: ActiveRider
            // }
            
        ],
    },


]