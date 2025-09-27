/* eslint-disable react/no-unescaped-entities */
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import { ReactLenis } from "lenis/react";
import Footer from "./components/footer";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "manifest", href: "/site.webmanifest" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Bayon&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap",
  },
  {
    rel: "preload",
    href: "/assets/sprite.svg",
    type: "image/svg+xml",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="urbanist bg-slate-950 text-gray-300 overflow-hidden">
        <ReactLenis root />

        <main className="w-full min-h-[60vh]">{children}</main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  return (
    <html lang="en">
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body className="w-screen h-screen flex justify-center items-center flex-col">
        <main>
          <h1>Oops! This page is still under development</h1>
          <Link to="/">Go back to home</Link>
        </main>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
