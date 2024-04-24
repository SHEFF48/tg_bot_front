import React from "react";
import { HistoryTable } from "./Table";
import Image from "next/image";

const HistorySection = () => {
  return (
    <section className="flex flex-col justify-start items-center gap-4 w-full h-full relative">
      <HistoryTable />
      <div className="image">
        <Image src={"/referrals.svg"} width={128} height={128} alt="home" />
      </div>
    </section>
  );
};

export default HistorySection;
