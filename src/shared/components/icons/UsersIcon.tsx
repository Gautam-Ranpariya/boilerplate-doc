const UsersIcon = ({
  width,
  height,
  className,
  strokeWidth,
  strokeColor,
  svgFillColor,
  viewBox
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
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <path d="M16 3.128a4 4 0 0 1 0 7.744" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    </>
  );
};

export default UsersIcon;
