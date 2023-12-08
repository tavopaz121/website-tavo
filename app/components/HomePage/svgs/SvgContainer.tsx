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
      height={width || "800px"}
      width={height || "800px"}
      aria-label={title}
      role="img"
      {...props}
    >
      <title>{title}</title>
      {children}
    </svg>
  );
}
