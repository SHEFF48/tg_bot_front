import { Skeleton } from "@/components/ui/skeleton";
import React, { FC } from "react";

interface ISkeleton {
  variant: "image" | "referral";
}

const SceletonImage = () => (
  <Skeleton className="w-[128px] h-[128px] bg-main-gray/50 rounded-full" />
);

const SceletonReferralCard = () => (
  <div
    className={
      "card flex justify-between items-center gap-2 w-full h-auto p-2 rounded-lg shadow-custom bg-white"
    }
  >
    <div className="user flex justify-start flex-shrink items-start gap-2 ">
      <Skeleton className="w-[32px] h-[32px] shrink-0 rounded-full bg-main-gray/50" />
      <div className="body flex flex-col justify-start items-start h-full gap-[1px] shrink">
        <Skeleton className="  min-w-[200px] h-5  line-clamp-1  text-sm bg-main-gray/50" />
        <Skeleton className="text-xs w-[150px] h-4 bg-main-gray/50" />
      </div>
    </div>

    <div className="flex justify-end items-center gap-2">
      <Skeleton className="srink-0 w-[100px] h-6 bg-main-gray/50" />
    </div>
  </div>
);

const SkeletonCustom: FC<ISkeleton> = ({ variant }) => {
  switch (variant) {
    case "image":
      return <SceletonImage />;
    case "referral":
      return <SceletonReferralCard />;

    default:
      return <></>;
  }
};

export default SkeletonCustom;
