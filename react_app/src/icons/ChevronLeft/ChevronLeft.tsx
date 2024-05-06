import React from "react";

interface Props {
  className: any;
}

export const ChevronLeft = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`chevron-left ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_d_1013_695)">
        <path
          className="path"
          d="M13.475 17.45L8.52505 12.5C8.44171 12.4167 8.38338 12.3333 8.35005 12.25C8.31672 12.1667 8.30005 12.075 8.30005 11.975C8.30005 11.875 8.31672 11.7833 8.35005 11.7C8.38338 11.6167 8.44171 11.5333 8.52505 11.45L13.5 6.475C13.65 6.325 13.8292 6.25 14.0375 6.25C14.2459 6.25 14.425 6.325 14.575 6.475C14.725 6.625 14.7959 6.80833 14.7875 7.025C14.7792 7.24167 14.7 7.425 14.55 7.575L10.15 11.975L14.575 16.4C14.725 16.55 14.8 16.725 14.8 16.925C14.8 17.125 14.725 17.3 14.575 17.45C14.425 17.6 14.2417 17.675 14.025 17.675C13.8084 17.675 13.625 17.6 13.475 17.45Z"
          fill="white"
        />
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="19.425"
          id="filter0_d_1013_695"
          width="14.5"
          x="4.30005"
          y="3.25"
        >
          <feFlood className="fe-flood" floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            className="fe-morphology"
            in="SourceAlpha"
            operator="dilate"
            radius="1"
            result="effect1_dropShadow_1013_695"
          />
          <feOffset className="fe-offset" dy="1" />
          <feGaussianBlur className="fe-gaussian-blur" stdDeviation="1.5" />
          <feComposite className="fe-composite" in2="hardAlpha" operator="out" />
          <feColorMatrix className="fe-color-matrix" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
          <feBlend className="fe-blend" in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1013_695" />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_1013_695"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
