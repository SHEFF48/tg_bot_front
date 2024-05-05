"use client";

import { useUser } from "@/app/providers/UserContext";
// import { getUserId } from "@/lib/utils";
import React, { ReactNode, useEffect, useState } from "react";

const ClientLayout = ({ children }: { children: ReactNode }) => {
  const { userId } = useUser();

  const isClient = typeof window === "object";
  interface Window {
    tg?: {
      isExpanded: boolean;
      expand: () => void;
    };
  }

  useEffect(() => {
    if (!isClient && (window as any).tg && !(window as any).tg.isExpanded) {
      (window as any).tg.expand();
    }
  }, [isClient]);

  return (
    <>
      {/* <p>USER_ID: {userId}</p>
      {children} */}
    </>
  );
};

export default ClientLayout;
