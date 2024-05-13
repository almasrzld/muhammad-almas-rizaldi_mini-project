import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Cookies from "js-cookie";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatIDR = (price: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
};

export const getCookie = () => Cookies.get("access_token");
export const setCookie = (value: string) => Cookies.set("access_token", value);
export const removeCookie = () => Cookies.remove("access_token");
