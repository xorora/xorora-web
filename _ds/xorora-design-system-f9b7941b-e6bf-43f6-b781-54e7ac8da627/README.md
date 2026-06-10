# Xorora Design System

> **Engineered for your Ambition** — *Your AI Development Partner*

Xorora is a technology company positioned as an **AI development partner**: it builds and ships AI-driven software for ambitious clients. The brand voice is **quiet, modern, and professional** — confident engineering rather than loud marketing. The visual identity is built on a single, sharp idea: a geometric **"X" monogram** that fuses a forward-pointing chevron (momentum, "next") with a layered pyramid (foundation, growth, ascent).

This repository is the canonical source for designing Xorora interfaces, websites, and social/marketing assets on-brand.

---

## Brand at a glance

| | |
|---|---|
| **Name** | Xorora |
| **Tagline** | Engineered for your Ambition |
| **Descriptor** | Your AI Development Partner |
| **Core palette** | Ink black `#08080D` + Brand Indigo `#464C9F` |
| **Secondary accent** | Tangerine `#F26B21` (the complement of the indigo) |
| **Atmosphere** | Deep Navy `#010C28` (dark/hero surface, from the banner) |
| **Type** | Poppins (display + body/UI) · JetBrains Mono (code) |
| **Personality** | Engineered, calm, precise, ambitious, trustworthy |

### On the secondary color
The brief noted Xorora has **only black and a shade of blue** and asked for a complementary secondary that isn't another blue. The system uses **Tangerine `#F26B21`** — the *true complement* of the brand indigo (opposite it on the color wheel), so it creates deliberate, high-contrast pop rather than a random new hue. It reads as warm, energetic, and "engineered" — a natural fit for "Engineered for your ambition."

- **Tangerine `#F26B21`** (`--tangerine-500`; use `--tangerine-400 #FF8A3D` on dark) — the secondary accent. Used **sparingly**: eyebrows, links, focus rings, highlight/"new" chips, small accent marks, and ONE accent per layout. Never a large fill.
- **Indigo `#464C9F`** remains the **primary** — buttons, key fills, structural color. Tangerine never replaces it; it spotlights against it.
- **Deep Navy `#010C28`** is the atmosphere/dark-mode surface. Its hero "bloom" keeps the banner's cool blue glow — the warm tangerine accent sits on top of that cool field, which is what makes it sing.

This gives Xorora a distinctive warm-on-cool signature while keeping black + indigo as the anchors.

---

## Source materials provided

These were the inputs used to build this system. Stored under `assets/` (renamed for filesystem safety):

| Original upload | Stored as | What it is |
|---|---|---|
| `Group (2) (1).png` | `assets/logo-mark-full.png` | Primary "X" logo mark — black chevron + indigo pyramid/triangle, transparent bg |
| `Group 8 (1).png` | `assets/logo-mark-gray.png` | Logo mark in light-gray + indigo, for dark backgrounds |
| `OUTGROW YOUR COMPETITION (5).png` | `assets/banner-ambition.png` | Wide marketing banner: deep-navy concentric-wave background, "ENGINEERED FOR YOUR AMBITION / YOUR AI DEVELOPMENT PARTNER", white XORORA wordmark |
| `Watermrk.png` | `assets/watermark.png` | Square "X" watermark badge on black |
| `svg (1).svg` | `assets/logo-wordmark-light.svg` | **Official XORORA wordmark** (mark + lettering), black on white |
| `svg.svg` | `assets/logo-wordmark-dark.svg` | **Official XORORA wordmark**, light on dark |
| *(derived)* | `assets/logo-wordmark-{light,dark}-transparent.svg` | The official wordmarks with the background removed + viewBox tightly cropped — **use these in layouts** |
| *(derived)* | `assets/logo-mark-white.png` | White + indigo mark, generated for dark surfaces |

No codebase, Figma file, or live site was provided — the system is reconstructed from the brand assets above plus the stated positioning. If you have the website code or a Figma library, share it and this system can be made pixel-exact.

---

## Logo notes

The mark is an **"X" built from two opposing forms**:
- **Left / lower-left:** a bold chevron `›` with a notch cut into it — direction, forward motion, "next step."
- **Upper-right:** a solid indigo parallelogram blade.
- **Lower-right:** a stack of horizontal bars tapering to a point — a **pyramid / ascent / signal-strength** motif suggesting growth and structured progress.

