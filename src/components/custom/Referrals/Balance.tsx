"use client";

import React, { useEffect, useState } from "react";

import { useUser } from "@/app/providers/UserContext";
import { getTransactionHistory } from "@/lib/api";
import Price from "../Sticks/Price";

const Balance = () => {
  const [history, setHistory] = useState<any>();

  const { userId } = useUser();

  useEffect(() => {
    const getHistoryData = async () => {
      const res = await getTransactionHistory(userId);
      const referralsData = await res.json();

      setHistory(referralsData);
    };

    getHistoryData();
  }, [userId]);

  // return <></>;
  return (
    <div className="flex items-center justify-center w-full rounded-[10px] bg-gradient-to-l from-[#F4D03F]  to-[#16A085] p-[1.5px]">
      <div className="balance flex justify-between items-center  h-[44px] w-full bg-white px-[8px]  rounded-[8px] back ">
        <span>Баланс</span>
        <Price price={history?.credit_balance || 0} />
      </div>
    </div>
  );
};

export default Balance;
