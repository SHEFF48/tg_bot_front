import { cn } from "@/lib/utils";
import React, { FC } from "react";
import Price from "../Sticks/Price";

interface ICondition {
  title: string;
  price: string;
  currency?: string;
  className?: string;
}

const ConditionCard: FC<ICondition> = ({
  title,
  price,
  currency,
  className,
}) => {
  return (
    <div
      className={cn(
        "card flex flex-col justify-center items-center gap-1 w-full p-2 rounded-lg shadow-md bg-white",
        className && className
      )}
    >
      <h3 className=" text-[12px]">{title}</h3>
      <Price price={price} />
    </div>
  );
};

export default ConditionCard;
