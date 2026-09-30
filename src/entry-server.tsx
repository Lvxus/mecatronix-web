import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App";
import services from "./data/service";
import { SEODataContext, type SEOData } from "./components/SEO";

export const prerenderRoutes = [
  "/",
  "/nosotros",
  "/servicios",
  ...services.map((service) => `/servicios/${service.slug}`),
  "/contacto",
  "/politica-de-privacidad",
  "/terminos-y-condiciones",
  "/libro-de-reclamaciones",
];

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]!);
}

function renderHead(data: SEOData) {
  const { title, description, url, image, type, breadcrumbs } = data;
  const tags = [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}">`,
    `<link rel="canonical" href="${escapeHtml(url)}">`,
    `<meta property="og:type" content="${type === "Service" ? "website" : escapeHtml(type)}">`,
    `<meta property="og:title" content="${escapeHtml(title)}">`,
    `<meta property="og:description" content="${escapeHtml(description)}">`,
    `<meta property="og:url" content="${escapeHtml(url)}">`,
    `<meta property="og:image" content="${escapeHtml(image)}">`,
    `<meta property="og:site_name" content="Mecatronix Perú">`,
    `<meta property="og:locale" content="es_PE">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escapeHtml(title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(description)}">`,
    `<meta name="twitter:image" content="${escapeHtml(image)}">`,
  ];
  if (url === "https://www.mecatronixperu.com/" || url === "https://www.mecatronixperu.com") {
    tags.push(`<script id="ld-LocalBusiness" type="application/ld+json">${JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Mecatronix Perú",
      image,
      description,
      url,
      telephone: "+51-902778456",
      address: { "@type": "PostalAddress", addressCountry: "PE" },
      priceRange: "$$",
    })}</script>`);
  }
  if (breadcrumbs?.length) {
    tags.push(`<script id="ld-BreadcrumbList" type="application/ld+json">${JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    })}</script>`);
  }
  if (type === "Service") {
    tags.push(`<script id="ld-Service" type="application/ld+json">${JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: title,
      description,
      image,
      url,
      provider: { "@type": "Organization", name: "Mecatronix Perú", url: "https://www.mecatronixperu.com" },
    })}</script>`);
  }
  tags.push(`<script id="ld-Organization" type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mecatronix Perú",
    url: "https://www.mecatronixperu.com",
    logo: "https://www.mecatronixperu.com/iconME.png",
    description: "Empresa peruana especializada en mantenimiento industrial, automatización y soluciones mecatrónicas.",
    contactPoint: { "@type": "ContactPoint", telephone: "+51-902778456", contactType: "customer service", areaServed: "PE" },
    address: { "@type": "PostalAddress", addressCountry: "PE" },
  })}</script>`);
  return tags.join("\n  ");
}

export function render(url: string) {
  let seoData: SEOData | undefined;
  const app = createElement(
    SEODataContext.Provider,
    { value: (data: SEOData) => { seoData = data; } },
    createElement(StaticRouter, { location: url }, createElement(App)),
  );
  const html = renderToString(app);
  return { html, head: seoData ? renderHead(seoData) : "" };
}
