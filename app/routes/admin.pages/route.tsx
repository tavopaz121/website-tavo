import { Outlet } from "@remix-run/react";

export default function Pages() {
  return (
    <section className="relative bg-gray-900 px-8 max-sm:px-4 overflow-hidden py-10">
      <Outlet />
    </section>
  );
}
