import React from "react";

export default function WaveAnimation() {
  return (
    <svg
      className="waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shapeRendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g className="parallax">
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="-2"
          fill="#9D7CC3"
          fillOpacity={"0.5"}
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="3"
          fill="#95E5DC "
          fillOpacity={"0.5"}
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="5"
          fillOpacity={0.5}
          fill="#FFE188"
        />

        {/* stroke wave */}
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="3"
          stroke="#4FD3C4"
          fillOpacity="0"
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="5"
          stroke="#9D7CC3"
          fillOpacity="0"
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="7"
          stroke="#4FD3C4"
          fillOpacity="0"
        />
      </g>
    </svg>
  );
}
