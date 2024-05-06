import React from "react";

interface Props {
  className: any;
}

export const ChevronRight = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`chevron-right ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_d_1013_698)">
        <path
          className="path"
          d="M8.84995 17.45C8.71662 17.2834 8.64579 17.1 8.63745 16.9C8.62912 16.7 8.69995 16.525 8.84995 16.375L13.25 11.975L8.82495 7.55003C8.69162 7.4167 8.62912 7.23753 8.63745 7.01253C8.64579 6.78753 8.71662 6.60837 8.84995 6.47503C9.01662 6.30837 9.19579 6.2292 9.38745 6.23753C9.57912 6.24587 9.74995 6.32503 9.89995 6.47503L14.875 11.45C14.9583 11.5334 15.0166 11.6167 15.05 11.7C15.0833 11.7834 15.1 11.875 15.1 11.975C15.1 12.075 15.0833 12.1667 15.05 12.25C15.0166 12.3334 14.9583 12.4167 14.875 12.5L9.92495 17.45C9.77495 17.6 9.59995 17.6709 9.39995 17.6625C9.19995 17.6542 9.01662 17.5834 8.84995 17.45Z"
          fill="white"
        />
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="19.4263"
          id="filter0_d_1013_698"
          width="14.4631"
          x="4.63672"
          y="3.23694"
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
            result="effect1_dropShadow_1013_698"
          />
          <feOffset className="fe-offset" dy="1" />
          <feGaussianBlur className="fe-gaussian-blur" stdDeviation="1.5" />
          <feComposite className="fe-composite" in2="hardAlpha" operator="out" />
          <feColorMatrix className="fe-color-matrix" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
          <feBlend className="fe-blend" in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1013_698" />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_1013_698"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
