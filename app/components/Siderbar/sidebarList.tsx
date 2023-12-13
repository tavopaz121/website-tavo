import { Link } from "@remix-run/react";

type SideBarListProps = {
  title?: string;
  listCategorys?: string[];
  className?: string;
};

export default function SideBarList({
  listCategorys,
  title,
  className,
}: SideBarListProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <h4 className="text-2xl text-gray-200 mb-5">{title}</h4>
      <ul className="-my-3">
        {listCategorys?.map((category, index) => (
          <li className="flex py-3 border-b border-gray-500" key={index}>
            <Link
              to={`/categoria/${category}`}
              className="text-gray-200 font-bold tracking-tight mb-1 capitalize"
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
