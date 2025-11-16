import React from "react";

const GlobeIcon = ({
  width,
  height,
  className,
  strokeWidth,
  strokeColor,
  svgFillColor,
  viewBox,
}: CommonTypes.IIconProps) => {
  const w = width || 24;
  const h = height || 24;
  const strockeW = strokeWidth || 2;
  const strokeC = strokeColor || "currentColor";
  const fillSVGC = svgFillColor || "none";
  const classN = className || "";
  const vBox = viewBox || "0 0 24 24";

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={w}
        height={h}
        viewBox={vBox}
        fill={fillSVGC}
        stroke={strokeC}
        strokeWidth={strockeW}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={classN}
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    </>
  );
};

export default GlobeIcon;
