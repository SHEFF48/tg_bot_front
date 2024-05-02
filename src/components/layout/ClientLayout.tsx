"use client";

import { useUser } from "@/app/providers/UserContext";
// import { getUserId } from "@/lib/utils";
import React, { ReactNode, useEffect, useState } from "react";

const ClientLayout = ({ children }: { children: ReactNode }) => {
  // const [userId, setUserId] = useState();
  const { userId } = useUser();
  // const getUserId = () => {
  //   let USER_ID = null;

  //   if ((window as any).Telegram && (window as any).Telegram.WebApp) {
  //     if (
  //       window.Telegram &&
  //       window.Telegram.WebApp &&
  //       window.Telegram.WebApp.initDataUnsafe &&
  //       window.Telegram.WebApp.initDataUnsafe.user
  //     ) {
  //       window.Telegram.WebApp.ready();
  //       USER_ID = window.Telegram.WebApp.initDataUnsafe.user.id;
  //     }
  //   }

  //   return USER_ID;
  // };

  const isClient = typeof window === "object";
  interface Window {
    tg?: {
      isExpanded: boolean;
      expand: () => void;
      // Add other properties/methods as needed
    };
  }

  useEffect(() => {
    if (!isClient && (window as any).tg && !(window as any).tg.isExpanded) {
      (window as any).tg.expand();
    }
  }, [isClient]);

  // useEffect(() => {
  //   if (!isClient && (window as any).tg && (window as any).tg.isExpanded) {
  //     setUserId(getUserId());
  //   }
  // }, []);

  //const refferalLink = getRefferalLink("5928954497");
  return (
    <>
      <p>USER_ID: {userId}</p>
      {children}
    </>
  );
};

export default ClientLayout;