In the wordmark **XORORA**, the leading "X" *is* the mark; the lettering is set in Poppins (the brand typeface). **Always use the official supplied SVG** — `assets/logo-wordmark-light-transparent.svg` on light surfaces, `assets/logo-wordmark-dark-transparent.svg` on dark. Do not reconstruct the wordmark from the mark + live text.

**Clear space:** keep at least the height of one chevron-arm around the mark. **Minimum size:** 24px tall (icon), 96px wide (wordmark). Never recolor the mark outside Ink / Indigo / White / Gray. Never add shadows or gradients to the mark itself.

---

## Content fundamentals

*See the "CONTENT FUNDAMENTALS" section below — covers tone, casing, and voice.*

<!-- CONTENT_FUNDAMENTALS -->
### Voice & tone
Xorora speaks like a **senior engineer who is also a trusted partner**: precise, calm, and quietly confident. It never oversells. It favors concrete capability over hype.

- **Perspective:** Address the reader as **"you" / "your"** ("Engineered for *your* ambition"). Refer to the company as **"we"**. This frames Xorora as a partner working alongside the client.
- **Casing:** Display headlines and the tagline are frequently set in **ALL CAPS with wide letter-spacing** (the banner sets the standard: "ENGINEERED FOR YOUR AMBITION"). Body copy is sentence case. Eyebrows/labels are uppercase. Avoid Title Case Everywhere — it reads dated.
- **Sentence length:** Short, declarative. One idea per line. Marketing headlines are 2–6 words; supporting lines are a single clause.
- **Tone words:** engineered, build, ship, partner, ambition, scale, precision, momentum. Lean on verbs of *making* ("we build", "we ship", "we engineer").
- **Avoid:** exclamation marks, buzzword stacking ("synergistic next-gen disruption"), emoji in product/marketing surfaces, jokey copy. Quiet > loud.
- **Emoji:** Not part of the brand. Do not use emoji in headlines, UI, or marketing. (Acceptable only in informal internal/social replies if ever.)

**Example copy (on-brand):**
- Hero: *"Engineered for your ambition."* / sub: *"Your AI development partner — from prototype to production."*
- Feature eyebrow: `WHAT WE BUILD` → headline: *"AI that ships."*
- CTA buttons: *"Start a project"*, *"Book a build review"*, *"See our work"*.
- Section: *"We don't sell software. We engineer outcomes."*

<!-- VISUAL_FOUNDATIONS -->
## Visual foundations

**Overall vibe.** Cool, precise, architectural. Deep-navy/black canvases with a single confident indigo accent and lots of negative space. The aesthetic is "engineered" — sharp angles echoing the chevron, restrained color, generous breathing room. Think aerospace/fintech sobriety, not playful startup.

**Color usage.**
- Two anchors do most of the work: **Ink `#08080D`** and **Indigo `#464C9F`**. White provides air.
- **Dark surfaces are the signature look** — the hero/atmosphere mode uses Deep Navy `#010C28` (`[data-theme="dark"]`) with a cool blue bloom carried over from the banner. The warm tangerine accent pops against it.
- **Tangerine `#F26B21`** is the highlight/secondary — eyebrows, links, focus rings, "new" chips, a single accent per layout. Use it like a spark, not a fill. (`--tangerine-400` on dark.)
- Light surfaces use the **cool slate neutral scale** (`--slate-*`) — never warm grays.
- Roughly 60% neutral / 30% ink-or-navy / 10% indigo-or-tangerine.

**Typography.** Poppins for everything — display and body (geometric, engineered; used UPPERCASE + wide tracking for hero/eyebrow, sentence case for copy). It is the confirmed Xorora brand typeface, self-hosted from /fonts. JetBrains Mono for code, metrics, and technical labels — reinforcing the "development partner" identity. See `colors_and_type.css` for the full scale.

**Spacing.** 4px base unit; generous section padding (96–128px on web). Components breathe. Tokens `--sp-1`…`--sp-10`.

**Backgrounds.** Two registers: (1) **clean light** — solid slate-50 / white, no texture; (2) **navy atmosphere** — deep navy with the banner's *concentric-wave / radial-glow* motif (a soft off-center light bloom). Use the wave motif sparingly and only behind hero/feature sections, never behind body copy. No noisy gradients, no purple-to-pink, no mesh blobs.

**Geometry & motifs.** The chevron and the layered-bar pyramid are the recurring shapes. Use sharp 45° angles, parallelograms, and thin horizontal "signal bars" as decorative accents and dividers. Corners on UI elements are *moderately* rounded (see radii) — but brand geometry/decoration stays sharp.

