// src/lib/seo.ts
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.uu-bereau.ru";

export const canonical = (path = "/"): string => {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
};
