---
name: "Bryan Dupressoir — Sapphire CV"
description: "The CV as a confident product page: full-bleed sapphire hero, condensed grotesque, ocean display type, jade only for signals, continuous (squircle) corners."
colors:
  paper: "#eef6ff"
  paper-raised: "#ffffff"
  ink: "#06204f"
  muted: "#3d5578"
  line: "#cfddee"
  saphir: "#0042ac"
  saphir-2: "#00337f"
  ocean: "#00d3fb"
  jade: "#83fd80"
  jade-hover: "#a6ffa3"
  on-jade: "#062a1a"
  deep: "#021a47"
  ice: "#eaf6ff"
  engine: "#021a47"
  engine-muted: "#a9bedc"
  dark-paper: "#04112b"
  dark-paper-raised: "#0a1d42"
  dark-ink: "#eef6ff"
  dark-muted: "#a9bedc"
  dark-line: "#1c3463"
  dark-saphir: "#003a98"
  dark-cobalt-text: "#00d3fb"
  dark-engine: "#010b1f"
typography:
  display:
    fontFamily: "Archivo (wdth 68), Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.4rem, 8.4vw, 8.25rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Archivo (wdth 78), Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    fontWeight: 760
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Archivo (wdth 80), Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2.125rem)"
    fontWeight: 760
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Archivo (wdth 100), Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    letterSpacing: "0.06em"
  data:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 500
rounded:
  2xs: "0.1875rem"
  xs: "0.375rem"
  sm: "0.625rem"
  md: "0.875rem"
  lg: "1.25rem"
  xl: "1.75rem"
  2xl: "2.5rem"
  pill: "999px"
  circle: "50%"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  column-gap: "1.5rem"
  section: "clamp(4rem, 8vw, 7rem)"
  head-to-evidence: "clamp(2.5rem, 5vw, 4.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.jade}"
    textColor: "{colors.on-jade}"
    rounded: "{rounded.md}"
    padding: "0.85rem 1.4rem"
    height: "3.25rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.85rem 1.4rem"
  button-paper:
    backgroundColor: "{colors.jade}"
    textColor: "{colors.on-jade}"
    rounded: "{rounded.md}"
  status-flap:
    backgroundColor: "{colors.jade}"
    textColor: "{colors.on-jade}"
    typography: "{typography.data}"
    rounded: "{rounded.xs}"
  card:
    backgroundColor: "{colors.ice}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
  panel:
    rounded: "{rounded.xl}"
  chip:
    rounded: "{rounded.pill}"
---

# Design System: Bryan Dupressoir — Sapphire CV

## 1. Overview

**Creative North Star: "A product page with depth."** The portfolio-CV opens on a full-bleed sapphire field with a layered composition (tilted portrait on an ocean sphere, a floating product-loop card, a spinning jade availability sticker, the surname as an outlined watermark), then settles into calm ice-blue reading sections. It replaced (November 2026) the flat "Swiss poster" version with square corners and a single cobalt.

Proof stays before chronology: hero → stack band → BonneOccaz case and RAG/CAG module → experience → skills → education → sapphire contact band.

**Key Characteristics:**
- Three colours with fixed jobs: sapphire fills fields, ocean carries display type and data, jade marks the one action or state that matters.
- Continuous corners everywhere, from one radius scale; circles only for dots, rings and the sphere.
- Depth comes from layering and offset shadows in the hero, not from blur on every surface.
- Lists stay typographic (slash-separated stacks, ruled skill lists), never chips.
- Mono appears only for data: periods, years, states, technical labels.

## 2. Colors

