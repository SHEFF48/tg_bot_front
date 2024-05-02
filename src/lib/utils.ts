import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (number: number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export const getUserId = () => {
  let USER_ID = null;

  if ((window as any).Telegram && (window as any).Telegram.WebApp) {
    if (
      window.Telegram &&
      window.Telegram.WebApp &&
      window.Telegram.WebApp.initDataUnsafe &&
      window.Telegram.WebApp.initDataUnsafe.user
    ) {
      window.Telegram.WebApp.ready();
      USER_ID = window.Telegram.WebApp.initDataUnsafe.user.id;
    }
  }

  return USER_ID;
};
