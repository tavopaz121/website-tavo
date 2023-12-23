import { redirect } from "@remix-run/node";

export function loader() {
  return redirect("/equipo", { status: 301 });
}
