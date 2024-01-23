import React from "react";

export const MarkerIcon = ({ number }) => {
  return (
    <div>
      <svg
        clipRule="evenodd"
        fillRule="evenodd"
        height="512"
        imageRendering="optimizeQuality"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        viewBox="0 0 1707 1707"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <linearGradient
          id="id0"
          gradientUnits="userSpaceOnUse"
          x1="853.335"
          x2="853.335"
          y1="-.004"
          y2="1706.66"
        >
          <stop offset="0" stopColor="#66c" />
          <stop offset=".509804" stopColor="#f0f" />
          <stop offset="1" stopColor="#f60" />
        </linearGradient>
        <g id="Layer_x0020_1">
          <path
            d="m853 0c472 0 854 382 854 853 0 472-382 854-854 854-471 0-853-382-853-854 0-471 382-853 853-853zm547 306c-302-301-792-302-1093 0-302 302-302 792-1 1094 302 302 792 302 1094 0s302-792 0-1094z"
            fill="url(#id0)"
            fillRule="nonzero"
          />
        </g>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          fill="black"
          fontSize="700"
          fontFamily="Arial"
          dy=".3em"
        >
          {number}
        </text>
      </svg>
    </div>
  );
};
