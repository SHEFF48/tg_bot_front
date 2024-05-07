"use client";
import { FC } from "react";
import Price from "../Sticks/Price";

interface IHistory {
  purchase_stats: {
    total_count: number | string;
    total_sum: number | string;
  };
  subscription_stats: {
    total_count: number | string;
    total_sum: number | string;
  };
  combined_stats: {
    total_count: number | string;
    total_sum: number | string;
  };
  total_spent: number | string;
  credit_balance: number | string;
}

export const HistoryTable: FC<IHistory> = (props) => {
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
          <div className="w-[46px] text-center">
            {props?.subscription_stats?.total_count || 0}
          </div>
          <div className="div">
            <Price price={props?.subscription_stats?.total_sum || 0} />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-xs text-main-black h-[44px] w-full px-2 rounded-[10px] shadow-custom">
        <div className="text-sm font-bold">Купили товар</div>
        <div className="flex justify-end items-center gap-[16px]">
          <div className="w-[46px] text-center">
            {props?.purchase_stats?.total_count || 0}
          </div>
          <div className="div">
            <Price price={props?.purchase_stats?.total_sum || 0} />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-xs text-main-black h-[30px] w-full px-2 rounded-[10px]">
        <div className="div">Всього</div>
        <div className="flex justify-end items-center gap-[16px]">
          <div className="w-[46px] text-center">
            {props?.combined_stats?.total_count || 0}
          </div>
          <div className="div">
            <Price
              price={props?.combined_stats?.total_sum || 0}
              className="bg-transparent text-main-black"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-xs text-main-black h-[30px] w-full px-2 rounded-[10px]">
        <div className="div">Використано</div>
        <div className="flex justify-end items-center gap-[16px]">
          <Price
            price={props?.total_spent || 0}
            className="bg-transparent text-main-black"
          />
        </div>
      </div>

      <div className="flex justify-between items-center text-xs text-main-black h-[30px] w-full px-2 rounded-[10px]">
        <div className="div">Залишок</div>
        <div className="flex justify-end items-center gap-[16px]">
          <Price
            price={props?.credit_balance || 0}
            className="bg-transparent text-main-black"
          />
        </div>
      </div>
    </div>
  );
};
