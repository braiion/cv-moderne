---
name: "Bryan Dupressoir Product Builder CV"
description: "A product field notebook that leads with shipped proof and the build loop."
colors:
  mineral-canvas: "#f5f4f0"
  graphite-ink: "#222725"
  graphite-muted: "#555e5a"
  graphite-quiet: "#616964"
  chalk-panel: "#fdfdfb"
  mineral-panel-muted: "#eceee9"
  mineral-line: "#dcded7"
  mineral-line-strong: "#bdc4bb"
  signal-green: "#24634e"
  signal-green-hover: "#194d3b"
  signal-lime-soft: "#e1ece3"
  signal-ink: "#244d3b"
  ink-board: "#202925"
  ink-board-raised: "#28322d"
  board-paper: "#f5f6f2"
  board-muted: "#bdc9c0"
  live-lime: "#bcd9c2"
  build-lime: "#bcd9c2"
  build-ink: "#203c2a"
  white: "white"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI Variable', 'Segoe UI', sans-serif"
    fontSize: "clamp(2.65rem, 5.1vw, 4.25rem)"
    fontWeight: 720
    lineHeight: 1.06
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI Variable', 'Segoe UI', sans-serif"
    fontSize: "clamp(2.15rem, 4.4vw, 3.6rem)"
    fontWeight: 720
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI Variable', 'Segoe UI', sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.15rem)"
    fontWeight: 720
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI Variable', 'Segoe UI', sans-serif"
    fontSize: "clamp(1rem, 1.4vw, 1.1rem)"
    fontWeight: 400
    lineHeight: 1.72
    letterSpacing: "normal"
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI Variable', 'Segoe UI', sans-serif"
    fontSize: "0.8rem"
    fontWeight: 750
    lineHeight: 1
    letterSpacing: "normal"
  mono-label:
    fontFamily: "'Cascadia Code', 'SFMono-Regular', Consolas, monospace"
    fontSize: "0.68rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  tag: "0.58rem"
  icon: "0.72rem"
  utility: "0.78rem"
  control: "0.86rem"
  row: "0.88rem"
  shell: "1.15rem"
  board: "1.7rem"
  panel: "1.75rem"
  pill: "999px"
spacing:
  xs: "0.42rem"
  sm: "0.58rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.5rem"
  2xl: "2rem"
  section-gap: "4rem"
  section-mobile: "6rem"
  section-desktop: "8rem"
components:
  button-primary:
    backgroundColor: "{colors.signal-green}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.78rem 1.05rem"
  button-primary-hover:
    backgroundColor: "{colors.signal-green-hover}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.78rem 1.05rem"
  button-secondary:
    backgroundColor: "color-mix(in srgb, var(--panel) 70%, transparent)"
    textColor: "{colors.graphite-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.78rem 1.05rem"
  utility-button:
    backgroundColor: "color-mix(in srgb, var(--panel) 78%, transparent)"
    textColor: "{colors.graphite-muted}"
    rounded: "{rounded.utility}"
    size: "2.75rem"
  availability-chip:
    backgroundColor: "color-mix(in srgb, var(--signal-soft) 48%, var(--panel))"
    textColor: "color-mix(in srgb, var(--signal) 80%, var(--ink))"
    rounded: "{rounded.pill}"
    padding: "0.48rem 0.72rem"
  product-card:
    backgroundColor: "{colors.chalk-panel}"
    textColor: "{colors.graphite-ink}"
    rounded: "{rounded.panel}"
    padding: "2rem 1.4rem"
  build-board:
    backgroundColor: "{colors.ink-board}"
    textColor: "{colors.board-paper}"
    rounded: "{rounded.board}"
    padding: "1rem"
  capability-tag:
    backgroundColor: "{colors.mineral-panel-muted}"
    textColor: "{colors.graphite-muted}"
    rounded: "{rounded.tag}"
    padding: "0.42rem 0.58rem"
  navigation-shell:
    backgroundColor: "color-mix(in srgb, var(--panel) 82%, transparent)"
    textColor: "{colors.graphite-ink}"
    rounded: "{rounded.shell}"
    padding: "0.45rem 0.55rem"
  context-cache:
    backgroundColor: "{colors.build-lime}"
    textColor: "{colors.build-ink}"
    rounded: "{rounded.row}"
    padding: "0.85rem"
