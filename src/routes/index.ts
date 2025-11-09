import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import Driver from "@/pages/Driver";
import Login from "@/pages/Login";
import Register from "@/pages/register";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { riderSidebarItems } from "./riderSidebarItems";
import { driverSidebarItems } from "./driverSidebarItems";
import RiderHistory from "@/pages/rider/RiderHistory";
import Earnings from "@/pages/driver/Earnings";
import { lazy } from "react";
import Unauthorized from "@/pages/Unauthorized";
import  { withAuth } from "@/utils/withAuth";
import { role } from "@/constants/role";
import type { TRole } from "@/types";
import RideRequestForm from "@/pages/RideRequestForm";
import UpdateUser from "@/pages/UpdateUser";
import Homepage from "@/pages/Homepage";
import Features from "@/pages/Features";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";


const Analytics = lazy(() => import("@/pages/admin/AllUser"));

export const router = createBrowserRouter([
    {
        Component: App,
        path: "/",
        children: [
            {
                Component: Homepage,
                index:true,
                
            },
            {
                Component: About,
                path: "about",
            },
            {
                Component: Features,
                path: "features",
            },
            {
                Component: Contact,
                path: "contact",
            },{
                Component: FAQ,
                path: "faq",
            },
            {
                Component: RideRequestForm,
                path: "rider",
            },
            {
                Component: Driver,
                path: "driver",
            },
            {
                Component: UpdateUser,
                path: "UserUpdate",
            },
        
        ]
    },
    {
        Component: withAuth(DashboardLayout, role.ADMIN as TRole),
        path: "/admin",

        children: [
            { index: true, Component: Analytics },
            ...generateRoutes(adminSidebarItems)]
    },
    {
        Component: withAuth(DashboardLayout, role.RIDER as TRole ),
        path: "/rederDashboard",
        children: [
            { index: true, Component: RiderHistory },
            ...generateRoutes(riderSidebarItems)]
    },
    {
        Component: withAuth(DashboardLayout, role.DRIVER as TRole ),
        path: "/driverDashboard",
        children: [
            { index: true, Component: Earnings },
            ...generateRoutes(driverSidebarItems)]
    },
    {
        Component: Login,
        path: "/login"
    },
    {
        Component: Register,
        path: "/register"
    },
    {
        Component: Unauthorized,
        path: "/unauthorized"
    },



])