**Corner radii.** Buttons & inputs `--r-md (10px)`; cards `--r-lg (16px)`; pills/tags `--r-pill`; small chips `--r-sm`. Nothing fully pill-shaped except tags and avatars. Decorative brand shapes are not rounded.

**Cards.** White (or navy-800 in dark) surface, 1px `--border` slate-200, `--r-lg` radius, `--shadow-sm` at rest → `--shadow-md` on hover. No heavy drop shadows. Optional 1px top indigo hairline or left chevron accent for emphasis cards.

**Shadows / elevation.** Cool, low-spread, tinted with the ink color (never pure black, never colored except the deliberate `--glow-indigo` on hero CTAs/feature tiles). Five-step scale `--shadow-xs`…`--shadow-xl`.

**Borders.** Hairline 1px slate-200 on light, `rgba(255,255,255,0.10)` on dark. Strong variant for inputs/dividers needing emphasis.

**Hover states.** Buttons darken one indigo step (`--accent` → `--accent-hover`). Cards lift (shadow-sm → shadow-md) and may nudge up 2px. Links shift to tangerine / underline. Subtle, never bouncy.

**Press states.** Buttons go to `--accent-press` and scale to ~0.98. Quick and tactile.

**Focus.** Always visible: `--shadow-focus` (3px tangerine ring at 30% alpha). Accessibility is non-negotiable for a serious tech brand.

**Animation.** Restrained and engineered. Durations 150–250ms for UI, up to 600ms for hero reveals. Easing `cubic-bezier(0.4,0,0.2,1)` (standard) or `cubic-bezier(0.16,1,0.3,1)` (decelerate for entrances). Fades + small translates (8–16px). No bounce, no spring overshoot, no spin. The hero glow may breathe slowly (8–12s).

**Transparency & blur.** Sparing. Glass effect (backdrop-blur) only on sticky headers over imagery and modal scrims. Scrims: `rgba(2,6,15,0.6)`.

**Imagery vibe.** Cool-toned, deep blues and blacks, high contrast, often with a directional light source / glow (like the banner). Abstract/technical over literal. If photographic: desaturated cool, no warm filters. Concentric-wave and light-bloom textures are on-brand.

---

## Iconography

*See "ICONOGRAPHY" below.*

<!-- ICONOGRAPHY -->
No proprietary icon font shipped with the brand assets. The system standardizes on **[Lucide](https://lucide.dev)** (loaded from CDN) as the closest match to Xorora's character: **thin, geometric, 2px stroke, square-ish, no fills** — consistent with the sharp engineered geometry of the mark.

- **Style:** outline only, 1.75–2px stroke, 24px default grid, `currentColor`. Never use filled or duotone icon styles.
- **Color:** inherit text color; use Indigo or Tangerine only for active/selected icons.
- **Sizing:** 16 / 20 / 24px in UI; 32–48px for feature tiles.
- **Brand glyphs:** the chevron and pyramid-bars are the brand's own "icons" for decorative/feature use — prefer the real logo assets in `assets/` over redrawing.
- **Emoji:** not used. **Unicode symbols:** only neutral functional ones (arrows ›, →) where an icon font isn't available.
- **Substitution flag:** Lucide is a *best-match substitution*, not a confirmed brand asset. If Xorora has an official icon set, drop it into `assets/icons/` and update this section.

---

## Index — what's in this system

| Path | Contents |
|---|---|
| `README.md` | This file — brand context, voice, visual foundations, iconography |
| `colors_and_type.css` | All design tokens: color scales, semantic vars, type scale, spacing, radii, shadows, dark theme |
| `SKILL.md` | Agent-Skill manifest (for use in Claude Code) |
| `assets/` | Logos (full / gray / white), banner, watermark, copied icons |
| `preview/` | Small HTML cards powering the Design System tab (colors, type, spacing, components, brand) |
| `ui_kits/website/` | Marketing website UI kit — hero, nav, features, CTA, footer (React/JSX + index.html) |
| `ui_kits/social/` | Social-media template kit — square + landscape post layouts (React/JSX + index.html) |

### Font note
**Poppins** is the confirmed Xorora brand typeface — the user supplied the full weight family, now self-hosted under `/fonts` and wired via `@font-face` in `colors_and_type.css`. **JetBrains Mono** (code/metrics) loads from Google Fonts CDN as a complementary technical mono; swap in a licensed mono if Xorora standardizes one.
