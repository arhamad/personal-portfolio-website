# Design System Documentation

> A comprehensive design specification for recreating the Portfolio Website in Figma or any other design tool.

---

## Table of Contents

1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing Scale](#spacing-scale)
4. [Border Radius](#border-radius)
5. [Shadows](#shadows)
6. [Breakpoints](#breakpoints)
7. [Layout](#layout)
8. [Z-Index Scale](#z-index-scale)
9. [Transitions](#transitions)
10. [Component Specifications](#component-specifications)
11. [Page Layouts](#page-layouts)

---

## Color Palette

### Primary Colors

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Primary | `#3498db` | rgb(52, 152, 219) | Buttons, links, accents, interactive elements |
| Primary Dark | `#2980b9` | rgb(41, 128, 185) | Hover states, pressed states |

### Secondary Colors

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Secondary | `#2c3e50` | rgb(44, 62, 80) | Headings, navbar, footer background |
| Secondary Dark | `#1a252f` | rgb(26, 37, 47) | Hover states for secondary elements |

### Accent & Status

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Accent | `#e74c3c` | rgb(231, 76, 60) | Featured badges, alerts, call-to-action |
| Success | `#27ae60` | rgb(39, 174, 96) | Success messages, positive indicators |
| Error | `#e74c3c` | rgb(231, 76, 60) | Error states, validation messages |

### Text Colors

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Text | `#333333` | rgb(51, 51, 51) | Primary body text |
| Text Light | `#666666` | rgb(102, 102, 102) | Secondary text, descriptions |
| Text Muted | `#999999` | rgb(153, 153, 153) | Placeholders, hints, disabled text |

### Background Colors

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Background | `#ffffff` | rgb(255, 255, 255) | Main background, cards |
| Background Alt | `#f8f9fa` | rgb(248, 249, 250) | Alternate sections, subtle contrast |
| Background Dark | `#1a1a2e` | rgb(26, 26, 46) | Dark mode background (if applicable) |

### Utility Colors

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Border | `#e0e0e0` | rgb(224, 224, 224) | Input borders, dividers, separators |

---

## Typography

### Font Family

```
Primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
Headings: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
```

### Type Scale

| Style | Size (rem) | Size (px) | Weight | Line Height | Usage |
|-------|------------|-----------|--------|-------------|-------|
| H1 | 2.5rem | 40px | Bold (700) | 1.25 | Page titles, hero headlines |
| H2 | 2rem | 32px | Bold (700) | 1.25 | Section titles |
| H3 | 1.5rem | 24px | Bold (700) | 1.25 | Subsection titles, card titles |
| H4 | 1.25rem | 20px | Bold (700) | 1.25 | Small headings |
| Body Large | 1.125rem | 18px | Normal (400) | 1.75 | Lead paragraphs, subtitles |
| Body | 1rem | 16px | Normal (400) | 1.5 | Default body text |
| Small | 0.875rem | 14px | Normal (400) | 1.5 | Captions, helper text |
| XS | 0.75rem | 12px | Normal (400) | 1.5 | Labels, tags, badges |

### Font Weights

| Token | Value | Usage |
|-------|-------|-------|
| Normal | 400 | Body text, paragraphs |
| Medium | 500 | Buttons, nav links |
| Semibold | 600 | Emphasis, important text |
| Bold | 700 | Headings, strong emphasis |

### Line Heights

| Token | Value | Usage |
|-------|-------|-------|
| Tight | 1.25 | Headings |
| Base | 1.5 | Body text |
| Relaxed | 1.75 | Large body text, comfortable reading |

---

## Spacing Scale

| Token | rem | px | Usage |
|-------|-----|-----|-------|
| xs | 0.25rem | 4px | Tight gaps, inline spacing |
| sm | 0.5rem | 8px | Small gaps, padding |
| md | 1rem | 16px | Default spacing, container padding |
| lg | 1.5rem | 24px | Section padding, card content |
| xl | 2rem | 32px | Large gaps between elements |
| 2xl | 3rem | 48px | Section spacing |
| 3xl | 4rem | 64px | Large section margins |

### Visual Reference

```
xs:  [====]                    4px
sm:  [========]                8px
md:  [================]        16px
lg:  [========================] 24px
xl:  [================================] 32px
2xl: [================================================] 48px
3xl: [================================================================] 64px
```

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| sm | 4px | Small elements, tags, badges |
| md | 8px | Buttons, inputs, small cards |
| lg | 12px | Cards, modals, larger containers |
| full | 9999px | Pills, circular elements, avatars |

### Visual Reference

```
sm (4px):   ╭──╮    Subtle rounding
md (8px):   ╭────╮  Standard rounding
lg (12px):  ╭──────╮ Prominent rounding
full:       (      ) Pill/circular shape
```

---

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| sm | `0 1px 2px rgba(0, 0, 0, 0.05)` | Subtle elevation, navbar |
| md | `0 4px 6px rgba(0, 0, 0, 0.1)` | Cards, dropdowns |
| lg | `0 10px 15px rgba(0, 0, 0, 0.1)` | Hover states, modals |
| xl | `0 20px 25px rgba(0, 0, 0, 0.15)` | Prominent elements, overlays |

### Shadow Breakdown

| Token | X | Y | Blur | Spread | Color |
|-------|---|---|------|--------|-------|
| sm | 0 | 1px | 2px | 0 | rgba(0, 0, 0, 0.05) |
| md | 0 | 4px | 6px | 0 | rgba(0, 0, 0, 0.1) |
| lg | 0 | 10px | 15px | 0 | rgba(0, 0, 0, 0.1) |
| xl | 0 | 20px | 25px | 0 | rgba(0, 0, 0, 0.15) |

---

## Breakpoints

| Name | Min Width | Target Devices |
|------|-----------|----------------|
| Mobile | < 576px | Small phones |
| Small (sm) | ≥ 576px | Large phones, portrait tablets |
| Medium (md) | ≥ 768px | Tablets, small laptops |
| Large (lg) | ≥ 992px | Laptops, desktops |
| Extra Large (xl) | ≥ 1200px | Large desktops, wide screens |

### Figma Frame Sizes

| Device | Width | Height |
|--------|-------|--------|
| Mobile | 375px | 812px |
| Tablet | 768px | 1024px |
| Desktop | 1440px | 900px |

---

## Layout

### Container

| Property | Value |
|----------|-------|
| Max Width | 1200px |
| Padding (each side) | 16px |
| Total content width | 1168px (1200 - 32) |

### Grid System

```
12-column grid
Gutter: 24px (lg spacing)
Column width: calc((100% - (11 * 24px)) / 12)
```

### Common Layout Patterns

| Pattern | Columns | Gap |
|---------|---------|-----|
| Two Column | 1fr 1fr | 32px |
| Three Column | repeat(3, 1fr) | 24px |
| Sidebar + Content | 300px 1fr | 32px |
| Auto-fit Cards | auto-fit, minmax(300px, 1fr) | 24px |

---

## Z-Index Scale

| Token | Value | Usage |
|-------|-------|-------|
| Dropdown | 100 | Dropdown menus |
| Sticky | 200 | Sticky elements |
| Navbar | 300 | Fixed navigation |
| Modal | 400 | Modal dialogs, overlays |
| Tooltip | 500 | Tooltips, popovers |

---

## Transitions

| Token | Duration | Easing | Usage |
|-------|----------|--------|-------|
| Fast | 150ms | ease | Hover states, micro-interactions |
| Base | 300ms | ease | Standard transitions |
| Slow | 500ms | ease | Page transitions, complex animations |

---

## Component Specifications

### Button - Primary

```
┌─────────────────────────────────┐
│         Button Text             │
└─────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Padding | 8px 24px (vertical horizontal) |
| Font Size | 16px (1rem) |
| Font Weight | 500 (medium) |
| Border Radius | 8px |
| Background | #3498db |
| Text Color | #ffffff |
| Border | none |
| Cursor | pointer |
| Transition | 300ms ease |

**States:**
| State | Background | Text | Other |
|-------|------------|------|-------|
| Default | #3498db | #ffffff | - |
| Hover | #2980b9 | #ffffff | - |
| Active/Pressed | #2980b9 | #ffffff | scale(0.98) |
| Disabled | #3498db (50% opacity) | #ffffff | cursor: not-allowed |

---

### Button - Outline

| Property | Value |
|----------|-------|
| Padding | 8px 24px |
| Font Size | 16px |
| Font Weight | 500 |
| Border Radius | 8px |
| Background | transparent |
| Border | 2px solid #3498db |
| Text Color | #3498db |

**States:**
| State | Background | Border | Text |
|-------|------------|--------|------|
| Default | transparent | #3498db | #3498db |
| Hover | #3498db | #3498db | #ffffff |

---

### Card

```
┌─────────────────────────────────┐
│                                 │
│           [IMAGE]               │
│          200px height           │
│                                 │
├─────────────────────────────────┤
│  ┌───────────────────────────┐  │
│  │       Card Title          │  │
│  │    Body Large (18px)      │  │
│  │                           │  │
│  │  Description text here    │  │
│  │  in regular body (16px)   │  │
│  │                           │  │
│  │  [Tag] [Tag] [Tag]        │  │
│  └───────────────────────────┘  │
│         24px padding            │
└─────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Background | #ffffff |
| Border Radius | 12px |
| Shadow | 0 4px 6px rgba(0,0,0,0.1) |
| Image Height | 200px |
| Image Object-fit | cover |
| Content Padding | 24px |
| Transition | 300ms ease |

**Hover State:**
| Property | Value |
|----------|-------|
| Transform | translateY(-4px) |
| Shadow | 0 10px 15px rgba(0,0,0,0.1) |

---

### Input Field

```
┌─────────────────────────────────┐
│  Placeholder text...            │
└─────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Padding | 8px 16px |
| Font Size | 16px |
| Border | 1px solid #e0e0e0 |
| Border Radius | 8px |
| Background | #ffffff |
| Width | 100% |
| Transition | 300ms ease |

**States:**
| State | Border | Shadow |
|-------|--------|--------|
| Default | 1px solid #e0e0e0 | none |
| Focus | 1px solid #3498db | 0 0 0 3px rgba(52,152,219,0.1) |
| Error | 1px solid #e74c3c | 0 0 0 3px rgba(231,76,60,0.1) |

---

### Textarea

| Property | Value |
|----------|-------|
| Same as Input | (inherits all properties) |
| Min Height | 120px |
| Resize | vertical |

---

### Section Title

```
        Section Heading
        ════════════════
        Subtitle text here
```

| Property | Value |
|----------|-------|
| Alignment | center |
| Heading Size | 32px (H2) |
| Heading Weight | Bold (700) |
| Heading Color | #333333 |
| Underline Width | 60px |
| Underline Height | 3px |
| Underline Color | #3498db |
| Underline Margin | 16px from heading |
| Subtitle Size | 18px |
| Subtitle Color | #666666 |
| Subtitle Margin | 16px from underline |

---

### Navbar

```
┌───────────────────────────────────────────────────────────────────────┐
│  [Logo]     Home    About    Projects    Contact              [CTA]  │
│   40x40                                                              │
└───────────────────────────────────────────────────────────────────────┘
                              70px height
```

| Property | Value |
|----------|-------|
| Height | 70px |
| Position | fixed |
| Top | 0 |
| Width | 100% |
| Background | #ffffff |
| Shadow | 0 1px 2px rgba(0,0,0,0.05) |
| Z-index | 300 |
| Padding | 0 16px |

**Logo:**
| Property | Value |
|----------|-------|
| Size | 40px x 40px |
| Background | #3498db |
| Text Color | #ffffff |
| Border Radius | 8px |
| Font Weight | Bold |

**Nav Links:**
| Property | Value |
|----------|-------|
| Font Size | 16px |
| Font Weight | 500 |
| Color | #333333 |
| Hover Color | #3498db |
| Gap between links | 32px |

**Mobile (< 768px):**
- Hamburger menu appears
- Links stack vertically in dropdown

---

### Footer

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│      About          Quick Links        Contact                      │
│      ─────          ───────────        ───────                      │
│      Description    Home               email@example.com            │
│      text here      About              Location                     │
│                     Projects                                        │
│                     Contact                                         │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                   © 2024 All rights reserved                        │
└─────────────────────────────────────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Background | #2c3e50 |
| Padding | 48px 16px |
| Text Color | rgba(255, 255, 255, 0.7) |
| Heading Color | #ffffff |
| Link Hover | rgba(255, 255, 255, 1) |

---

### Tag/Badge

```
┌─────────┐
│  Label  │
└─────────┘
```

| Property | Value |
|----------|-------|
| Padding | 4px 12px |
| Font Size | 12px |
| Font Weight | 500 |
| Border Radius | 9999px (pill) |
| Background | rgba(52, 152, 219, 0.1) |
| Text Color | #3498db |

**Featured Badge:**
| Property | Value |
|----------|-------|
| Background | #e74c3c |
| Text Color | #ffffff |

---

### Avatar

| Property | Value |
|----------|-------|
| Size | 200px x 200px (about page) |
| Border Radius | 50% (circle) |
| Border | 4px solid #3498db |
| Object-fit | cover |

---

### Skill Card

```
┌─────────────────────────────────┐
│          [Icon]                 │
│                                 │
│       Category Name             │
│       ─────────────             │
│                                 │
│       • Skill 1                 │
│       • Skill 2                 │
│       • Skill 3                 │
│                                 │
└─────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Background | #ffffff |
| Border Radius | 12px |
| Padding | 24px |
| Shadow | 0 4px 6px rgba(0,0,0,0.1) |
| Text Align | center |
| Icon Size | 48px |
| Icon Color | #3498db |

---

### Timeline Item

```
        ●────────────────────────────────
        │
        │    Year
        │    ────
        │    Title
        │    Description text
        │
        ●────────────────────────────────
```

| Property | Value |
|----------|-------|
| Marker Size | 16px |
| Marker Background | #3498db |
| Marker Border | 3px solid #ffffff |
| Line Width | 2px |
| Line Color | #e0e0e0 |
| Content Gap | 24px from line |

---

## Page Layouts

### Home Page

```
┌─────────────────────────────────────────────────────────────────────┐
│                           NAVBAR (70px)                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│                                                                     │
│                         HERO SECTION                                │
│                   (Full viewport - 70px)                            │
│                                                                     │
│                      Headline (H1 - 40px)                           │
│                      Subtitle (18px)                                │
│                      [CTA Button]                                   │
│                                                                     │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│                     FEATURED PROJECTS                               │
│                                                                     │
│    ┌──────────┐    ┌──────────┐    ┌──────────┐                    │
│    │  Card    │    │  Card    │    │  Card    │                    │
│    │          │    │          │    │          │                    │
│    └──────────┘    └──────────┘    └──────────┘                    │
│                                                                     │
│    Grid: auto-fit, minmax(300px, 1fr), gap: 24px                   │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                           FOOTER                                    │
└─────────────────────────────────────────────────────────────────────┘
```

---

### About Page

```
┌─────────────────────────────────────────────────────────────────────┐
│                           NAVBAR                                    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│                        PAGE HEADER                                  │
│                        About Me                                     │
│                        ════════                                     │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│     ┌─────────┐                                                     │
│     │ Avatar  │     Name & Introduction                             │
│     │ 200x200 │     Paragraph text about yourself                   │
│     │         │     describing your background                      │
│     └─────────┘     and expertise.                                  │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│                          SKILLS                                     │
│                                                                     │
│    ┌──────────┐    ┌──────────┐    ┌──────────┐                    │
│    │ Category │    │ Category │    │ Category │                    │
│    │   1      │    │   2      │    │   3      │                    │
│    └──────────┘    └──────────┘    └──────────┘                    │
│                                                                     │
│    3-column grid, gap: 24px                                        │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│                        TIMELINE                                     │
│                                                                     │
│        ●───── 2024 ─────                                           │
│        │      Job Title                                            │
│        │      Company - Description                                │
│        │                                                           │
│        ●───── 2022 ─────                                           │
│        │      Previous Role                                        │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                           FOOTER                                    │
└─────────────────────────────────────────────────────────────────────┘
```

---

### Projects Page

```
┌─────────────────────────────────────────────────────────────────────┐
│                           NAVBAR                                    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│                        PAGE HEADER                                  │
│                        Projects                                     │
│                        ════════                                     │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│    [All] [Web] [Mobile] [Other]    (Filter tabs)                   │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│    ┌──────────┐    ┌──────────┐    ┌──────────┐                    │
│    │  Image   │    │  Image   │    │  Image   │                    │
│    │──────────│    │──────────│    │──────────│                    │
│    │  Title   │    │  Title   │    │  Title   │                    │
│    │  Desc    │    │  Desc    │    │  Desc    │                    │
│    │  [Tags]  │    │  [Tags]  │    │  [Tags]  │                    │
│    └──────────┘    └──────────┘    └──────────┘                    │
│                                                                     │
│    ┌──────────┐    ┌──────────┐    ┌──────────┐                    │
│    │  ...     │    │  ...     │    │  ...     │                    │
│    └──────────┘    └──────────┘    └──────────┘                    │
│                                                                     │
│    Grid: auto-fit, minmax(320px, 1fr), gap: 24px                   │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                           FOOTER                                    │
└─────────────────────────────────────────────────────────────────────┘
```

---

### Contact Page

```
┌─────────────────────────────────────────────────────────────────────┐
│                           NAVBAR                                    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│                        PAGE HEADER                                  │
│                        Contact Me                                   │
│                        ═══════════                                  │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│    ┌─────────────────┬───────────────────────────────────────┐     │
│    │                 │                                       │     │
│    │  Contact Info   │           Contact Form                │     │
│    │                 │                                       │     │
│    │  📧 Email       │    ┌─────────────────────────────┐   │     │
│    │  📍 Location    │    │ Name                        │   │     │
│    │  📱 Phone       │    └─────────────────────────────┘   │     │
│    │                 │    ┌─────────────────────────────┐   │     │
│    │  Social Links   │    │ Email                       │   │     │
│    │  [🔗] [🔗] [🔗] │    └─────────────────────────────┘   │     │
│    │                 │    ┌─────────────────────────────┐   │     │
│    │                 │    │ Subject                     │   │     │
│    │                 │    └─────────────────────────────┘   │     │
│    │                 │    ┌─────────────────────────────┐   │     │
│    │                 │    │ Message                     │   │     │
│    │                 │    │                             │   │     │
│    │                 │    │                             │   │     │
│    │                 │    └─────────────────────────────┘   │     │
│    │                 │    [        Send Message        ]    │     │
│    │                 │                                       │     │
│    └─────────────────┴───────────────────────────────────────┘     │
│                                                                     │
│    Grid: 1fr 2fr, gap: 32px                                        │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                           FOOTER                                    │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Figma Setup Recommendations

### Creating the Design System in Figma

1. **Create a new Figma file** named "Portfolio Design System"

2. **Set up Color Styles:**
   - Primary/Default, Primary/Dark
   - Secondary/Default, Secondary/Dark
   - Text/Default, Text/Light, Text/Muted
   - Background/Default, Background/Alt
   - Status/Success, Status/Error
   - Border

3. **Set up Text Styles:**
   - Heading/H1, H2, H3, H4
   - Body/Default, Body/Large
   - Caption/Small, Caption/XS

4. **Create Components:**
   - Button/Primary, Button/Outline (with variants for states)
   - Input/Default (with variants for states)
   - Card (auto-layout enabled)
   - Tag/Badge
   - Navbar (with responsive variants)
   - Footer

5. **Set up Auto Layout:**
   - Use 8px grid alignment
   - Spacing values from the spacing scale
   - Enable "Clip content" for overflow handling

6. **Create Frames:**
   - Mobile: 375 x 812
   - Tablet: 768 x 1024
   - Desktop: 1440 x 900

---

## Source Files Reference

All design tokens are defined in:
```
src/styles/_variables.scss
```

Component styles can be found in their respective component folders:
```
src/app/shared/components/[component-name]/[component-name].scss
src/app/core/components/[component-name]/[component-name].scss
```

---

*Document generated from Portfolio Website codebase - January 2026*
