import { getUserId } from "@/lib/utils";
import React, { ReactNode } from "react";

const ClientLayout = ({ children }: { children: ReactNode }) => {
  interface Window {
    tg?: {
      isExpanded: boolean;
      expand: () => void;
      // Add other properties/methods as needed
    };
  }

  if ((window as any).tg && !(window as any).tg.isExpanded) {
    (window as any).tg.expand();
  }

  const USER_ID = getUserId();
  const refferalLink = getRefferalLink("5928954497");
  return <>{children}</>;
};

export default ClientLayout;
