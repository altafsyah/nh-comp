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
import Nav from "./components/nav";

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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NgodingHouse",
  url: "https://ngodinghouse.com",
  logo: "https://ngodinghouse.com/images/logo.svg",
  sameAs: ["https://instagram.com/ngodinghouse"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pontianak",
    addressCountry: "ID",
  },
  description:
    "Software development agency specializing in web and app development",
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <Meta />
        <Links />
      </head>
      <body className="urbanist bg-slate-950 text-gray-300 overflow-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded z-[9999] font-medium"
        >
          Skip to content
        </a>
        <Nav />
        <ReactLenis
          root
          options={{
            lerp: 0.1,
            smoothWheel: true,
            syncTouch: false,
          }}
        />

        <main id="main-content" className="w-full min-h-[60vh] pt-16">
          {children}
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
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
