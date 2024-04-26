"use client";

import React, { FC, useState } from "react";
import { toast } from "sonner";
import CopyIcon from "@/components/custom/menu-icons/Copy";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ICopyLink {
  link?: string;
  visibility?: boolean;
  variant?: "page" | "tooltip";
}

const CopyLink: FC<ICopyLink> = ({
  link = "",
  visibility = true,
  variant = "page",
}) => {
  const [copyStatus, setCopyStatus] = useState(false);
  const clickHandler = () => {
    navigator.clipboard.writeText(link);
    toast(` Link copied.`);
    setCopyStatus((prev) => !prev);

    setTimeout(() => {
      setCopyStatus(false);
    }, 2000);
  };

  return (
    <>
      {variant === "page" && (
        <TooltipProvider disableHoverableContent>
          <Tooltip open={copyStatus}>
            <TooltipTrigger asChild>
              <div
                className="flex justify-between items-center gap-2 cursor-pointer h-[40px] w-full px-2 rounded-[10px] bg-white shadow-[0_1px_10px_0_rgba(32,_32,_32,_0.15)] "
                onClick={clickHandler}
              >
                <div className="text-[14px]">{link}</div>
                <CopyIcon />
              </div>
            </TooltipTrigger>
            <TooltipContent hideWhenDetached={true} side="bottom" align="end">
              <p>Посилання скопійовано</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
      {variant === "tooltip" && (
        <div
          className="flex justify-start items-center gap-2 cursor-pointer rounded-[10px]"
          onClick={clickHandler}
        >
          <CopyIcon />
          <div className="text-[14px]">
            {!copyStatus ? "Скопіювати посилання" : "Посилання скопійовано"}
          </div>
        </div>
      )}
    </>
  );
};

export default CopyLink;
