"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import { useUser } from "@/app/providers/UserContext";
import { getRefferalLink } from "@/lib/api";
import { Button } from "@/components/ui/button";

const InviteLinkButton = () => {
  const [referralLink, setReferralLink] = useState<any>(null);
  // const { userId } = useUser();

  const userId = "332877581";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://gemshoes.fun/get_refferal_link/?user_id=332877581`,
          {
            method: "GET",
            headers: {
              "ngrok-skip-browser-warning": "1",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setReferralLink(JSON.stringify(data));
        console.log("data CUSTOM FETCH:", response, data);
        // return data;
      } catch (error) {
        console.log("error CUSTOM FETCH:", error);
      }
    };

    const getRefLink = async () => {
      if (userId) {
        const res = await getRefferalLink(userId);
        const refLink = await res.json();
        console.log("refLink: ", refLink);
        setReferralLink(refLink.link);
        setReferralLink(JSON.stringify(refLink));

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

    fetchData();
    // getRefLink();
  }, [userId]);
  return (
    <Button
      asChild
      className="shadow-md text-sm font-bold rounded-lg p-1 md:p-2 w-full h-10 bg-gradient-to-l from-yellow-400 to-green-500"
    >
      <Link href={`https://t.me/share/url?text=Hello&url={${referralLink}}`}>
        Запросити друга {userId ? userId : "null"}
        <br />
        Ref: {referralLink}
      </Link>
    </Button>
  );
};

export default InviteLinkButton;
