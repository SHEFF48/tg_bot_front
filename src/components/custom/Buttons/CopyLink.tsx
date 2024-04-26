"use client";

import React, { FC, useState } from "react";
import { toast } from "sonner";
import CopyIcon from "@/components/custom/menu-icons/Copy";

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
  };

  return (
    <>
      {variant === "page" && (
        <div
          className="flex justify-between items-center gap-2 cursor-pointer h-[40px] w-full px-2 rounded-[10px] bg-white shadow-[0_1px_10px_0_rgba(32,_32,_32,_0.15)] "
          onClick={clickHandler}
        >
          <div className="text-[14px]">
            {!copyStatus ? link : "Посилання скопійовано"}
          </div>
          <CopyIcon />
        </div>
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
