import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const distDir = path.resolve("dist");
const template = await readFile(path.join(distDir, "index.html"), "utf8");
const serverEntry = await import(pathToFileURL(path.join(distDir, "server/entry-server.js")).href);

function upsertHeadTag(html, pattern, replacement) {
  return pattern.test(html) ? html.replace(pattern, replacement) : html.replace("</head>", `  ${replacement}\n</head>`);
}

for (const route of serverEntry.prerenderRoutes) {
  const { html: renderedHtml, head } = serverEntry.render(route);
  let document = template.replace('<div id="root"></div>', `<div id="root">${renderedHtml}</div>`);

  const title = head.match(/<title>[\s\S]*?<\/title>/)?.[0];
  if (title) document = upsertHeadTag(document, /<title>[\s\S]*?<\/title>/, title);
  for (const [pattern, tag] of [
    [/<meta\s+name="description"[^>]*>/i, head.match(/<meta name="description"[^>]*>/)?.[0]],
    [/<link\s+rel="canonical"[^>]*>/i, head.match(/<link rel="canonical"[^>]*>/)?.[0]],
  ]) {
    if (tag) document = upsertHeadTag(document, pattern, tag);
  }

  document = document.replace(/\s*<meta\s+property="og:(?:type|title|description|url|image|site_name|locale)"[^>]*>/gi, "");
  document = document.replace(/\s*<meta\s+name="twitter:(?:card|title|description|image)"[^>]*>/gi, "");
  const socialAndStructuredData = head
    .replace(/<title>[\s\S]*?<\/title>/, "")
    .replace(/<meta\s+name="description"[^>]*>/, "")
    .replace(/<link\s+rel="canonical"[^>]*>/, "");
  document = document.replace("</head>", `  ${socialAndStructuredData}\n</head>`);

  const outputPath = route === "/"
    ? path.join(distDir, "index.html")
    : path.join(distDir, route.slice(1), "index.html");
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, document);
}

console.log(`[prerender] ${serverEntry.prerenderRoutes.length} rutas generadas.`);
await rm(path.join(distDir, "server"), { recursive: true, force: true });
