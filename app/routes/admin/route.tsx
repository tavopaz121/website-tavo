import { Outlet } from "@remix-run/react";
import Nav from "~/components/Navs/Nav";

export default function Admin() {
  return (
    <>
      <Nav items={[{ label: "Publocar", to: "/publicar" }]} />
      <div className="mt-20 p-4">
        <p>Admin</p>
        <Outlet />
      </div>
    </>
  );
}
