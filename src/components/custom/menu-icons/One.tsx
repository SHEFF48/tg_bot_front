import React from "react";

const One = ({ isActive }: { isActive: boolean }) =>
  !isActive ? (
    <>
      <svg
        width="25"
        height="31"
        viewBox="0 0 25 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.15"
          d="M16.598 7.71133L11.5764 8.86172L10 2.47148L18.7326 0H24.7398V30.0348H16.598V7.71133Z"
          fill="#F4D03F"
        />
      </svg>
    </>
  ) : (
    <>
      <svg
        width="25"
        height="31"
        viewBox="0 0 25 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.15"
          d="M16.598 7.71133L11.5764 8.86172L10 2.47148L18.7326 0H24.7398V30.0348H16.598V7.71133Z"
          fill="#F4D03F"
        />
      </svg>
    </>
  );
export default One;