---

# Design System: Bryan Dupressoir Product Builder CV

## Overview

**Creative North Star: "The Product Field Notebook"**

The interface feels like a working product notebook made presentable for a hiring conversation: mineral paper outside, graphite and ink work surfaces inside, and a controlled signal green marking only what is live, actionable, current, or verified. It is editorial rather than ornamental, with broad reading space, short high-impact headlines, visible construction logic, and enough asymmetry to feel authored without slowing the scan.

The workbench is the thesis. The first reading path introduces the builder and his operating loop before conventional résumé chronology; BonneOccaz then becomes the concrete proof, including its deliberately focused RAG/CAG module, before experience and capability rows verify breadth. Download and contact actions remain in the reading path. Motion is tactile and restrained, themes are equally intentional, and accessibility preferences override atmosphere.

**Key Characteristics:**

- Mineral light canvas and chalk panels with graphite text and rules.
- Ink workbench surfaces for product proof, architecture, and contact moments.
- Signal green reserved for functional state, focus, actions, and live delivery cues.
- Native system typography with compressed editorial display rhythm and monospace operational labels.
- Asymmetric desktop compositions that collapse into a direct single-column mobile sequence.
- Small lifts and press states that make controls feel handled, never theatrical.

## Colors

The palette combines cool mineral neutrals with near-black green ink; signal green is deliberately rare and semantic.

### Primary

- **Signal Green** (`#24634e`): primary actions, role emphasis, links, active timeline markers, and keyboard focus in the light theme.
- **Signal Green Hover** (`#194d3b`): the darker handled state of primary actions.
- **Soft Signal Sage** (`#e1ece3`): low-emphasis status fields and icon grounds where a solid action would be too loud.
- **Signal Ink** (`#244d3b`): readable dark text on soft signal surfaces.
- **Live Sage** (`#bcd9c2`) and **Build Sage** (`#bcd9c2`): operational live/current indicators confined to ink boards.

### Neutral

- **Mineral Canvas** (`#f5f4f0`): the light-theme page field.
- **Graphite Ink** (`#222725`): primary light-theme text and the compact brand tile.
- **Graphite Muted** (`#555e5a`) and **Graphite Quiet** (`#616964`): explanatory text and lower-priority metadata.
- **Chalk Panel** (`#fdfdfb`) and **Mineral Panel Muted** (`#eceee9`): reading panels, section bands, tags, and quiet interactive states.
- **Mineral Line** (`#dcded7`) and **Mineral Line Strong** (`#bdc4bb`): structural rules, card borders, and stronger section starts.
- **Ink Board** (`#202925`) and **Ink Board Raised** (`#28322d`): product-loop, architecture, and contact surfaces.
- **Board Paper** (`#f5f6f2`) and **Board Muted** (`#bdc9c0`): primary and secondary content on ink boards.
- **Night Theme:** the same semantic roles switch to canvas (`#161a18`), ink (`#f2f3ef`), muted (`#b8c2ba`), quiet (`#a9b4ac`), panel (`#1d2320`), panel-muted (`#272e29`), line (`#353f37`), line-strong (`#556259`), signal (`#bcd9c2`), signal-hover (`#cee8d2`), signal-soft (`#2d4235`), signal-ink (`#d6e9da`), board (`#212a25`), board-raised (`#29342d`), and board-muted (`#bdc9c0`).

### Named Rules

**The Functional Signal Rule.** Signal green marks availability, action, focus, live state, or delivered work; it is not a decorative wash.

