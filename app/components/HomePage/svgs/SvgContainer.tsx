export default function SvgContainer({
  children,
  color,
  width,
  height,
  title,
  ...props
}: any) {
  return (
    <svg
      fill={color || "#000000"}
      height={width || "50"}
      width={height || "50"}
      aria-label={title}
      role="img"
      {...props}
    >
      <title>{title}</title>
      {children}
    </svg>
  );
}
