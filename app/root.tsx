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

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "manifest", hre: "/site.webmanifest" },
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
      <body className="urbanist">
        <nav className=" bg-white py-8 drop-shadow">
          <div className="container w-full mx-auto flex justify-between items-center px-5">
            <Link to="/" className="text-xl md:text-3xl font-bold">
              ngodinghouse
            </Link>
            <ul className="lg:flex items-center gap-5 text-xl font-medium hidden">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/works">Works</Link>
              </li>
              <li>
                <Link to="/clients">Client</Link>
              </li>
            </ul>
            <Link
              to="mailto:hi@ngodinghouse.com"
              rel="noreferrer"
              target="_blank"
              className="lg:block text-2xl w-fit py-3 px-12 rounded-full bg-[#2C3147] text-white font-medium hidden"
            >
              Contact
            </Link>
          </div>
        </nav>
        <main className="w-full min-h-[60vh]">{children}</main>
        <footer className="w-full pt-12 bg-black1 text-white relative overflow-hidden">
          <div className="lg:flex justify-between container mx-auto px-5">
            <h1 className="text-2xl md:text-5xl font-bold w-full md:leading-[57px] text-center md:text-left">
              Empowering Innovation, Building Tomorrow: Your Trusted Software
              House.
            </h1>
            <div className="w-full flex flex-col items-center md:items-end mt-10 md:mt-0 text-center">
              <h3 className="text-xl md:text-4xl font-bold">Ready To Talk?</h3>
              <p className="mt-2 md:mt-4 text-lg md:text-2xl">
                We've got a good feeling about this
              </p>
              <Link
                to="mailto:hi@ngodinghouse.com"
                className="block text-lg md:text-2xl w-fit py-1 md:py-3 px-6 md:px-12 rounded-full bg-[#2C3147] text-white font-medium mt-5"
              >
                Start a Project
              </Link>
            </div>
          </div>
          <h1 className="absolute -bottom-4 hidden md:block text-[200px] left-1/2 -translate-x-1/2 font-bold">
            ngoding<span className="text-[#2C3147asdasd]">house</span>
          </h1>
          <div className="mt-24 md:mt-56 bg-black1 border-t border-t-white pt-7 pb-12 flex flex-col md:flex-row gap-5 justify-between items-center relative z-20 container w-full mx-auto px-5">
            <h5>© 2024 ngodinghouse, All Rights Reserved.</h5>
            <div className="flex gap-4 items-center">
              <a
                href="https://www.instagram.com/ngodinghouse/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/instagram.svg"
                  alt="Instagram"
                  className="h-6"
                />
              </a>
            </div>
          </div>
        </footer>
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
