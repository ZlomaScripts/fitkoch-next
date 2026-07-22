---
version: alpha
name: FitKoch Athletic Luxury Pro Max
description: High-performance, athletic luxury design system for 1-on-1 fitness coaching by Ivan Koch (@fitkochivan).
colors:
  primary: "#F97316"
  on-primary: "#0B0F19"
  secondary: "#B4FF00"
  on-secondary: "#0B0F19"
  surface: "#0B0F19"
  on-surface: "#F8FAFC"
  surface-card: "#131B2E"
  on-surface-card: "#F1F5F9"
  surface-card-hover: "#1C2A44"
  neutral-muted: "#94A3B8"
  border-dim: "#243350"
typography:
  headline-display:
    fontFamily: Barlow Condensed
    fontSize: 64px
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Barlow Condensed
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Barlow Condensed
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0em
  body-lg:
    fontFamily: Barlow
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0em
  body-md:
    fontFamily: Barlow
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0em
  body-sm:
    fontFamily: Barlow
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
  label-lg:
    fontFamily: Barlow Condensed
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Barlow Condensed
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.08em
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  section: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: 16px
  button-primary-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: 16px
  card-base:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-surface-card}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-hover:
    backgroundColor: "{colors.surface-card-hover}"
    textColor: "{colors.on-surface-card}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  page-container:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-lg}"
    padding: 32px
  metadata-tag:
    backgroundColor: "{colors.border-dim}"
    textColor: "{colors.neutral-muted}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: 8px
---

# FitKoch Athletic Luxury Pro Max

## Overview

The FitKoch design system merges **Athletic High-Performance Precision** with **Contemporary Obsidian Luxury**. Designed for elite 1-on-1 online fitness and nutrition coaching under coach Ivan Koch (@fitkochivan), the visual identity eliminates generic AI layouts in favor of striking geometric structure, high-contrast neon accents, and immersive interactive components. Every interaction feels responsive, authoritative, and empowering.

## Colors

The color palette anchors on deep obsidian layers intersected by high-voltage kinetic accents that guide user focus toward transformation goals and onboarding actions.

- **Primary (#F97316):** Vibrant Energy Orange, serving as the primary catalyst for calls-to-action, active states, and key transformation metrics.
- **On-Primary (#0B0F19):** Deep obsidian ink ensuring maximum contrast and legibility over primary orange surfaces.
- **Secondary (#B4FF00):** Electric Cyber Lime, utilized for secondary highlights, success confirmations, and dynamic badges.
- **On-Secondary (#0B0F19):** Deep obsidian ink over electric lime elements.
- **Surface (#0B0F19):** Deep Obsidian foundation that provides an ultra-premium, glare-free dark canvas across all viewport dimensions.
- **On-Surface (#F8FAFC):** Crisp, high-contrast white for primary narrative headings and critical text.
- **Surface-Card (#131B2E):** Structured navy-obsidian container background with elevated depth for content modularity.
- **On-Surface-Card (#F1F5F9):** Bright slate-white typography ensuring crystal-clear reading comfort within structural cards.
- **Surface-Card-Hover (#1C2A44):** Responsive elevated card background that responds tactilely to user hover interactions.
- **Neutral-Muted (#94A3B8):** Subtle silver tone for secondary metadata, captions, and supporting technical descriptors.
- **Border-Dim (#243350):** Architectural border tint establishing clear container boundaries without visual clutter.

## Typography

Typography pairs two distinct typefaces to convey both athletic intensity and effortless scientific readability.

- **Headlines (Barlow Condensed):** Bold, condensed, and commanding geometric structure used across all major section headers, metrics, and callouts to evoke stadium energy and focus.
- **Body & Technical (Barlow):** Clean, highly legible sans-serif for long-form methodology explanations, FAQ responses, and interactive wizard steps.
- **Labels:** Uppercase, tightly tracked descriptors that provide instant clarity on interactive controls and status indicators.

## Layout

The layout implements a **Modular Asymmetric Grid** with strict spacing discipline. Sections breathe with generous padding (`section: 96px` vertically on desktop, transitioning to `64px` on mobile), while internal card layouts maintain clear 8px step multiples (`md: 16px`, `lg: 24px`, `xl: 32px`). Content containment ensures every visual block directs the user's eye naturally toward the interactive onboarding wizard.

## Elevation & Depth

Rather than relying on generic blurred drop shadows, depth is achieved through **Tonal Layering**, subtle glowing borders, and controlled ambient luminescence (`box-shadow: 0 0 35px rgba(249, 115, 22, 0.2)` on active elements). Glassmorphism is applied selectively only where functional layering requires context preservation.

## Shapes

Shapes follow **Architectural Sharpness** with calibrated corner softening. Interactive cards utilize `rounded: lg (16px)` to feel approachable yet substantial, while buttons and badges employ `rounded: md (8px)` and `rounded: sm (4px)` for crisp, engineered responsiveness.

## Components

The design system standardizes high-impact UI components to ensure seamless visual harmony across the entire application:

- **Buttons:** Bold, uppercase, high-contrast elements with tactile hover elevation and glow transitions.
- **Cards:** Asymmetric and modular containers with micro-border highlights (`1px solid border-dim`) that illuminate to primary orange or cyber lime on hover.
- **Interactive Wizard (Google Forms Replacement):** Multi-step progression interface with clear visual indicators, immediate feedback states, and one-click data capture.
- **Transformation Sliders & Tabs:** Interactive filtering controls and visual comparison containers built for instant responsiveness.

## Do's and Don'ts

- **Do** maintain strict high-contrast readability across all dark surfaces using `on-surface` and `on-surface-card` tokens.
- **Do** utilize `primary` orange and `secondary` lime strategically to guide attention toward interactive inputs and transformation proof.
- **Don't** introduce low-contrast gray text on dark backgrounds or generic unstyled form inputs.
- **Don't** mix incompatible border radii or clutter the interface with unstructured decorative shapes.
