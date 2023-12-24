import { json, type ActionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPages } from "~/firebase/models/pages.server";
import PreviwPages from "./Components/PreviwPages";

export async function loader({ request }: ActionArgs) {
  const data = await getPages();

  return json(data);
}

export default function Pages() {
  const pages = useLoaderData();

  console.log(pages);

  return (
    <section className="relative bg-gray-900 px-8 max-sm:px-4 overflow-hidden">
      <div className="pb-12 md:pb-10 mt-16">
        <h1 className="text-white mb-4 lg:mb-8">Administracion De Páginas</h1>
        <PreviwPages/>
      </div>
    </section>
  );
}
