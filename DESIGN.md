---
name: "Bryan Dupressoir — Swiss Poster CV"
description: "The CV as an International Typographic Style poster: strict grid, massive grotesque, one frank cobalt field."
colors:
  paper: "#f6f7f9"
  paper-raised: "#ffffff"
  ink: "#0c0d10"
  muted: "#4a4f5a"
  line: "#d6d9e0"
  cobalt: "#2340ff"
  cobalt-hover: "#1a30d6"
  engine: "#0c0d10"
  engine-muted: "#a9aebb"
  dark-paper: "#0b0c0f"
  dark-paper-raised: "#121419"
  dark-ink: "#f2f3f6"
  dark-muted: "#a5abb8"
  dark-line: "#262a33"
  dark-cobalt: "#2a44f5"
  dark-cobalt-text: "#8c9bff"
  dark-engine: "#15171d"
typography:
  display:
    fontFamily: "Archivo (wdth 72), Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 7.2vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.035em"
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
  none: "0"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  column-gap: "1.5rem"
  section: "clamp(4rem, 8vw, 7rem)"
  head-to-evidence: "clamp(2.5rem, 5vw, 4.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.4rem"
    height: "3.25rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.4rem"
  button-paper:
    backgroundColor: "#ffffff"
    textColor: "{colors.cobalt-hover}"
    rounded: "{rounded.none}"
  status-flap:
    backgroundColor: "{colors.cobalt}"
    textColor: "#ffffff"
    typography: "{typography.data}"
    rounded: "{rounded.none}"
---

# Design System: Bryan Dupressoir — Swiss Poster CV

## 1. Overview

**Creative North Star: "The poster that ships."** The portfolio-CV reads like an International Typographic Style poster: a visible 12-column grid, very large condensed grotesque headlines, heavy ink rules, and a single cobalt colour that owns whole fields rather than decorating details. It replaced (October 2026) the earlier green "mineral notebook" look, which the owner found dated.

Density alternates: a dense first viewport (promise, actions, identity field, product loop), quiet ruled sections, then a fully drenched cobalt contact band that closes the page. Proof stays before chronology: hero → BonneOccaz case and RAG/CAG module → experience → skills → education → contact.

**Key Characteristics:**
- Square corners everywhere; structure comes from 2px ink rules and 1px hairlines, not shadows or cards.
- Cobalt is structural: hero identity field, primary action, active RAG step, status flaps, contact band.
- Lists are typographic (slash-separated stacks, ruled skill lists), never chips.
- Mono appears only for data: periods, years, states, technical labels.

## 2. Colors

Committed strategy: neutral paper and ink plus one saturated cobalt carrying full regions.

### Primary
- **Cobalt** (#2340ff; dark theme field #2a44f5): identity field beside the hero, primary buttons, status flaps, the accent RAG node, the contact band. White text on cobalt measures about 6.4:1.
- **Cobalt Text** (#2340ff light / #8c9bff dark): links, role line, list markers, years. Never used as a large text field on dark.

### Neutral
- **Paper** (#f6f7f9 / dark #0b0c0f): page ground. Cool, not cream.
- **Paper Raised** (#ffffff / dark #121419): the education panel only.
- **Ink** (#0c0d10 / dark #f2f3f6): text, 2px section rules, ghost button outline.
- **Muted** (#4a4f5a / dark #a5abb8): secondary reading text, ≥7:1 on paper.
- **Line** (#d6d9e0 / dark #262a33): 1px row dividers.
- **Engine** (#0c0d10 / dark #15171d): the RAG/CAG diagram panel, with muted #a9aebb.

### Named Rules
**The Field Rule.** Cobalt fills regions or marks state; it is never a gradient, glow or tint wash.
**The On-Cobalt Rule.** Secondary text on cobalt is white at 86% opacity minimum; anything lower fails contrast.

## 3. Typography

**Display / body:** Archivo variable (self-hosted via `next/font`, `wdth` axis loaded). **Data:** JetBrains Mono 500.

**Character:** one grotesque family stretched across widths, condensed and heavy for poster headlines, normal width for reading, the way a Swiss poster uses one face at many sizes.

### Hierarchy
- **Display** (800, wdth 72, clamp(2.75rem, 7.2vw, 6rem), lh 0.94, -0.035em, word-spacing 0.06em): hero promise, product name, contact headline.
- **Headline** (760, wdth 78, clamp(2.25rem, 5vw, 4.5rem), lh 0.98): section titles, max 16ch.
- **Title** (760, wdth 80, 1.5–2.125rem): experience titles, evidence title.
- **Body** (400, 1.0625rem, lh 1.6): reading copy, max 54–60ch.
- **Label** (700, 0.8125rem, uppercase, 0.06em): "Fonctionnalités", "Stack", "Boucle produit".
- **Data** (JetBrains Mono 500, 0.6875–0.875rem): periods, years, states.

### Named Rules
**The Width-Not-Font Rule.** Hierarchy changes width, weight and size within Archivo; no second display face.
**The Data-Only Mono Rule.** Mono marks dates, states and technical labels, never prose.

## 4. Elevation

Flat. No shadows. Depth comes from field contrast (cobalt field, ink engine panel) and rules. The engine panel is sticky beside the case story from 960px.

## 5. Components

### Buttons
- **Shape:** square rectangle, 3.25rem min height, 0.85rem 1.4rem padding, 2px border slot.
- **Primary:** cobalt fill, white text; hover #1a30d6; press scale 0.97.
- **Ghost:** 2px ink outline; hover inverts to ink fill.
- **On cobalt:** paper button (white fill, cobalt text, hover ink) and line button (2px white 34% outline, hover white).
- **Focus:** 2px cobalt-text outline, 3px offset (white on the cobalt band).

### Status flaps
Mono uppercase text on a cobalt rectangle ("PRODUIT EN BÊTA", "EN PROD"). On load they settle character by character once (split-flap cascade, ~26ms per character); reduced motion shows the final text immediately. Screen readers get the final text only.

### Hero identity field
Cobalt column (4 of 12 columns from 960px): grayscale portrait with a 20% cobalt multiply, uppercase condensed name, location, then the five-step product loop as ruled rows; the "ship" row inverts to white with a status flap.

### Lists
- **Slash list:** inline items separated by cobalt slashes (stack, experience tags).
- **Feature list:** ruled rows with a small cobalt square marker under a 2px ink rule.
- **Mission list:** short cobalt dash markers.

### Navigation
Solid paper bar, 4rem high, 1px bottom line; cobalt "BD" square; links underline in cobalt (2px, scaleX transition) when active or hovered; ink "contact" button. Under 840px a menu button opens a full-width ruled list including the CV download; Escape and outside press close it.

## 6. Do's and Don'ts

### Do:
- **Do** start every section with a 2px ink rule and an asymmetric 7/4 headline-description split from 720px.
- **Do** keep proof (BonneOccaz, RAG/CAG module) before chronology.
- **Do** keep factual copy in `src/lib/cv-data.ts`, shared with the PDF.
- **Do** honour reduced motion (hero rise and flap cascade collapse) and increased contrast (stronger lines and muted text).

### Don't:
- **Don't** round corners, add drop shadows or turn rows into cards.
- **Don't** add eyebrow/kicker labels above headings.
- **Don't** use cobalt as a gradient, glow or background wash.
- **Don't** name a specific AI vendor or model in public copy; say "IA", "LLM" or "agents de code IA".