**The Ink-Surface Rule.** Dark ink surfaces carry product operations and proof, not generic brand decoration.

## Typography

**Display Font:** `-apple-system` (with `BlinkMacSystemFont`, `Segoe UI Variable`, `Segoe UI`, sans-serif)

**Body Font:** `-apple-system` (with `BlinkMacSystemFont`, `Segoe UI Variable`, `Segoe UI`, sans-serif)
**Label/Mono Font:** `Cascadia Code` (with `SFMono-Regular`, `Consolas`, monospace)

**Character:** The system stack keeps the CV immediate, local, and crisp while variable weight and tight negative tracking give headlines an editorial product voice. Monospace is reserved for indices, dates, system state, language controls, and architecture labels.

### Hierarchy

- **Display** (720, `1.06`, `-0.04em`): the opening product promise uses `clamp(2.65rem, 5.1vw, 4.25rem)` and is limited to roughly 20 characters per line.
- **Headline** (720, `1.08`, `-0.04em`): major section statements use `clamp(2.15rem, 4.4vw, 3.6rem)` and are limited to roughly 20 characters per line.
- **Title** (720, `1.05`, `-0.03em`): experience identities and other secondary anchors use `clamp(1.5rem, 3vw, 2.15rem)`.
- **Body** (400, `1.72`, normal tracking): hero explanation and long-form summaries use `clamp(1rem, 1.4vw, 1.1rem)`; explanatory measures stay near 65–70 characters.
- **Label** (750, `0.8rem`): primary controls and compact action copy.
- **Mono Label** (700, `0.68rem`, `0.08em`, uppercase where operational): dates, indices, live state, and build-system labels.

### Named Rules

**The Editorial Measure Rule.** Keep display lines short and balanced, and keep explanatory copy within the observed 65–70-character measure.

**The Operational Mono Rule.** Monospace communicates process or system state; it never replaces the reading face for ordinary prose.

## Layout

The core container is capped at `72rem`. The hero uses a large promise beside the live build board from `960px`; the case study splits story and RAG/CAG architecture at the same threshold. Section introductions and résumé rows become asymmetric two-column grids from `720px`, while navigation exposes its full link set from `840px`. Primary action groups and the proof line expand from `520px`; below that, the design becomes a direct single-column reading sequence and the context flow stacks vertically.

Section rhythm is intentionally generous: shells use `6rem` vertical padding on small screens and `6rem` from `720px`, with `2.75rem` between a section heading and its main evidence. The page grid wash is spaced at `6rem`; it fades before it can compete with the work. Horizontal gutters grow from `1.25rem` to `2rem`, and reading copy remains bounded while boards and proof structures take the available width.

**The Proof-Before-Chronology Rule.** The build loop and BonneOccaz evidence precede the conventional résumé timeline; new compositions preserve that narrative order.

**The Asymmetry-with-Alignment Rule.** Desktop columns may carry unequal weight, but headings, rules, and evidence share the same `72rem` frame and collapse without reordering essential information.

## Elevation & Depth

The system is flat at the reading layer and lifted at the product layer. Rules and tonal changes organize most sections; shadows are reserved for the translucent navigation shell, major product boards, the case-study panel, the contact board, and responsive hover feedback. This produces depth without turning every container into a floating card.

### Shadow Vocabulary

- **Navigation Glass** (`0 14px 40px rgba(24, 34, 29, 0.08)`): quiet separation for the fixed translucent navigation shell.
- **Reading Panel** (`0 24px 65px rgba(36, 47, 40, 0.12)`; dark theme `0 28px 75px rgba(0, 0, 0, 0.32)`): the BonneOccaz case-study container.
- **Workbench** (`0 32px 80px rgba(12, 19, 15, 0.32)`): the live product build board.
- **Contact Board** (`0 30px 75px rgba(9, 15, 11, 0.28)`): the final dark action surface.
- **Signal Action** (`0 12px 28px color-mix(in srgb, var(--signal) 22%, transparent)`; hover `0 17px 34px color-mix(in srgb, var(--signal) 25%, transparent)`): action-specific feedback rather than ambient decoration.

