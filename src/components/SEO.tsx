import { createContext, useContext, useEffect } from "react";

type Breadcrumb = {
  name: string;
  url: string;
}

type SEOProps = {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: "website" | "article" | "Service";
  breadcrumbs?: Breadcrumb[];
};

export type SEOData = Required<Pick<SEOProps, "title" | "description" | "url" | "image" | "type">> & Pick<SEOProps, "breadcrumbs">;
export const SEODataContext = createContext<((data: SEOData) => void) | null>(null);

const defaultImage = "https://www.mecatronixperu.com/ogImageMecatronix.png";
const siteName = "Mecatronix Perú";
const defaultUrl = "https://www.mecatronixperu.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": siteName,
  "url": defaultUrl,
  "logo": `${defaultUrl}/iconME.png`,
  "description": "Empresa peruana especializada en mantenimiento industrial, automatización y soluciones mecatrónicas.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+51-902778456",
    "contactType": "customer service",
    "areaServed": "PE"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "PE"
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": siteName,
  "image": defaultImage,
  "description": "Servicios de mantenimiento industrial, automatización y soluciones mecatrónicas en Perú.",
  "url": defaultUrl,
  "telephone": "+51-902778456",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "PE"
  },
  "priceRange": "$$"
}

function setMetaTag(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setPropertyTag(property: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function injectJsonLd(data: Record<string, unknown>) {
  const id = `ld-${data["@type"] as string}`;
  let script = document.querySelector<HTMLScriptElement>(`script[type="application/ld+json"]#${id}`);
  if (!script) {
    script = document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    script.id = id;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export default function SEO({
  title,
  description,
  url = defaultUrl,
  image = defaultImage,
  type = "website",
  breadcrumbs
}: SEOProps) {
  const registerSEO = useContext(SEODataContext);
  const seoData: SEOData = { title, description, url, image, type, breadcrumbs };
  registerSEO?.(seoData);

  useEffect(() => {
    document.querySelector("#ld-BreadcrumbList")?.remove();
    document.querySelector("#ld-Article")?.remove();
    document.querySelector("#ld-Service")?.remove();
    document.title = title;

    setMetaTag("description", description);
    setMetaTag("keywords", "mantenimiento industrial, automatización, mecatrónica, servicios industriales");
    setMetaTag("robots", "index, follow");

    setPropertyTag("og:type", type === "Service" ? "website" : type);
    setPropertyTag("og:title", title);
    setPropertyTag("og:description", description);
    setPropertyTag("og:url", url);
    setPropertyTag("og:image", image);
    setPropertyTag("og:site_name", siteName);

    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", image);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    if (canonical.getAttribute("href") !== url) {
      canonical.setAttribute("href", url);
    }

    setMetaTag("author", "Mecatronix Perú");
    setMetaTag("theme-color", "#1E293B");
    setMetaTag("mobile-web-app-capable", "yes");
    setMetaTag("apple-mobile-web-app-capable", "yes");
    setMetaTag("apple-mobile-web-app-status-bar-style", "black-translucent");

    setPropertyTag("og:locale", "es_PE");

    injectJsonLd(organizationSchema);
    if (url === defaultUrl || url === `${defaultUrl}/`) {
      injectJsonLd(localBusinessSchema);
    } else {
      document.querySelector("#ld-LocalBusiness")?.remove();
    }

    if (breadcrumbs && breadcrumbs.length > 0) {
      injectJsonLd({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": crumb.name,
          "item": crumb.url,
        }))
      })
    }

    if (type === "article" || type === "Service") {
      injectJsonLd({
        "@context": "https://schema.org",
        "@type": type === "article" ? "Article" : "Service",
        ...(type === "article" ? { "headline": title } : { "name": title }),
        "description": description,
        "image": image,
        "url": url,
        "provider": {
          "@type": "Organization",
          "name": siteName,
          "url": defaultUrl,
        },
      });
    }
  }, [title, description, url, image, type, breadcrumbs]);

  return null;
}
