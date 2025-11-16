const ClockIcon = ({
  width,
  height,
  className,
  strokeWidth,
  strokeColor,
  svgFillColor,
}: CommonTypes.IIconProps) => {
  const w = width || 24;
  const h = height || 24;
  const strockeW = strokeWidth || 2;
  const strokeC = strokeColor || "currentColor";
  const fillSVGC = svgFillColor || "none";
  const classN = className || "";
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={w}
        height={h}
        viewBox={`0 0 ${w} ${h}`}
        fill={fillSVGC}
        stroke={strokeC}
        strokeWidth={strockeW}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`lucide lucide-clock-icon lucide-clock ${classN}`}
      >
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    </>
  );
};

export default ClockIcon;
