import InviteButton from "@/components/custom/Buttons/Invite";

import RulesSection from "@/components/custom/Rules/Section";

export default function RulesPage() {
  return (
    <main className="relative flex w-full h-full flex-col items-center justify-between pt-[26px] px-4 overflow-hidden ">
      <div className="flex flex-col gap-4 justify-start h-[calc(100%-125px)] w-full">
        <div className="flex flex-col items-center justify-start gap-3 w-full z-50">
          <div className="relative text-center w-full ">
            <h1 className=" text-[16px] font-bold relative  z-10">
              {`Умови використання`}
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-between  w-full h-full relative">
          <RulesSection />
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-[72px] shrink-0 bg-white overflow-hidden ">
        <InviteButton />
      </div>
    </main>
  );
}
