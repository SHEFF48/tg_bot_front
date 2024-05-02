"use client";

import { getUserId } from "@/lib/utils";
import React, { ReactNode, useEffect } from "react";

const ClientLayout = ({ children }: { children: ReactNode }) => {
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

  const USER_ID = getUserId();
  const refferalLink = getRefferalLink("5928954497");
  return (
    <>
      <p>Ref link: {refferalLink}</p>
      {children}
    </>
  );
};

export default ClientLayout;
