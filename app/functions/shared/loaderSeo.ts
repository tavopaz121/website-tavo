import { getSeo } from "~/firebase/models/seo.server";
import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";

export function loaderSeoFn(page) {
  return async function () {
    const seo = await getSeo(page);

    return json({ seo });
  };
}
