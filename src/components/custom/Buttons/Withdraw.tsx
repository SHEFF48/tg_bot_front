"use client";

import { Button } from "@/components/ui/button";
import React from "react";

const WithdrawButton = () => {
  const clickHandler = () => {};
  return (
    <Button
      className="shadow-md text-sm font-bold rounded-lg p-1 md:p-2 w-full h-10 bg-gradient-to-l from-yellow-400 to-green-500"
      onClick={clickHandler}
    >
      Зняти кошти
    </Button>
  );
};

export default WithdrawButton;
