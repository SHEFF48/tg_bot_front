"use client";

import React, { useEffect, useState } from "react";
import { HistoryTable } from "./Table";
import Image from "next/image";
import EmptyContent from "../content/Empty";
import { useUser } from "@/app/providers/UserContext";
import { getTransactionHistory } from "@/lib/api";

const HistorySection = () => {
  const [history, setHistory] = useState<any>();
  const [isEmpty, setIsEmpty] = useState(false);
  const { userId } = useUser();

  useEffect(() => {
    const getHistoryData = async () => {
      const res = await getTransactionHistory(userId);
      const referralsData = await res.json();

      setHistory(referralsData);
    };

    getHistoryData();
  }, [userId]);

  useEffect(() => {
    setIsEmpty(history ? false : true);
  }, [history]);

  return (
    <section className="flex flex-col justify-start items-center gap-4 w-full h-full relative">
      {!isEmpty ? (
        <>
          <HistoryTable {...history} />
          <div className="image">
            <Image src={"/referrals.svg"} width={128} height={128} alt="home" />
          </div>
        </>
      ) : (
        <EmptyContent
          title="Ваша історія"
          description="Тут ви знайдете список всіх ваших минулих дій та подій"
          image="/history.svg"
        />
      )}
    </section>
  );
};

export default HistorySection;
