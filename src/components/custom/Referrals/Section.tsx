"use client";

import React, { useEffect, useState } from "react";
import ReferralsList from "./List";
import { ScrollArea } from "@/components/ui/scroll-area";

import EmptyContent from "../content/Empty";
import { getRefferals } from "@/lib/api";
import { useUser } from "@/app/providers/UserContext";

const ReferralsSection = () => {
  const [referrals, setReferrals] = useState<any>();
  const [isEmpty, setIsEmpty] = useState(false);
  const { userId } = useUser();

  useEffect(() => {
    const getReferralsData = async () => {
      const res = await getRefferals(userId || "332877581");
      const referralsData = await res.json();
      console.log(" x: ", referralsData);

      setReferrals(referralsData);
    };

    getReferralsData();
  }, [userId]);

  useEffect(() => {
    setIsEmpty(referrals ? false : true);
  }, [referrals]);

  console.log("isEmpty", isEmpty);
  console.log("referrs", referrals);

  // return <></>;

  return !isEmpty ? (
    <section className="flex flex-col justify-start items-center gap-2 w-full h-full relative overflow-hidden">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-sm font-bold text-main-black">Реферали</h2>
        <div className="count text-xs  text-main-gray">
          {referrals?.transactions?.length || 0}
        </div>
      </div>
      <ScrollArea className="w-full h-full">
        {referrals && <ReferralsList referrals={referrals?.transactions} />}
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
