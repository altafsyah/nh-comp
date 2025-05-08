import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  return new Response(renderXML(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "x-content-type-options": "nosniff",
      "Cache-Control": `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`,
    },
  });
};

const renderXML = () => {
  const url = "https://www.ngodinghouse.com";

  const sourceXML = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${url}</loc>
    </url>
    <url>
      <loc>${url}/about</loc>
    </url>
    <url>
      <loc>${url}/works</loc>
    </url>
  </urlset>`;

  return sourceXML;
};
