"use client";

import React, { FC, useEffect, useState } from "react";
import { toast } from "sonner";
import CopyIcon from "@/components/custom/menu-icons/Copy";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useUser } from "@/app/providers/UserContext";
import { getReferralLink } from "@/lib/utils";
// import { getRefferalLink } from "@/lib/api";

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
  const [referralLink, setReferralLink] = useState<any>(null);
  const { userId } = useUser();

  // const userId = "5928954497";

  const getRefLink = async () => {
    if (userId) {
      try {
        const res = await fetch(
          `https://gemshoes.fun/get_promocode/?user_id=${userId}`,
          {
            method: "GET",
          }
        );
        const data = await res.json();
        setReferralLink(data.promocode);
        console.log("LINK Fetching data 0643-79-132-27-234 ", data);
        // return Response.json(data);
      } catch (error) {
        console.log("Error Fetching data 0643-79-132-27-234", error);
      }
    }
  };

  getRefLink();

  useEffect(() => {
    // const getRefLink = async () => {
    //   const res = await getReferralLink(userId);
    //   const refLink = await res.json();
    //   console.log("refLink: ", refLink);
    //   setReferralLink(refLink.link);
    // };
    // getRefLink();
    // setReferralLink(getReferralLink(userId));
  }, []);

  const [copyStatus, setCopyStatus] = useState(false);
  const clickHandler = () => {
    navigator.clipboard.writeText(referralLink);
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
                <div className="text-sm">{referralLink}</div>
                {/* <pre>{JSON.stringify(referralLink)}</pre> */}
                <CopyIcon />
              </div>
            </TooltipTrigger>
            <TooltipContent hideWhenDetached={true} side="bottom" align="end">
              <p>Посилання cкопійовано</p>
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
          <div className="text-sm">
            {!copyStatus ? "Скопіювати посилання" : "Посилання скопійовано"}
          </div>
        </div>
      )}
    </>
  );
};

export default CopyLink;
