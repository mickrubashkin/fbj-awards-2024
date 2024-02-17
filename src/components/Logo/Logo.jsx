import React from 'react';

function Logo({ className = '' }) {
  return (
    <svg
      className={className}
      width="101"
      height="106"
      viewBox="0 0 101 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g filter="url(#filter0_d_41_1682)">
        <path
          d="M92.9023 1.29736V97.2974H46.9023M0.902344 97.2974V1.29736H44.9617"
          stroke="white"
          strokeWidth="0.8"
        />
      </g>
      <g clipPath="url(#clip0_41_1682)">
        <path
          d="M79.6948 15.8473H14.3887V82.8632H79.6948V15.8473Z"
          fill="url(#pattern0)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_41_1682"
          x="0.501953"
          y="0.897339"
          width="100.501"
          height="104.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood
            floodOpacity="0"
            result="BackgroundImageFix"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset
            dx="4"
            dy="4"
          />
          <feGaussianBlur stdDeviation="1.85" />
          <feComposite
            in2="hardAlpha"
            operator="out"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.39 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_41_1682"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_41_1682"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_41_1682"
            transform="scale(0.00179211 0.00174216)"
          />
        </pattern>
        <clipPath id="clip0_41_1682">
          <rect
            width="65.5735"
            height="67.9798"
            fill="white"
            transform="translate(14.1172 15.3075)"
          />
        </clipPath>
        <image
          id="image0_41_1682"
          width="558"
          height="574"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default Logo;