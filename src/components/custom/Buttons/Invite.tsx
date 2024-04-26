"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// import { toast } from "sonner";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const PopoverButton = () => {
  const [copyStatus, setCopyStatus] = useState(false);
  const clickHandler = () => {
    navigator.clipboard.writeText("link");
    // toast(` Link copied.`);
    setCopyStatus((prev) => !prev);
  };

  return (
    <Popover>
      <PopoverTrigger className="w-full" asChild>
        <Button
          className="shadow-md text-sm font-bold rounded-lg p-1 md:p-2 w-full h-10 bg-gradient-to-l from-yellow-400 to-green-500"
          // onClick={clickHandler}
        >
          Запросити друга
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        className=" rounded-[10px] w-[calc(100vw-2rem)]"
      >
        <div className="flex flex-col gap-2">
          <div className="close h-1 w-[40px] bg-main-gray opacity-25 mx-auto"></div>
          <h2 className="text-base font-bold">Запросити друга</h2>
          <ScrollArea className="w-full whitespace-nowrap ">
            <div className="flex gap-4">
              {[...Array(20)]?.map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 items-center justify-center"
                >
                  <div className="w-[32px] h-[32px] bg-slate-500 rounded-full"></div>
                  <h3 className="text-xs text-main-black">Social Network</h3>
                </div>
              ))}
              <div className="w-20 h-10 bg-slate-100"></div>
              <div className="w-20 h-10 bg-slate-200"></div>
              <div className="w-20 h-10 bg-slate-300"></div>
              <div className="w-20 h-10 bg-slate-400"></div>
              <div className="w-20 h-10 bg-slate-500"></div>
              <div className="w-20 h-10 bg-slate-100"></div>
              <div className="w-20 h-10 bg-slate-200"></div>
              <div className="w-20 h-10 bg-slate-300"></div>
              <div className="w-20 h-10 bg-slate-400"></div>
              <div className="w-20 h-10 bg-slate-500"></div>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <div
            className="flex justify-start items-center gap-2 cursor-pointer"
            onClick={clickHandler}
          >
            <div className="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9Z"
                  stroke="url(#paint0_linear_1_1918)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5"
                  stroke="url(#paint1_linear_1_1918)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_1918"
                    x1="21.885"
                    y1="14.6483"
                    x2="9"
                    y2="15.8862"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F4D03F" />
                    <stop offset="1" stop-color="#16A085" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1_1918"
                    x1="14.885"
                    y1="7.6483"
                    x2="2"
                    y2="8.88616"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F4D03F" />
                    <stop offset="1" stop-color="#16A085" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="text-sm">
              {!copyStatus ? "Скопіювати посилання" : "Посилання скопійовано"}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const InviteButton = () => {
  const clickHandler = () => {};
  return (
    // <Button
    //   className="shadow-md text-sm font-bold rounded-lg p-1 md:p-2 w-full h-10 bg-gradient-to-l from-yellow-400 to-green-500"
    //   onClick={clickHandler}
    // >
    //   Запросити друга
    // </Button>
    <PopoverButton />
  );
};

export default InviteButton;
