import { parseISO, format } from "date-fns";
import { es } from "date-fns/locale";

export default function PostDate({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} className=" capitalize">
      {format(date, "MMM d, yyyy", { locale: es })}
    </time>
  );
}
