import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isClient(window: Window) {
  return typeof window !== "undefined";
}

export function detectOs(window: Window) {
  "use client";
  if (!isClient(window)) {
    return "Unknown";
  }
  const userAgent = window.navigator.userAgent;

  if (userAgent.includes("Windows")) {
    return "Windows";
  } else if (userAgent.includes("Macintosh")) {
    return "Macintosh";
  } else if (userAgent.includes("Linux")) {
    return "Linux";
  } else if (userAgent.includes("Android")) {
    return "Android";
  } else if (userAgent.includes("iPhone")) {
    return "iPhone";
  } else if (userAgent.includes("iPad")) {
    return "iPad";
  } else {
    return "Unknown";
  }
}

export type DetectOS = ReturnType<typeof detectOs>;
