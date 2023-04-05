import React from "react";

export const Scissors = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_40_22)">
        <circle cx="50" cy="50" r="50" fill="url(#paint0_linear_40_22)" />
      </g>
      <g filter="url(#filter1_i_40_22)">
        <circle cx="50" cy="50" r="37.2222" fill="#D9D9D9" />
      </g>
      <g clip-path="url(#clip0_40_22)">
        <path
          d="M31.8125 45.9583C29.9517 45.9583 28.4445 47.4655 28.4445 49.3264C28.4445 51.1872 29.9517 52.6944 31.8125 52.6944H46.9856C46.3457 53.4102 45.9583 54.3532 45.9583 55.3889C45.9583 57.5192 47.6003 59.2622 49.6885 59.4221C49.0401 60.1378 48.6528 61.0893 48.6528 62.125C48.6528 64.3563 50.4631 66.1667 52.6945 66.1667H60.7778C66.7308 66.1667 71.5556 61.3419 71.5556 55.3889V45.8657C71.5556 42.4808 70.2083 39.2306 67.817 36.8309C65.8972 34.9111 63.2954 33.8333 60.5841 33.8333H56.7361C54.9426 33.8333 53.427 35.0037 52.8965 36.6204L59.1695 38.616C59.8768 38.8433 60.2726 39.6011 60.0452 40.3084C59.8179 41.0157 59.0601 41.4115 58.3528 41.1841L52.6945 39.3822V39.3906L35.5174 33.9849C33.7407 33.4292 31.8546 34.4143 31.2905 36.191C30.7263 37.9676 31.7199 39.8537 33.4965 40.4179L51.1367 45.9583H31.8125Z"
          fill="#1F2637"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_40_22"
          x="0"
          y="-2"
          width="101"
          height="102"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            values="0 0 0 0 0.204167 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_40_22"
          />
        </filter>
        <filter
          id="filter1_i_40_22"
          x="12.7778"
          y="12.7778"
          width="74.4445"
          height="74.4445"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_innerShadow_40_22"
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
            result="effect1_innerShadow_40_22"
          />
        </filter>
        <linearGradient
          id="paint0_linear_40_22"
          x1="50"
          y1="0"
          x2="50"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#B70B00" />
          <stop offset="1" stop-color="#6A0000" />
        </linearGradient>
        <clipPath id="clip0_40_22">
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
