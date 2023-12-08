import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getPosts } from "~/firebase/models/posts.server";

export async function loader({ request }: ActionArgs) {
  const data = await getPosts();

  return json(data);
}

export default function Posts() {
  const loaderData = useLoaderData();
  return <div className="py-3 px-3">{JSON.stringify(loaderData)}</div>;
}
