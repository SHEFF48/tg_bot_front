import React, { FC, Suspense } from "react";
import Price from "../Sticks/Price";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight } from "lucide-react";
import SkeletonCustom from "../content/Skeleton";

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
    <Suspense fallback={<SkeletonCustom variant="referral" />}>
      <div
        className={cn(
          "card flex justify-between items-center gap-2 w-full h-auto p-2 rounded-lg shadow-custom bg-white",
          props?.className && props?.className
        )}
      >
        <div className="user flex justify-start flex-shrink items-start gap-2 ">
          <Avatar className="w-[32px] h-[32px] shrink-0">
            <AvatarImage src={props.avatar} />
            <AvatarFallback className="bg-main-green text-white">
              {props.nickName[1]}
              {props.network[0]}
            </AvatarFallback>
          </Avatar>
          <div className="body flex flex-col justify-start items-start h-full gap-[1px] shrink">
            <h3 className="  min-w-[100px]  line-clamp-1  text-sm text-main-black">{`${props.nickName} ${props.network}`}</h3>
            <p className="text-xs text-main-gray">{props.condition}</p>
          </div>
        </div>

        <div className="flex justify-end items-center gap-2">
          <Price price={props.price} type="plus" className="srink-0" />
          <ChevronRight size={16} />
        </div>
      </div>
    </Suspense>

    // <div
    //   className={cn(
    //     "card flex justify-between items-center gap-2 w-full h-auto p-2 rounded-lg shadow-custom bg-white",
    //     props?.className && props?.className
    //   )}
    // >
    //   <div className="user flex justify-start flex-shrink items-start gap-2 ">
    //     <Avatar className="w-[32px] h-[32px] shrink-0">
    //       <AvatarImage src={props.avatar} />
    //       <AvatarFallback className="bg-main-green text-white">
    //         {props.nickName[1]}
    //         {props.network[0]}
    //       </AvatarFallback>
    //     </Avatar>
    //     <div className="body flex flex-col justify-start items-start h-full gap-[1px] shrink">
    //       <h3 className="  min-w-[100px]  line-clamp-1  text-sm text-main-black">{`${props.nickName} ${props.network}`}</h3>
    //       <p className="text-xs text-main-gray">{props.condition}</p>
    //     </div>
    //   </div>

    //   <div className="flex justify-end items-center gap-2">
    //     <Price price={props.price} type="plus" className="srink-0" />
    //     <ChevronRight size={16} />
    //   </div>
    // </div>
  );
};

export default ReferralCard;