### Primary
- **Saphir** (#0042ac; dark #003a98): hero field, contact band, active RAG node, structural accents. White text on saphir ≈ 8.7:1.
- **Ocean** (#00d3fb): third line of the hero headline, fact numbers, stack band, links on dark. Display and data only, never long reading text on light paper.
- **Jade** (#83fd80, text #062a1a): primary buttons, availability dot and sticker, "EN PROD" state. Never a background region.

### Neutral
- **Paper** (#eef6ff / dark #04112b): page ground for reading sections.
- **Paper Raised** (#ffffff / dark #0a1d42): the education panel.
- **Ink** (#06204f / dark #eef6ff): text and 2px section rules.
- **Muted** (#3d5578 / dark #a9bedc): secondary reading text, ≥7:1 on paper.
- **Deep** (#021a47): offset shadows, stack band, current-step row.

### Named Rules
**The One-Signal Rule.** Jade appears on at most one action per view plus state markers.
**The On-Saphir Rule.** Secondary text on saphir is white at 84% opacity minimum.

## 3. Typography

**Display / body:** Archivo variable (`wdth` axis). **Data:** JetBrains Mono 500.

- **Display** (900, wdth 68, clamp(3.4rem, 8.4vw, 8.25rem), lh 0.86, uppercase): hero headline in three lines — solid, outline, ocean with deep offset shadow.
- **Headline** (760, wdth 78): section titles, max 16ch.
- **Title** (760, wdth 80): experience titles, evidence title.
- **Body** (400, 1.0625rem, lh 1.6): reading copy, max 54–60ch.
- **Label** (700, 0.8125rem, uppercase, 0.06em).
- **Data** (JetBrains Mono 500): periods, years, states.

## 4. Shape

One radius scale, exposed as `--radius-*` tokens in `globals.css` and mirrored in `rounded` above. No literal radius values outside circles.

| Token | Value | Squircle value | Used by |
|---|---|---|---|
| 2xs | 0.1875rem | — | list markers |
| xs | 0.375rem | — | status flaps, case status |
| sm | 0.625rem | 0.875rem | BD mark, utility buttons, photo caption, current loop row, skip link |
| md | 0.875rem | 1.25rem | buttons, nav contact, RAG flow nodes, cache box |
| lg | 1.25rem | 1.75rem | floating cards, fact cards |
| xl | 1.75rem | 2.5rem | portrait, engine panel, education panel |
| 2xl | 2.5rem | 3.5rem | contact band top edge |
| pill | 999px | — | availability chip |

**The Continuous-Corner Rule.** Where `corner-shape: squircle` is supported, every tokenised element uses it and the scale steps up (right column) so the softness matches the plain-radius fallback. Nested shapes stay concentric: an inner radius is never larger than its container's.

## 5. Elevation

The hero is the only layered zone: deep offset shadows (portrait, primary button), soft drop shadows on floating cards, a radial ocean glow and fine grain. Reading sections stay flat, structured by rules and the raised education panel.

## 6. Components

### Buttons
- **Shape:** `md` radius, 3.25rem min height, 0.85rem 1.4rem padding, 2px border slot.
- **Primary:** jade fill, #062a1a text, deep 0.35rem offset; hover lifts 2px and lightens.
- **Ghost:** 2px outline in the local text colour; hover inverts.
- **Focus:** 2px outline, 3px offset, follows the radius.

### Status flaps
Mono uppercase on jade ("EN PROD") or saphir ("PRODUIT EN BÊTA"), `xs` radius. They settle character by character once; reduced motion shows the final text.

### Hero composition
Tilted portrait (`xl`, ocean multiply, deep offset), ocean sphere and dashed ring, product-loop card (`lg`), jade availability sticker, outlined surname watermark, then fact cards (`lg`) and the stack band.

### Navigation
Glass paper bar (84% paper, blur), 4rem high; saphir "BD" mark (`sm`); ink contact button (`md`).

## 7. Do's and Don'ts

### Do:
- **Do** take every radius from the scale; add a token before adding a new shape.
- **Do** keep proof (BonneOccaz, RAG/CAG module) before chronology.
- **Do** keep factual copy in `src/lib/cv-data.ts`, shared with the PDF.
- **Do** honour reduced motion and increased contrast.

### Don't:
- **Don't** use sharp corners on boxed elements or mix ad-hoc radii.
- **Don't** use grids, tech patterns or generic "AI" backgrounds; the watermark is the surname.
- **Don't** use jade as a region fill or more than once per view for actions.
- **Don't** name a specific AI vendor or model in public copy; say "IA", "LLM" or "agents de code IA".