### Named Rules

**The Flat-Until-Handled Rule.** Ordinary reading surfaces rely on tone and rules; pronounced elevation belongs to workbenches, primary actions, and handled states.

**The Tactile Restraint Rule.** Hover lifts stop at `2px` for controls and no movement for the non-interactive build board; press states use a small `0.94–0.97` scale and yield entirely to reduced-motion preferences.

## Shapes

Corners form a deliberate hierarchy rather than one universal radius: compact tags use `0.58rem`; icons and utility controls cluster around `0.72–0.78rem`; action controls and board rows use `0.86–0.88rem`; the navigation shell uses `1.15rem`; and major boards use `1.7–1.75rem`. Statuses are pills (`999px`) and live markers are circular. One-pixel mineral or translucent-white borders retain the notebook's constructed feel.

**The Corner Hierarchy Rule.** Radius grows with object scale and permanence; tags should never look as soft as a major product board.

## Components

### Buttons

- **Shape:** compact tactile rectangle with a `0.86rem` radius, `3.15rem` minimum height, and `0.78rem 1.05rem` padding.
- **Primary:** signal-green fill, white text in light mode and signal-ink text in dark mode, plus a tight signal-colored shadow.
- **Hover / Focus:** hover darkens the signal, lifts `2px`, and expands the shadow; keyboard focus uses a `3px` mixed-signal outline with `3px` offset; press scales to `0.97`.
- **Secondary:** translucent panel fill with a strong mineral border; hover moves border and text to signal green and lifts `2px`.
- **Light / Dark:** the contact board pairs a paper-filled action with a translucent white bordered action, keeping both on the ink surface.

### Chips

- **Availability:** soft mixed-signal fill, signal-tinted border, pill silhouette, and a live dot with a restrained halo.
- **Status:** solid soft-signal pill with signal-ink text.
- **Capability Tags:** muted panel fill, one-pixel mineral line, `0.58rem` radius, compact semibold type, and no hover treatment because they are descriptive.

### Cards / Containers

- **Product Case:** chalk panel, mineral border, `1.75rem` corners, responsive story padding from `2rem 1.4rem` to `3.2rem`, and a single reading-panel shadow.
- **Build Board:** ink surface, `1.7rem` corners, `1rem` padding, translucent white internal rules, and a deeper workbench shadow; it remains stationary while reading.
- **Context Engine:** an ink grid surface embedded in the case study; its nodes use translucent borders and the current cache/result uses build sage.

### Navigation

- **Shell:** fixed, centered, and capped at `72rem`; a translucent panel with `1.15rem` corners, a one-pixel mixed mineral line, `22px` blur, and restrained shadow.
- **Links:** compact semibold labels move from graphite-muted to graphite-ink on a muted-panel ground for hover and active location.
- **Utilities:** square `2.75rem` controls with a `0.78rem` radius; hover strengthens the border and press scales to `0.94`.
- **Responsive:** the full link set and contact action appear from `840px`; below that, a separate stacked shell carries the mobile navigation.

### Build Loop

The signature component is a numbered five-step workbench. Each row is an ink-raised container with a monospace index, grounded icon tile, concise label, and optional state. The shipped/current row reverses into build sage with build ink and a compact dark state pill, making delivery visible before chronology.

### Motion and Preferences

Control transitions use `120–160ms ease-out`; theme color transitions use `280ms ease-out`; Framer Motion uses a no-bounce `0.4s` spring for the same tactile grammar. Reduced motion collapses all animation and transition durations to `0.01ms`. Reduced transparency removes navigation blur, and increased contrast promotes key borders to the current ink color.

