import { cn } from "@/lib/utils";
import React, { FC } from "react";
import Price from "../Sticks/Price";

import * as Icon from "../menu-icons";

interface ICondition {
  title?: string;
  price?: number | string;
  currency?: string;
  className?: string;
  border?: true | false;
  type?: "one" | "two";
  description?: string;
  icon?: "AddFriend" | "CheckList" | "Gift";
  number?: "One" | "Two" | "Three";
}

const Condition1: FC<ICondition> = ({
  title,
  price,
  currency,
  className,
  border,
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center w-full rounded-[10px]  p-[1.5px]",
        border && "bg-gradient-to-l from-[#F4D03F]  to-[#16A085]"
      )}
    >
      <div
        className={cn(
          "card flex flex-col justify-center items-center gap-1 w-full p-2 rounded-lg  shadow-custom bg-white",
          className && className
        )}
      >
        <h3 className=" text-xs">{title}</h3>
        <Price price={price || 0} />
      </div>
    </div>
  );
};

const Condition2: FC<ICondition> = ({
  className,
  border,
  description,
  icon,
  number,
}) => {
  const CurentIcon = icon && ((Icon as any)[icon] as any);
  const NumberIcon = number && ((Icon as any)[number] as any);
  return (
    <div
      className={cn(
        "flex items-center justify-center w-full rounded-[10px]  p-[1.5px]",
        border && "bg-gradient-to-l from-[#F4D03F]  to-[#16A085]"
      )}
    >
      <div
        className={cn(
          "card flex  justify-start items-start gap-2 w-full p-2 rounded-lg  shadow-custom bg-white relative",
          className && className
        )}
      >
        <div className="icon w-[32px] h-[32px] flex justify-center items-center shrink-0 bg-main-green rounded-full">
          <CurentIcon />
        </div>
        <div className="decription text-sm text-left text-main-black">
          {description}
        </div>
        <div className="number w-[25px] h-[30px] absolute right-2 bottom-2">
          <NumberIcon />
        </div>
      </div>
    </div>
  );
};

const ConditionCard: FC<ICondition> = ({
  title,
  price,
  currency,
  className,
  border,
  type = "one",
  description,
  icon,
  number,
}) => {
  return type === "one" ? (
    <Condition1
      title={title}
      price={price}
      className={className}
      border
      currency={currency}
    />
  ) : (
    <Condition2
      description={description}
      className={className}
      icon={icon}
      number={number}
      border
    />
  );
};

export default ConditionCard;
