import React, { FC } from "react";
import Price from "../Sticks/Price";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight } from "lucide-react";

interface IRefferalItem {
  id: string;
  nickName: string;
  avatar: string;
  network: string;
  condition: string;
  price: string;
  className?: string;
}

const ReferralCard: FC<IRefferalItem> = (props) => {
  return (
    <div
      className={cn(
        "card flex justify-between items-center gap-2 w-full h-auto p-2 rounded-lg shadow-[0_1px_10px_0_rgba(32,32,32,0.15)] bg-white",
        props?.className && props?.className
      )}
    >
      <div className="user flex justify-start flex-shrink items-start gap-2 ">
        <Avatar className="w-[32px] h-[32px] shrink-0">
          <AvatarImage src={props.avatar} />
          <AvatarFallback className="bg-[#05BB43] text-white">
            {props.nickName[1]}
            {props.network[0]}
          </AvatarFallback>
        </Avatar>
        <div className="body flex flex-col justify-start items-start h-full gap-[1px] shrink">
          <h3 className="  min-w-[100px]  line-clamp-1  text-[14px] text-[#333333]">{`${props.nickName} ${props.network}`}</h3>
          <p className="text-[12px] text-[#A2A2A2]">{props.condition}</p>
        </div>
      </div>

      <div className="flex justify-end items-center gap-2">
        <Price price={props.price} type="plus" className="srink-0" />
        <ChevronRight size={16} />
      </div>
    </div>
  );
};

export default ReferralCard;
