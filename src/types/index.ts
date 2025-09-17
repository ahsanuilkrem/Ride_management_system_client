import type { ComponentType } from "react";
import { z } from "zod";


export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}

export type TRole = "ADMIN" | "RIDER" | "DRIVER";


export const locationSchema = z.object({
  lat: z.number({ error: "Latitude must be a number" }),
  lng: z.number({ error: "Longitude must be a number" }),

});

export const paymentMethods = [
  { label: "Cash", value: "cash" },
  { label: "Card", value: "card" },
  { label: "Wallet", value: "wallet" },
];