import CopyLink from "@/components/custom/Buttons/CopyLink";
import InviteButton from "@/components/custom/Buttons/Invite";
import InviteLinkButton from "@/components/custom/Buttons/InviteLink";
import ConditionCard from "@/components/custom/Cards/Condition";
import SkeletonCustom from "@/components/custom/content/Skeleton";
import ClientLayout from "@/components/layout/ClientLayout";

import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="relative flex h-full w-full flex-col items-center justify-between  overflow-y-auto ">
      <div className="flex flex-col w-full">
        <div className="top flex flex-col items-center justify-start gap-4 h-full w-full p-4 pb-0 ">
          <div className="relative text-center">
            <p className="text-sm">Запросіть друзів, та отримуйте </p>
            <h1 className=" text-lg font-black relative uppercase z-10">
              <span className="bg-gradient-to-l from-[#F4D03F]  to-[#16A085] text-transparent bg-clip-text">
                ДОДАТКОВІ БОНУСИ
              </span>
            </h1>
          </div>
          <div className="image -mt-2">
            <Suspense fallback={<SkeletonCustom variant="image" />}>
              <Image src={"/home.svg"} width={128} height={128} alt="home" />
            </Suspense>
          </div>
          <div className="conditions flex  -mt-2 w-full">
            <div className="left flex flex-col items-center gap-[10px] text-center w-full">
              <h2 className="text-main-black text-sm font-bold">
                Як це працює?
              </h2>

              <div className="flex flex-col gap-[14px]">
                <ConditionCard
                  type="two"
                  icon="AddFriend"
                  description="Запросіть друга за посиланням. Він отримає знижку 200 гривень на першу покупку."
                  border
                  number="One"
                />
                <ConditionCard
                  type="two"
                  icon="CheckList"
                  description="За кожного друга, що здійснить покупку, ви отримаєте 200 гривень на бонусний рахунок."
                  border
                  number="Two"
                />
                <ConditionCard
                  type="two"
                  icon="Gift"
                  description="Отримайте 10 гривень за кожного друга, який підпишеться на наш телеграм-канал."
                  border
                  number="Three"
                />
              </div>
              <div className="font-normal text-xs leading-relaxed text-center text-gray-700 opacity-50">
                Запросити можна необмежену кількість друзів, всі вони будуть
                відображатися в розділі Реферали
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-[72px] shrink-0 bg-white overflow-hidden px-4 ">
        <InviteLinkButton />
      </div>
    </main>
  );
}
