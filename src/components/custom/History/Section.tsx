import React from "react";
import { HistoryTable } from "./Table";
import Image from "next/image";
import EmptyContent from "../content/Empty";

const HistorySection = () => {
  const isEmpty = false;
  return (
    <section className="flex flex-col justify-start items-center gap-4 w-full h-full relative">
      {!isEmpty ? (
        <>
          <HistoryTable />
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
