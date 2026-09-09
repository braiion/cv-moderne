import assert from "node:assert/strict";

const origin = process.argv[2] || "http://localhost:3016";
for (const [path, locale, phrase] of [["/", "fr", "Le second projet reste confidentiel"], ["/en", "en", "The second project remains confidential"]]) {
  const response = await fetch(new URL(path, origin));
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, new RegExp(`<html[^>]*lang="${locale}"`));
  const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
  assert.ok(canonical, "Missing canonical URL");
  assert.equal(new URL(canonical).href, new URL(path, "https://bryandupressoir.vercel.app").href);
  assert.match(html, /hrefLang="en"[^>]*href="https:\/\/bryandupressoir.vercel.app\/en"/i);
  assert.ok(html.includes(phrase));
  assert.ok(html.includes(`/api/cv?lang=${locale}`));
  assert.ok(html.includes("97"));
  assert.ok(html.includes("32"));
  assert.ok(html.includes(locale === "fr" ? "Conseiller IA" : "AI advisor"));
  const pdf = await fetch(new URL(`/api/cv?lang=${locale}`, origin));
  assert.equal(pdf.status, 200);
  assert.match(pdf.headers.get("content-type"), /application\/pdf/);
  assert.ok(Buffer.from(await pdf.arrayBuffer()).subarray(0, 5).equals(Buffer.from("%PDF-")));
  const image = await fetch(new URL(`/og?lang=${locale}`, origin));
  assert.equal(image.status, 200);
  assert.match(image.headers.get("content-type"), /image\/png/);
  const png = Buffer.from(await image.arrayBuffer());
  assert.equal(png.readUInt32BE(16), 1200);
  assert.equal(png.readUInt32BE(20), 630);
  console.log(`${path}: localized HTML, metadata, public content, PDF and sharing image verified`);
}
for (const path of ["/robots.txt", "/sitemap.xml"]) {
  const response = await fetch(new URL(path, origin));
  assert.equal(response.status, 200);
  assert.ok((await response.text()).includes("bryandupressoir.vercel.app"));
}
const missing = await fetch(new URL("/missing-page", origin));
assert.equal(missing.status, 404);
console.log("Robots, sitemap and genuine 404 verified");
