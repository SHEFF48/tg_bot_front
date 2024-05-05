"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Cancel = () => {
  const isClient = typeof window === "object";

  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  useEffect(() => {
    if (isClient && (window as any).Telegram?.WebApp) {
      (window as any).Telegram.WebApp.BackButton.show();
      (window as any).Telegram.WebApp.BackButton.onClick(handleBack);
    }

    return () => {
      if (isClient && (window as any).Telegram?.WebApp) {
        (window as any).Telegram.WebApp.BackButton.offClick(handleBack);
      }
    };
  }, [router, isClient, handleBack]);
  return (
    <div
      className="flex items-center justify-center text-white text-[10px] "
      onClick={handleBack}
    >
      Відміна
    </div>
  );
};

export default Cancel;
