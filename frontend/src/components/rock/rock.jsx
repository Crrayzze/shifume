import React from "react";

export const Rock = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_35_13)">
        <circle cx="50" cy="50" r="50" fill="url(#paint0_linear_35_13)" />
      </g>
      <g filter="url(#filter1_i_35_13)">
        <circle cx="50" cy="50" r="37.2222" fill="#D9D9D9" />
      </g>
      <g clipPath="url(#clip0_35_13)">
        <path
          d="M67.5813 35.1806C65.3162 35.1469 63.4722 36.9656 63.4722 39.2222H62.7986V36.5951C62.7986 34.3806 61.0388 32.5282 58.8243 32.4861C56.5593 32.4524 54.7153 34.2712 54.7153 36.5278V39.2222H54.0417V35.2479C54.0417 33.0334 52.2819 31.181 50.0674 31.1389C47.8024 31.1052 45.9583 32.924 45.9583 35.1806V39.2222H45.2847V36.5951C45.2847 34.3806 43.5249 32.5282 41.3104 32.4861C39.0454 32.4524 37.2014 34.2712 37.2014 36.5278V47.9792L36.5278 47.3813V43.3312C36.5278 41.1168 34.768 39.2643 32.5535 39.2222C30.2885 39.1885 28.4445 41.0073 28.4445 43.2639V48.8549C28.4445 51.162 29.4296 53.3596 31.1557 54.9005L40.561 63.2617C41.4199 64.0279 41.9167 65.131 41.9167 66.2845V66.8487C41.9167 67.9686 42.8176 68.8695 43.9375 68.8695H64.1458C65.2657 68.8695 66.1667 67.9686 66.1667 66.8487V66.6045C66.1667 65.5267 66.3856 64.4574 66.7982 63.4638L70.9241 53.6712C71.3451 52.6776 71.5556 51.6082 71.5556 50.5305V39.2896C71.5556 37.0751 69.7958 35.2142 67.5813 35.1806Z"
          fill="#1F2637"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_35_13"
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
            values="0 0 0 0 0 0 0 0 0 0.06 0 0 0 0 0.375 0 0 0 0.76 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_35_13"
          />
        </filter>
        <filter
          id="filter1_i_35_13"
          x="12.7778"
          y="12.7778"
          width="74.4445"
          height="74.4445"
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
            result="effect1_innerShadow_35_13"
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
            result="effect1_innerShadow_35_13"
          />
        </filter>
        <linearGradient
          id="paint0_linear_35_13"
          x1="50"
          y1="0"
          x2="50"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2502B1" />
          <stop offset="1" stopColor="#1C008C" />
        </linearGradient>
        <clipPath id="clip0_35_13">
          <rect
            width="43.1111"
            height="43.1111"
            fill="white"
            transform="translate(28.4445 28.4445)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
