import InviteButton from "@/components/custom/Buttons/Invite";
import ConditionCard from "@/components/custom/Cards/Condition";

import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex h-full w-full flex-col items-center justify-between p-4 overflow-y-auto ">
      <div className="top flex flex-col items-center justify-start gap-3 w-full">
        <div className="relative text-center">
          <p className="text-sm">Запросіть друзів, та отримуйте </p>
          <h1 className=" text-lg font-black relative uppercase z-10">
            <span className="bg-gradient-to-l from-[#F4D03F]  to-[#16A085] text-transparent bg-clip-text">
              ДОДАТКОВІ БОНУСИ
            </span>
          </h1>
          <p className="text-xs">Запросіть друга за вашим посиланням</p>
        </div>
        <div className="image">
          <Image src={"/home.svg"} width={128} height={128} alt="home" />
        </div>
        <div className="conditions flex gap-[10px] w-full">
          <div className="left flex flex-col items-center gap-[10px] text-center w-1/2">
            <h2 className="text-main-black text-sm font-bold">Ви отримаєте</h2>
            <ConditionCard title="За підписку кожного друга" price="10" />
            <ConditionCard title="За підписку кожного друга" price="10" />
          </div>
          <div className="right flex flex-col items-center gap-[10px] text-center w-1/2">
            <h2 className="text-main-black text-sm font-bold">Друг отримає</h2>
            <ConditionCard title="За підписку кожного друга" price="10" />
            <ConditionCard title="За підписку кожного друга" price="10" />
          </div>
        </div>
        <div className="font-normal text-sm leading-relaxed text-center text-gray-700 opacity-50">
          Запросити можна необмежену кількість друзів, всі вони будуть
          відображатися в розділі Реферали
        </div>
      </div>
      <section className="bottom-0 right-0 left-0 w-full absolute bg-white p-4 overflow-hidden ">
        <InviteButton />
      </section>
    </main>
  );
}
