import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface IPrice {
  price: string | number;
  currency?: string;
  type?: "default" | "plus";
  className?: string;
}

const Price: FC<IPrice> = ({
  price,
  currency,
  type = "default",
  className,
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center text-sm gap-1 font-bold text-white bg-main-green rounded-[10px] px-2 h-[28px]",
        className
      )}
    >
      <span>
        {type === "plus" && "+"}
        {price}
      </span>
      <span>{currency ? currency : "грн"}</span>
    </div>
  );
};

export default Price;
