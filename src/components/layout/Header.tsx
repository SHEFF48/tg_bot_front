import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between text-white bg-[#333333] h-[26px] w-full shrink-0 top-0 z-20 overflow-hidden">
      <div className="flex items-center justify-between px-4 mx-auto w-full">
        <div className="flex items-center justify-center text-white text-[10px] ">
          Відміна
        </div>
        <div className="menu flex items-center justify-center  w-4 h-4 ">
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 0C4.08172 0 0.5 3.58172 0.5 8C0.5 12.4183 4.08172 16 8.5 16C12.9183 16 16.5 12.4183 16.5 8C16.5 3.58172 12.9183 0 8.5 0ZM8.5 15C4.634 15 1.5 11.866 1.5 8C1.5 4.134 4.634 1 8.5 1C12.366 1 15.5 4.134 15.5 8C15.5 11.866 12.366 15 8.5 15Z"
              fill="white"
            />
            <path
              d="M8.5 9C9.05228 9 9.5 8.55228 9.5 8C9.5 7.44772 9.05228 7 8.5 7C7.94772 7 7.5 7.44772 7.5 8C7.5 8.55228 7.94772 9 8.5 9Z"
              fill="white"
            />
            <path
              d="M12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z"
              fill="white"
            />
            <path
              d="M5 9C5.55228 9 6 8.55228 6 8C6 7.44772 5.55228 7 5 7C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
