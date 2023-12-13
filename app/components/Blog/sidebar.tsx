import { Link } from "@remix-run/react";
const categorys = [
  "javaScript",
  "React",
  "Redux",
  "reactDom",
  "jsx",
  "CSS",
  "git",
  "angular",
  "agiligad",
  "HTML",
  "node.js",
  "vue",
  "componentes web",
];

export default function Sidebar() {
  return (
    <aside
      className="relative mt-12 lg:mt-0 lg:w-64 lg:ml-16 lg:shrink-0"
      data-aos="fade-down"
      data-aos-delay="400"
    >
      {/* Popular posts */}
      <div className="mb-8">
        <h4 className="text-2xl text-gray-200 mb-5">Categorias</h4>
        <ul className="-my-3">
          {categorys.map((category, index) => (
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
    </aside>
  );
}
