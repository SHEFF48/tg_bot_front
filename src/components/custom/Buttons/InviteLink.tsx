"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import { useUser } from "@/app/providers/UserContext";
// import { getRefferalLink } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { getReferralLink } from "@/lib/utils";

const InviteLinkButton = () => {
  const [referralLink, setReferralLink] = useState<any>(null);
  const { userId } = useUser();

  useEffect(() => {
    setReferralLink(getReferralLink(userId));

    const getRefLink = async () => {
      if (userId) {
        // const res = await getReferralLink(userId);
        // const refLink = await res.json();
        // setReferralLink(refLink.link);
        // setReferralLink(JSON.stringify(refLink));
        // try {
        //   const res = await fetch(
        //     `https://gemshoes.fun/get_refferal_link/?user_id=332877581`,
        //     {
        //       cache: "no-cache",
        //     }
        //   );
        //   const data = await res.json();
        //   setReferralLink(JSON.stringify(data));
        //   console.log("LINK Fetching data ", data);
        //   // return Response.json(data);
        // } catch (error) {
        //   console.log("Error Fetching data ", error);
        // }
      }
    };

    // getRefLink();
  }, [userId]);
  return (
    <Button
      asChild
      className="shadow-md text-sm font-bold rounded-lg p-1 md:p-2 w-full h-10 bg-gradient-to-l from-yellow-400 to-green-500"
    >
      <Link href={`https://t.me/share/url?text=Hello&url=${referralLink}`}>
        Запросити друга
      </Link>
    </Button>
  );
};

export default InviteLinkButton;
