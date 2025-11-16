
const PackageIcon = ({
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
        className={`lucide lucide-package-icon lucide-package ${classN}`}
      >
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    </>
  );
};

export default PackageIcon;
