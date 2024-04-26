import React, { FC } from "react";

import * as Icons from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import * as Icon from "../menu-icons";

// Define a type for Lucide icons
type LucideIconType = {
  [key: string]: React.FC<any> | any;
};

interface IMenuItem {
  id: string | number;
  title: string;
  url: string;
  icon?: string;
  isActive?: boolean;
}

const MenuItem: FC<IMenuItem> = ({ id, title, url, icon, isActive }) => {
  // const CurentIcon =
  //   (icon && ((Icons as LucideIconType)[icon] as typeof Icons.Tent)) ||
  //   undefined;
  const CurentIcon = icon && ((Icon as any)[icon] as any);
  return (
    <li className="w-full">
      <Link
        href={url}
        className={cn(
          "flex flex-col items-center justify-center text-main-gray hover:text-main-green gap-[4px] w-[76px] h-full  cursor-pointer",
          isActive ? "text-main-green" : ""
        )}
      >
        <span className="icon flex justify-center items-center h-[28px] w-[28px]  shrink-0">
          {/* <Icon[icon] isActive={isActive} /> */}
          {CurentIcon && (
            <CurentIcon className="h-[24px] w-[24px] " isActive={isActive} />
          )}
        </span>
        <span className="title text-center text-xs font-normal break-words w-full     shrink-0 ">
          {title}
        </span>
      </Link>
    </li>
  );
};

export default MenuItem;