## Do's and Don'ts

### Do:

- **Do** lead with the product promise and build loop, then use BonneOccaz and its focused RAG/CAG flow as concrete evidence before résumé chronology.
- **Do** preserve the semantic color mapping across light and dark themes, including readable signal-ink text on soft or bright signal surfaces.
- **Do** use graphite rules, tonal fields, and generous section rhythm for structure before adding shadow.
- **Do** keep display copy short, explanatory measures near 65–70 characters, and operational metadata in the mono face.
- **Do** preserve visible keyboard focus and all reduced-motion, reduced-transparency, and increased-contrast accommodations.

### Don't:

- **Don't** use signal green as a decorative background wash or a general brand gradient.
- **Don't** turn every résumé item into a floating card; timeline and capability content remain row-based and editorial.
- **Don't** put technology lists before product proof or inflate the focused RAG/CAG module into an unverified large-scale AI claim.
- **Don't** introduce display fonts, ornamental serif pairings, or icon-font dependencies; the system is native, direct, and self-contained.
- **Don't** add parallax, bounce, or long entrance choreography; motion communicates handling and state only.


## Refinement — September 2026

The product notebook identity is preserved. Warm off-white reading surfaces and
graphite text reduce the former all-green cast; sage replaces fluorescent lime
on dark boards. Accent color remains semantic. The system font stack is retained
for continuity and platform legibility. Existing factual content and section order
remain the source of truth.

- Hero: 7rem top inset; 20ch heading at 2.65–4.25rem and 1.06 leading; role at
  1–1.12rem with a 48ch maximum. Remove the former fixed 980px minimum height.
- Section headings: 2.15–3.6rem at 1.08 leading. Evidence follows after 2.75rem.
- Supporting web text: generally at least 0.75rem; experience and project bullets
  are 0.95rem with 1.6–1.65 leading. The compact shipped-state label is 0.625rem.
- Portrait: 76 × 84px, with a responsive image source sized to its actual width.
- Shadows: restrained directional shadows on boards (20px / 48px, 14% opacity),
  project panel (12px / 36px, 6%), and contact panel (16px / 40px, 12%).
- Non-interactive product board has no hover animation or permanent compositor
  hint. Primary hero controls disable spring press motion under reduced motion.
- Solid actions use a dedicated on-signal token (white in light mode, #203c2a in
  dark mode). Soft dark badges use #d6e9da on #2d4235, independently of buttons.
- Mobile: the shipped-state label moves below its description; status text can
  wrap without shrinking its dot. Maintain 44px utility controls.
- PDF: one-page A4 layout and selectable text remain; header subtitle uses sage
  instead of unrelated blue. Ink, muted text, green and rules match the web.

The mechanical detector reports advisory differences against the former type
ramp and existing radius scale. The sizes above document the intentional reading
improvements; the persisted generated sidecar has not been regenerated.


## Recruitment flow and content refinement — September 2026

- Primary hero action downloads the CV; the secondary action opens BonneOccaz.
- Navigation uses real language links: `/` and `/en`. Mobile navigation includes
  contact and PDF access, closes with Escape or an outside press, and returns
  focus to its trigger on Escape. A visible-on-focus skip link reaches the main.
- Separate the automotive advisor from the platform help assistant. The diagram
  is explicitly illustrative. Native disclosure exposes corpus, implementation,
  safeguards and the limited scope of evaluation without dominating the scan.
- Evidence uses two simple editorial rows, followed by an explicit confidentiality
  note. No information about the second product beyond the agreed public wording.
- Detail text is 0.875rem / 1.65; evidence body is 0.95rem / 1.65. Mobile evidence
  becomes one column under 720px. Existing semantic colors remain authoritative.
- The generated 1200×630 share card follows the warm paper/graphite/green palette.
- PDF content includes the chronology note and confidentiality, sets its document
  language, uses the generation month, and rejects printable-area overflow.
