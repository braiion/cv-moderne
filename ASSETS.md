# Shipping Asset Provenance

This inventory covers raster assets shipped from `public/` and `src/app/`. It was verified against the current working tree on 2026-08-28. The scan found exactly two raster files; the SVG files in `public/` are vectors and are outside this raster inventory.

## `public/Profil.png`

- **SHA-256:** `6BF456A0E30957B008833EAC9D117A73973A4AE11A21AFC954CD6EB0467F31F6`
- **Usage:** Bryan Dupressoir's portrait in the hero build-board identity block. It is imported by `src/components/features/Hero.tsx` and rendered with Next.js `Image`.
- **Source and provenance:** personal portrait supplied directly by Bryan Dupressoir, the subject and repository owner. The current tracked history records the file in commit `9ac8e0bf7440794549436f20c011c7cb19396800` dated 2026-08-21 (`feat: redesign portfolio and improve PDF export`).
- **Permission / license basis:** Bryan Dupressoir owns or is authorized to use the portrait and has authorized its use in this portfolio/CV repository. No third-party or open-source license is asserted for reuse outside that authorization.
- **Transformation disclosure:** the image was not AI-generated and was not transformed in this redesign.

## `src/app/favicon.ico`

- **SHA-256:** `2B8AD2D33455A8F736FC3A8EBF8F0BDEA8848AD4C0DB48A2833BD0F9CD775932`
- **Usage:** application favicon discovered automatically by the Next.js App Router from `src/app/favicon.ico` and served as browser/site identity.
- **Source and provenance:** incumbent project asset authored or owned by the repository author. It has been present since the initial commit `684f84775557e23d574696e93193ab28381ce7bf` dated 2026-03-27 (`feat: CV Moderne - Interactive portfolio with Next.js 16`).
- **Permission / license basis:** repository-author-owned project identity asset, authorized for use with this portfolio. No external license or third-party attribution is required by the evidence on hand.
- **Transformation disclosure:** the favicon was not modified in this redesign.

## Maintenance Rule

If either raster is replaced or transformed, update this file in the same change with the new SHA-256, source, transformation method, usage, and permission basis. Add every new raster shipped from `public/` or `src/app/` before release.
