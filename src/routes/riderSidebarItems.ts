
import RiderDetails from "@/pages/rider/RiderDetails";
import RiderHistory from "@/pages/rider/RiderHistory";
import UpdateUser from "@/pages/UpdateUser";
import type { ISidebarItem } from "@/types";


export const riderSidebarItems: ISidebarItem[] = [
    {
        title: "RederDashboard",
        items: [
            {
                title: "RiderHistory",
                url: "/rederDashboard/riderHistory",
                component: RiderHistory,

            },
            {
                title: "UpdateProfile",
                url: "/rederDashboard/UserUpdate",
                component: UpdateUser
            },
             {
                title: "RiderDetails",
                url: "/rederDashboard/rideDetails",
                component: RiderDetails
            },
        ],
    },


]