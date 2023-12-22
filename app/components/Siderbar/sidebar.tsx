type SideBarProps = {
  children?: JSX.Element | string | null;
  className?: string;
};

export default function Sidebar({ children, className }: SideBarProps) {
  return (
    <aside
      className={`relative mt-12 lg:mt-0 lg:w-64 lg:ml-16 lg:shrink-0 ${className}`}
      data-aos="fade-down"
      data-aos-delay="400"
    >
      {children}
    </aside>
  );
}
