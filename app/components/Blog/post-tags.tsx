export default function PostTags({ tags }: { tags: string[] }) {
  const tagColor = (tag: string) => {
    switch (tag) {
      case "javascript":
        return "text-gray-100 bg-yellow-500 hover:bg-yellow-600";
      case "react":
        return "text-gray-100 bg-blue-500 hover:bg-blue-600";
      case "jsx":
        return "text-gray-100 bg-sky-500 hover:bg-sky-600";
      case "redux":
        return "text-gray-100 bg-purple-500 hover:bg-purple-600";
      case "html":
        return "text-gray-100 bg-red-500 hover:bg-red-600";
      default:
        return "text-gray-100 bg-pink-600 hover:bg-pink-700";
    }
  };

  return (
    <ul className="flex flex-wrap text-xs font-medium -m-1">
      {tags?.map((tag, tagIndex) => (
        <li key={tagIndex} className="m-1">
          <a
            href={`/category/${tag}`}
            className={`inline-flex capitalize text-center py-1 px-3 rounded-full transition duration-150 ease-in-out ${tagColor(
              tag,
            )}`}
          >
            {tag}
          </a>
        </li>
      ))}
    </ul>
  );
}
