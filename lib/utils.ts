import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function addCommas(amount: number): string {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
