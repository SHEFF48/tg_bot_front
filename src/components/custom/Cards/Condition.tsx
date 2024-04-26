import { cn } from "@/lib/utils";
import React, { FC } from "react";
import Price from "../Sticks/Price";

interface ICondition {
  title: string;
  price: string;
  currency?: string;
  className?: string;
  border?: true | false;
}

const ConditionCard: FC<ICondition> = ({
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
        <Price price={price} />
      </div>
    </div>
    // <div
    //   className={cn(
    //     "card flex flex-col justify-center items-center gap-1 w-full p-2 rounded-lg shadow-md bg-white",
    //     className && className
    //   )}
    // >
    //   <h3 className=" text-xs">{title}</h3>
    //   <Price price={price} />
    // </div>
  );
};

export default ConditionCard;
