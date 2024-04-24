import WithdrawButton from "@/components/custom/Buttons/Withdraw";
import HistorySection from "@/components/custom/History/Section";

export default function HistoryPage() {
  return (
    <main className="relative flex w-full h-full flex-col items-center justify-between pt-[26px] px-4 overflow-hidden ">
      <div className="flex flex-col gap-4 justify-start w-full">
        <div className="flex flex-col items-center justify-start gap-3 w-full z-50">
          <div className="relative text-center w-full ">
            <h1 className=" text-[16px] font-bold relative  z-10">Історія</h1>
          </div>
        </div>
        <HistorySection />
      </div>
      <div className="flex items-center justify-center w-full h-[72px] shrink-0 bg-white overflow-hidden ">
        <WithdrawButton />
      </div>
    </main>
  );
}
