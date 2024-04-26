import Price from "../Sticks/Price";

export function HistoryTable() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-between items-center text-xs text-main-gray h-[30px] w-full px-2 rounded-[10px] shadow-custom">
        <div className="div">Послуга</div>
        <div className="flex justify-end  items-center gap-[16px]">
          <div className="w-[46px] text-center">Друзів</div>
          <div className="div">Нараховано</div>
        </div>
      </div>
      <div className="flex justify-between items-center text-xs text-main-black h-[44px] w-full px-2 rounded-[10px] shadow-custom">
        <div className="text-sm font-bold">Підписались</div>
        <div className="flex justify-end items-center gap-[16px]">
          <div className="w-[46px] text-center">2</div>
          <div className="div">
            <Price price={110} />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-xs text-main-black h-[44px] w-full px-2 rounded-[10px] shadow-custom">
        <div className="text-sm font-bold">Купили товар</div>
        <div className="flex justify-end items-center gap-[16px]">
          <div className="w-[46px] text-center">12</div>
          <div className="div">
            <Price price={200} />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-xs text-main-black h-[30px] w-full px-2 rounded-[10px]">
        <div className="div">Всього</div>
        <div className="flex justify-end items-center gap-[16px]">
          <div className="w-[46px] text-center">14</div>
          <div className="div">
            <Price price={310} className="bg-transparent text-main-black" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-xs text-main-black h-[30px] w-full px-2 rounded-[10px]">
        <div className="div">Використано</div>
        <div className="flex justify-end items-center gap-[16px]">
          <Price price={0} className="bg-transparent text-main-black" />
        </div>
      </div>

      <div className="flex justify-between items-center text-xs text-main-black h-[30px] w-full px-2 rounded-[10px]">
        <div className="div">Залишок</div>
        <div className="flex justify-end items-center gap-[16px]">
          <Price price={310} className="bg-transparent text-main-black" />
        </div>
      </div>
    </div>
  );
}
