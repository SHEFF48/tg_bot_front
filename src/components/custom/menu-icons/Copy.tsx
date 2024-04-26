import React from "react";

const Copy = ({ isActive }: { isActive?: boolean }) => (
  <>
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
  </>
);
export default Copy;
