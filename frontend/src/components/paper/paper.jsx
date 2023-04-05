import React from "react";
import "./paper.css";

export const Paper = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_40_15)">
        <circle cx="50" cy="50" r="50" fill="url(#paint0_linear_40_15)" />
      </g>
      <g filter="url(#filter1_i_40_15)">
        <circle cx="50" cy="50" r="37.2222" fill="#D9D9D9" />
      </g>
      <g clipPath="url(#clip0_40_15)">
        <path
          d="M67.7815 39.2228C65.6236 39.1867 63.8572 40.7682 63.8572 42.6568V50H63.0873V35.1629C63.0873 33.2743 61.3209 31.6928 59.163 31.7289C57.0718 31.7639 55.3889 33.2582 55.3889 35.0964V50H54.6191V31.879C54.6191 29.9904 52.8527 28.4089 50.6947 28.445C48.6035 28.4801 46.9207 29.9743 46.9207 31.8125V50H46.1508V35.2471C46.1508 33.3585 44.3844 31.777 42.2264 31.8131C40.1353 31.8481 38.4524 33.3424 38.4524 35.1806V55.0514L35.4069 51.3871C34.1566 49.8827 31.7493 49.55 30.0299 50.6442C28.3107 51.7383 27.9306 53.8447 29.1809 55.3491L41.2675 69.8911C41.696 70.4066 42.2578 70.8262 42.9071 71.1155C43.5563 71.4048 44.2745 71.5556 45.0031 71.5556H64.0172C66.1606 71.5556 68.0225 70.2653 68.5134 68.4396L71.0643 58.9535C71.3906 57.7399 71.5555 56.4974 71.5555 55.2507V42.5903C71.5556 40.7521 69.8727 39.2579 67.7815 39.2228Z"
          fill="#1F2637"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_40_15"
          x="0"
          y="-2"
          width="101"
          height="102"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="-5" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.204167 0 0 0 0 0.134259 0 0 0 0 0 0 0 0 0.55 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_40_15"
          />
        </filter>
        <filter
          id="filter1_i_40_15"
          x="12.7778"
          y="12.7778"
          width="74.4445"
          height="74.4444"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="12"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_innerShadow_40_15"
          />
          <feOffset dx="-6" dy="19" />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_40_15"
          />
        </filter>
        <linearGradient
          id="paint0_linear_40_15"
          x1="50"
          y1="0"
          x2="50"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B87900" />
          <stop offset="1" stopColor="#915F00" />
        </linearGradient>
        <clipPath id="clip0_40_15">
          <rect
            width="43.1111"
            height="43.1111"
            fill="white"
            transform="translate(28.4445 28.4444)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
