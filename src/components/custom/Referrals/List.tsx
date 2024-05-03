"use client";

import React, { FC } from "react";
import ReferralCard from "./Card";

// const referrals = [
//   {
//     id: "0",
//     nickName: "@Username",
//     avatar: "",
//     network: "Telegram",
//     condition: "За підписку",
//     price: "999999",
//   },
//   {
//     id: "1",
//     nickName: "@Username",
//     avatar: "",
//     network: "Telegram",
//     condition: "За підписку телеграм каналу",
//     price: "10",
//   },
//   {
//     id: "2",
//     nickName: "@Username",
//     avatar: "",
//     network: "Telegram",
//     condition: "За підписку телеграм каналу",
//     price: "10",
//   },
//   {
//     id: "3",
//     nickName: "@Username",
//     avatar: "",
//     network: "Telegram",
//     condition: "За підписку телеграм каналу",
//     price: "10",
//   },
//   {
//     id: "4",
//     nickName: "@Username",
//     avatar: "",
//     network: "Telegram",
//     condition: "За підписку телеграм каналу",
//     price: "10000",
//   },
//   {
//     id: "5",
//     nickName: "@Username",
//     avatar: "",
//     network: "Telegram",
//     condition: "За підписку телеграм каналу",
//     price: "10000",
//   },
//   {
//     id: "6",
//     nickName: "@Username",
//     avatar: "",
//     network: "Telegram",
//     condition: "За підписку телеграм каналу",
//     price: "10000",
//   },
//   {
//     id: "7",
//     nickName: "@Username",
//     avatar: "",
//     network: "Telegram",
//     condition: "За підписку телеграм каналу",
//     price: "10000",
//   },
//   {
//     id: "8",
//     nickName: "@Username",
//     avatar: "",
//     network: "Telegram",
//     condition: "За підписку телеграм каналу",
//     price: "10000",
//   },
//   {
//     id: "9",
//     nickName: "@Username",
//     avatar: "",
//     network: "Telegram",
//     condition: "За підписку телеграм каналу",
//     price: "10000",
//   },
// ];

interface IReferralsList {
  referrals: {
    telegram_username: string;
    telegram_link: string;
    transaction_type: string;
    description: string;
    amount: string;
  }[];
}

const ReferralsList: FC<IReferralsList> = ({ referrals }) => {
  return (
    <ul className="flex flex-col gap-2">
      {referrals.map((refferalItem, index) => {
        return (
          <li key={index} className="">
            <ReferralCard {...refferalItem} />
          </li>
        );
      })}
    </ul>
  );
};

export default ReferralsList;
