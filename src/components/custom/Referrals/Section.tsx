import Image from "next/image";
import React from "react";
import ReferralsList from "./List";
import { ScrollArea } from "@/components/ui/scroll-area";
import InviteButton from "../Buttons/Invite";

const ReferralsSection = () => {
  return (
    <section className="flex flex-col justify-start items-center gap-2 w-full h-full relative overflow-hidden">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-[14px] font-bold text-[#333333]">Реферали</h2>
        <div className="count text-[12px]  text-[#A2A2A2]">45</div>
      </div>
      <ScrollArea className="w-full h-full">
        <ReferralsList />
      </ScrollArea>
    </section>
  );
};

export default ReferralsSection;
