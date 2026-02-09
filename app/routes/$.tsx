import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "404 - Page Not Found | NgodingHouse" },
    {
      name: "description",
      content: "The page you're looking for doesn't exist.",
    },
    { name: "robots", content: "noindex, nofollow" },
  ];
};

export default function NotFound() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-8xl md:text-9xl font-bold text-slate-700">404</h1>
        <h2 className="text-3xl md:text-5xl font-semibold mt-6 mb-4">
          Page Not Found
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Oops! The page you're looking for seems to have wandered off into the
          digital void.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-slate-600 px-6 py-3 rounded-full ring-2 ring-slate-500 hover:bg-slate-500 hover:ring-slate-400 transition-colors duration-150 font-medium text-white"
          >
            Go Home
          </Link>
          <Link
            to="/works"
            className="px-6 py-3 rounded-full ring-2 ring-slate-600 hover:ring-slate-500 transition-colors duration-150 font-medium"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </div>
  );
}
