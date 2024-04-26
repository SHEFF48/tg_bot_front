import CopyLink from "@/components/custom/Buttons/CopyLink";
import InviteButton from "@/components/custom/Buttons/Invite";
import ConditionCard from "@/components/custom/Cards/Condition";
import SkeletonCustom from "@/components/custom/content/Skeleton";

import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="relative flex h-full w-full flex-col items-center justify-between  overflow-y-auto ">
      <div className="flex flex-col w-full">
        <div className="bg bg-gradient-to-l from-[#F4D03F]  to-[#16A085]  mx-auto w-full pt-[24px] rounded-b-[10px]">
          <div className="relative text-center text-white p-1 bg-gradient-to-l from-[#F4D03F] w-full to-[#16A085] rounded-b-[10px]">
            <p className="text-sm">Запросіть друзів, та отримуйте </p>
            <h1 className=" text-lg font-black relative uppercase z-10">
              <span className="">ДОДАТКОВІ БОНУСИ</span>
            </h1>
          </div>
        </div>
        <div className="top flex flex-col items-center justify-start gap-5 h-full w-full p-4 ">
          <div className="link flex flex-col items-center justify-center gap-2 w-full">
            <p className="text-xs text-center">
              Запросіть друга за вашим посиланням
            </p>
            <CopyLink link="http:referal.link" visibility />
          </div>
          <div className="image -mt-2">
            <Suspense fallback={<SkeletonCustom variant="image" />}>
              <Image src={"/home.svg"} width={128} height={128} alt="home" />
            </Suspense>
          </div>
          <div className="conditions flex gap-[10px] w-full">
            <div className="left flex flex-col items-center gap-[10px] text-center w-1/2">
              <h2 className="text-main-black text-sm font-bold">
                Ви отримаєте
              </h2>
              <ConditionCard title="За підписку кожного друга" price="10" />
              <ConditionCard
                title="За підписку кожного друга"
                price="10"
                border
              />
            </div>

            <div className="right flex flex-col items-center gap-[10px] text-center w-1/2">
              <h2 className="text-main-black text-sm font-bold">
                Друг отримає
              </h2>
              <ConditionCard title="За підписку кожного друга" price="10" />
              <ConditionCard
                title="За підписку кожного друга"
                price="10"
                border
              />
            </div>
          </div>
          <div className="font-normal text-sm leading-relaxed text-center text-gray-700 opacity-50">
            Запросити можна необмежену кількість друзів, всі вони будуть
            відображатися в розділі Реферали
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-[72px] shrink-0 bg-white overflow-hidden px-4 ">
        <InviteButton />
      </div>
    </main>
  );
}
