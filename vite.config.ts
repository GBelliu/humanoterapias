import { defineConfig, type HtmlTagDescriptor, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { site, mapsUrl } from "./src/content/site.ts";

// URL pública do site, usada em canonical, Open Graph e JSON-LD.
// Defina SITE_URL quando houver domínio próprio; na Vercel, usa o domínio de produção do projeto.
function resolveSiteUrl(): string {
  const url =
    process.env.SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "");
  return url.replace(/\/+$/, "");
}

function seo(): Plugin {
  const siteUrl = resolveSiteUrl();
  const absolute = (path: string) => (siteUrl ? `${siteUrl}${path}` : path);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: site.brand,
    description: site.seo.description,
    ...(siteUrl && { url: siteUrl, image: absolute(site.seo.ogImage) }),
    telephone: `+${site.contact.whatsapp}`,
    hasMap: mapsUrl,
    sameAs: [site.instagram.url],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.street} - ${site.address.neighborhood}`,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      addressCountry: site.address.country,
    },
    areaServed: [{ "@type": "City", name: site.address.city }, "Online"],
    founder: {
      "@type": "Person",
      name: site.therapist.name,
      jobTitle: site.therapist.role,
    },
  };

  const meta = (attrs: Record<string, string>): HtmlTagDescriptor => ({ tag: "meta", attrs, injectTo: "head" });

  return {
    name: "humanoterapias-seo",
    transformIndexHtml(html) {
      const tags: HtmlTagDescriptor[] = [
        meta({ name: "description", content: site.seo.description }),
        meta({ property: "og:type", content: "website" }),
        meta({ property: "og:locale", content: site.seo.locale }),
        meta({ property: "og:site_name", content: site.brand }),
        meta({ property: "og:title", content: site.seo.title }),
        meta({ property: "og:description", content: site.seo.description }),
        meta({ name: "twitter:card", content: "summary_large_image" }),
        {
          tag: "script",
          attrs: { type: "application/ld+json" },
          children: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          injectTo: "head",
        },
      ];

      if (siteUrl) {
        tags.push(
          { tag: "link", attrs: { rel: "canonical", href: `${siteUrl}/` }, injectTo: "head" },
          meta({ property: "og:url", content: `${siteUrl}/` }),
          meta({ property: "og:image", content: absolute(site.seo.ogImage) }),
          meta({ property: "og:image:width", content: "1200" }),
          meta({ property: "og:image:height", content: "630" }),
        );
      }

      return { html: html.replace("%SITE_TITLE%", site.seo.title), tags };
    },
  };
}

export default defineConfig({
  plugins: [react(), seo()],
});
