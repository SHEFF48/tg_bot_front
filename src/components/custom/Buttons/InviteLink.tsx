"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import { useUser } from "@/app/providers/UserContext";
import { getRefferalLink } from "@/lib/api";
import { Button } from "@/components/ui/button";

const InviteLinkButton = () => {
  const [referralLink, setReferralLink] = useState<any>(null);
  const { userId } = useUser();

  useEffect(() => {
    const getRefLink = async () => {
      const res = await getRefferalLink(userId);
      const refLink = await res.json();
      console.log("refLink: ", refLink);
      setReferralLink(refLink.link);
    };

    getRefLink();
  }, [userId]);
  return (
    <Button
      asChild
      className="shadow-md text-sm font-bold rounded-lg p-1 md:p-2 w-full h-10 bg-gradient-to-l from-yellow-400 to-green-500"
    >
      <Link href={`https://t.me/share/url?text=Hello&url={${referralLink}}`}>
        Запросити друга {userId ? userId : "null"}
      </Link>
    </Button>
  );
};

export default InviteLinkButton;
