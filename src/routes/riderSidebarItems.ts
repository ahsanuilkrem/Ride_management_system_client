
import ActiveRider from "@/pages/rider/ActiveRider";
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
                title: "RiderHistory",
                url: "/rederDashboard/riderHistory",
                component: RiderHistory,

            },
            {
                title: "ActiveRider",
                url: "/rederDashboard/activeRider",
                component: ActiveRider
            }
            
        ],
    },


]