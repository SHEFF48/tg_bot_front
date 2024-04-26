import Image from "next/image";
import React from "react";
import ReferralsList from "./List";
import { ScrollArea } from "@/components/ui/scroll-area";
import InviteButton from "../Buttons/Invite";
import EmptyContent from "../content/Empty";

const ReferralsSection = () => {
  const isEmpty = true;
  return !isEmpty ? (
    <section className="flex flex-col justify-start items-center gap-2 w-full h-full relative overflow-hidden">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-[14px] font-bold text-[#333333]">Реферали</h2>
        <div className="count text-[12px]  text-[#A2A2A2]">45</div>
      </div>
      <ScrollArea className="w-full h-full">
        <ReferralsList />
      </ScrollArea>
    </section>
  ) : (
    <EmptyContent
      image="/referrals.svg"
      title="Ваші реферали"
      description="Наразі список порожній, але ви можете запрошувати друзів та знайомих за реферальним посиланням, щоб отримувати винагороди"
    />
  );
};

export default ReferralsSection;
