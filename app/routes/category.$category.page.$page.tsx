import { type LoaderArgs, redirect } from "@remix-run/node";

export function loader({ params }: LoaderArgs) {
  const category = params?.category?.toLowerCase().replace(/\s/g, "-");
  const page = params?.page;
  if (page) {
    return redirect(`/categoria/${category}/pagina/${page}`, { status: 301 });
  }

  return redirect(`/categoria/${category}`, { status: 301 });
}
