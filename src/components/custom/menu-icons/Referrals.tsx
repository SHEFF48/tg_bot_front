import React from "react";

const Referrals = ({ isActive }: { isActive: boolean }) =>
  !isActive ? (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 18.625C3 17.3652 3.50044 16.157 4.39124 15.2662C5.28204 14.3754 6.49022 13.875 7.75 13.875H17.25C18.5098 13.875 19.718 14.3754 20.6088 15.2662C21.4996 16.157 22 17.3652 22 18.625C22 19.2549 21.7498 19.859 21.3044 20.3044C20.859 20.7498 20.2549 21 19.625 21H5.375C4.74511 21 4.14102 20.7498 3.69562 20.3044C3.25022 19.859 3 19.2549 3 18.625Z"
          stroke="#A2A2A2"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <path
          d="M12.5 10.125C14.4675 10.125 16.0625 8.53001 16.0625 6.5625C16.0625 4.59499 14.4675 3 12.5 3C10.5325 3 8.9375 4.59499 8.9375 6.5625C8.9375 8.53001 10.5325 10.125 12.5 10.125Z"
          stroke="#A2A2A2"
          stroke-width="1.5"
        />
      </svg>
    </>
  ) : (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 18.625C3 17.3652 3.50044 16.157 4.39124 15.2662C5.28204 14.3754 6.49022 13.875 7.75 13.875H17.25C18.5098 13.875 19.718 14.3754 20.6088 15.2662C21.4996 16.157 22 17.3652 22 18.625C22 19.2549 21.7498 19.859 21.3044 20.3044C20.859 20.7498 20.2549 21 19.625 21H5.375C4.74511 21 4.14102 20.7498 3.69562 20.3044C3.25022 19.859 3 19.2549 3 18.625Z"
          fill="url(#paint0_linear_21_121)"
          stroke="url(#paint1_linear_21_121)"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <path
          d="M12.5 10.125C14.4675 10.125 16.0625 8.53001 16.0625 6.5625C16.0625 4.59499 14.4675 3 12.5 3C10.5325 3 8.9375 4.59499 8.9375 6.5625C8.9375 8.53001 10.5325 10.125 12.5 10.125Z"
          fill="url(#paint2_linear_21_121)"
          stroke="url(#paint3_linear_21_121)"
          stroke-width="1.5"
        />
        <defs>
          <linearGradient
            id="paint0_linear_21_121"
            x1="21.8319"
            y1="16.9707"
            x2="3.99674"
            y2="21.5398"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F4D03F" />
            <stop offset="1" stop-color="#16A085" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_21_121"
            x1="21.8319"
            y1="16.9707"
            x2="3.99674"
            y2="21.5398"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F4D03F" />
            <stop offset="1" stop-color="#16A085" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_21_121"
            x1="15.9995"
            y1="6.0957"
            x2="8.9375"
            y2="6.77414"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F4D03F" />
            <stop offset="1" stop-color="#16A085" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_21_121"
            x1="15.9995"
            y1="6.0957"
            x2="8.9375"
            y2="6.77414"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F4D03F" />
            <stop offset="1" stop-color="#16A085" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
export default Referrals;
