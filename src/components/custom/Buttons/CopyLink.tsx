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
import { getRefferalLink } from "@/lib/api";

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

  useEffect(() => {
    // setReferralLink(getRefferalLink("5928954497"));
    // setReferralLink(getRefferalLink("332877581"));
  }, []);

  useEffect(() => {
    const getRefLink = async () => {
      try {
        const res = await fetch(
          "https://8c20-79-132-3-223.ngrok-free.app/get_refferal_link/?user_id=332877581"
        );
        console.log(" getRefLink userId res: ", res);
        const data = await res.json();
        console.log(" getRefLink userId res data ", res);
        setReferralLink(data);
        // return Response.json(data);
      } catch (error) {
        console.log("Error Fetching data getRefLink", error, "URL: ", `${URL}`);
      }
    };

    console.log(" getRefLink userId res: ", URL);
    getRefLink();
  }, []);

  const { userId } = useUser();
  // const refferalLink = getRefferalLink("5928954497");

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
                <div className="text-sm">{referralLink}</div>
                <pre>{JSON.stringify(referralLink)}</pre>
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
