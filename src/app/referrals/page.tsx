import InviteButton from "@/components/custom/Buttons/Invite";
import InviteLinkButton from "@/components/custom/Buttons/InviteLink";

import Balance from "@/components/custom/Referrals/Balance";
import ReferralsSection from "@/components/custom/Referrals/Section";

export default function ReferralsPage() {
  return (
    <main className="relative flex w-full h-full flex-col items-center justify-between pt-[26px] px-4 overflow-hidden ">
      <div className="flex flex-col gap-4 justify-start h-[calc(100%-172px)] w-full">
        <div className="flex flex-col items-center justify-start gap-3 w-full z-50">
          <div className="relative text-center w-full ">
            <h1 className=" text-base font-bold relative  z-10">
              Список друзів
            </h1>
          </div>

          <Balance />
        </div>
        <div className="flex flex-col justify-between  w-full h-full relative">
          <ReferralsSection />
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-[72px] shrink-0 bg-white overflow-hidden ">
        <InviteLinkButton />
      </div>
    </main>
  );
}
