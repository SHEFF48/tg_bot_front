"use client";

import React from "react";
import MenuItem from "./Item";
import { usePathname } from "next/navigation";

const menu = [
  {
    id: 0,
    title: "Головна",
    url: "/",
    icon: "Home",
  },
  {
    id: 1,
    title: "Реферали",
    url: "/referrals",
    icon: "Referrals",
  },
  {
    id: 2,
    title: "Історія",
    url: "/history",
    icon: "History",
  },
  {
    id: 3,
    title: "Правила",
    url: "/rules",
    icon: "Rules",
  },
];

const MenuList = () => {
  const pathname = usePathname();

  return (
    <ul className="flex justify-center items-center p-2">
      {menu &&
        menu?.map((menuItem) => {
          const isActive = menuItem.url === pathname;

          return (
            <MenuItem key={menuItem.id} {...menuItem} isActive={isActive} />
          );
        })}
    </ul>
  );
};

export default MenuList;
