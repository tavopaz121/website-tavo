import { type LoaderFunction, json, redirect } from "@remix-run/node";
import { deletePage } from "~/firebase/models/pages.server";

export let loader: LoaderFunction = async ({ params }) => {
  const pageId = params.pageId as string;
  const result = await deletePage(pageId);

  console.log(result);

  if (result.success) {
    redirect("/admin/pages");
    return json({ success: true, message: "Página eliminada exitosamente" });
  } else {
    return json({ success: false, message: result.errorMessage }, 500);
  }
};

export default function route() {
  return (
    <div>
      <h1 className="text-white">Pagina eliminada</h1>
    </div>
  );
}
