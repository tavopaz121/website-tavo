import stylesheet from "~/tailwind.css";

export const htmlPageLinks = [
  { rel: "stylesheet", href: stylesheet, content: "text/css" },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "./icons/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "./icons/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "./icons/favicon-16x16.png",
  },
  { rel: "manifest", href: "./icons/site.webmanifest" },
  //{ rel: "mask-icon", href: "./icons/safari-pinned-tab.svg", color: "#5DBF17" },
];
