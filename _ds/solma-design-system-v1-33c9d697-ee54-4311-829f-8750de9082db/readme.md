# SolMa — Design System

**SolMa is an AI community manager that lives inside WhatsApp.** Small business owners send a photo and a voice note; SolMa generates the post, retouches the image, and publishes to Instagram and Facebook. No new app. No dashboard. No learning curve.

- **Audience:** French small-business owners — bakeries, restaurants, salons, florists, freelancers — who run their own social media with no time and no expertise.
- **Interface:** 100% WhatsApp. Nothing to install, no dashboard, zero onboarding.
- **V1 platforms:** Instagram + Facebook.
- **Human-in-the-loop:** every post is shown to the owner for approval before publishing.
- **Business model:** monthly SaaS subscription (\~29–79 €/month per business).
- **Key constraint:** relies on WhatsApp Business API access.

> **Sources:** This system was created from the SolMa product brief only — no codebase, Figma, or prior brand assets were supplied. All visual foundations (palette, type, logo, components) are **original** to this system. If SolMa has existing brand assets or a codebase, share them and this system will be reconciled to them.

---

## The idea behind the brand

**"Sol" = sun.** SolMa brings sunshine to a corner shop's online presence. The system is warm, human, and artisanal — cream paper, a sunset-coral accent, fresh sage for "published/live", and deep espresso ink. The logo is a trendy, wonky high-contrast wordmark (no mascot). It should feel like morning light on a market stall, never like cold enterprise SaaS.

---

## CONTENT FUNDAMENTALS

How SolMa writes. The product talks to non-technical shop owners, in **French**, like a friendly, capable assistant who already knows the trade.

- **Language:** French first. Warm, plain, encouraging. No jargon ("communauté", not "engagement funnel").
- **Person:** SolMa says **"je"** and speaks to the owner as **"vous"** (respectful but warm). Owners are addressed by first name ("Bonjour Camille ☀️").
- **Tone:** reassuring, low-effort, can-do. The recurring promise is *less work*: "Envoyez une photo, on s'occupe du reste." "Trois gestes. Zéro corvée." "10 secondes le matin."
- **Casing:** sentence case everywhere — headings, buttons, labels. Never ALL-CAPS except tiny eyebrow labels (letter-spaced).
- **Emoji:** **yes, sparingly and warmly** — ☀️ 🥐 🎉 👍 ✨. One per message/headline at most. Emoji reflect the trade (a croissant for a bakery) and the mood (sun for the brand). Never decorative emoji walls.
- **Captions SolMa writes** are short, sensory, local, and end with a soft nudge: *"Croissants tout chauds, sortis du four à 7h 🥐 Venez vite, ça part vite ! 📍 12 rue du Marché."* Hashtags are few, lowercase, relevant (#boulangerie #faitmaison #Lyon).
- **Buttons:** verbs, action-first — "Valider & publier", "Commencer sur WhatsApp", "Choisir Boutique". One coral high-intent button per view.
- **Numbers/units:** French formatting — "29 €/mois", "14 jours d'essai". Stats are concrete and modest, never slop ("+312 % de visibilité", "6 j/7 de présence").
- **Vibe in one line:** *un coup de soleil sur votre boutique* — sunny, effortless, on your side.

---

## VISUAL FOUNDATIONS

- **Palette:** warm and sunny. **Marigold `--sun-400 #F0A23D`** is the primary brand color; **sunset coral `--coral-500 #E85D3A`** is the secondary/CTA accent (one per view); **fresh sage `--sage-500 #2E9E78`** means published / success / live (a warm nod to messaging, deliberately *not* WhatsApp green); **espresso ink `--ink-900 #241B14`** is text and the single dark surface. Neutrals are warm **cream/sand**, never cold gray. Dark text sits on marigold; white sits on coral and sage. See `tokens/colors.css`.
- **Backgrounds:** warm cream paper (`--bg-page #FCF8F1`) is the resting state; white cards float on it. **No photographic or gradient page backgrounds.** The only gradients used are (a) the soft radial "sun glow" behind the hero and (b) a single marigold→coral CTA panel. One dark espresso band per long page provides rhythm — used once, never repeated.
- **Logo:** typographic wordmark — **"SolMa" set in Fraunces Black** with the wonky/high-contrast axes (`opsz 144, SOFT 70, WONK 1`), mixed case, coral on cream. Trendy and editorial; **no mascot or icon**. Use the `.solma-logo` class (`--cream` / `--ink` modifiers) or the `.solma-mark` square "S" monogram for compact/app-icon contexts. See `brand.css` and `assets/logo-wordmark*.png`.
- **Type:** **Fraunces** (Black, wonky) is the **logo & hero-display** face; **Bricolage Grotesque** (700–800) for UI headings — characterful, friendly; **Hanken Grotesk** (400–700) for all UI and body — warm and highly legible; **JetBrains Mono** for timestamps, metadata, prices-in-tables and code. Headlines are tight (`-0.02em`, line-height ~1.05). Body is 16px / 1.5. See `tokens/typography.css`.
- **Spacing:** 4px base grid (`--space-*`). Generous section padding (`--gutter-section` 80px). Card gutter 24px.
- **Corner radii:** soft and friendly — inputs/buttons **12px**, cards **16px**, feature panels/modals **24–32px**, pills/avatars full-round. Nothing sharp. See `tokens/radius-shadow.css`.
- **Borders:** hairline `1px` in warm sand (`--border-subtle #E2D0B6`); stronger controls use `--border-strong`. The highlighted pricing tier uses a 2px marigold border.
- **Shadows:** soft and **warm-tinted** (espresso alpha, never neutral gray), layered `--shadow-xs…xl`. Primary CTAs add a marigold **`--glow-sun`**; coral CTAs a `--glow-coral`. No hard or colored drop-shadows otherwise.
- **Cards:** white surface, 1px sand border, soft warm shadow (`--shadow-md`), 16px radius, 24px padding. Variants: `warm` (cream), `sun` (pale marigold), `inverse` (espresso). Interactive cards lift 2px on hover.
- **Hover states:** primary/coral darken one step (sun-400→500, coral-500→600); ghost/soft controls fill with cream; cards lift + deepen shadow. \~120ms.
- **Press states:** buttons translate **down 1px** to the press shade (no shrink-bounce). Tap targets ≥44px (md size).
- **Motion:** gentle and quick. `--ease-out` for entrances, `--dur-fast 120ms` for interactions, `--dur-base 200ms` for toggles. Fades and short slides; **no bouncy/cartoon springs**, no infinite decorative loops (except the small WhatsApp "typing" dots).
- **Transparency / blur:** used only for the sticky nav (cream at 86% + 10px backdrop blur) and time-stamp scrims over photos. Otherwise surfaces are solid.
- **Imagery vibe:** warm, natural-light, appetizing — food, craft, shopfronts. The system ships **placeholder blocks** (warm gradients + icon) where real photos go; replace them with the owner's real photos for production. Retouched-photo placeholders skew golden; raw ones skew neutral-tan.

---

## ICONOGRAPHY

- **System:** **[Lucide](https://lucide.dev)** — clean, rounded, 2px stroke. It matches the brand's friendly, humanist feel. Loaded from CDN (`https://unpkg.com/lucide@latest`) in the kits; a small `Ico` helper renders any icon by name.
- **Why Lucide:** no in-house icon set existed; Lucide's rounded 2px stroke is the closest off-the-shelf match to SolMa's soft, warm geometry. **(Substitution — flag for review.)** If SolMa adopts a bespoke icon set, swap the CDN link and the `Ico` helper.
- **Stroke & size:** 2px stroke; 18–22px inline, ≥24px for feature/step icons. Don't fill Lucide icons; keep them outline. Tint with brand colors (`--sun-600`, `--coral-500`, `--sage-600`) on tinted chips.
- **Brand mark:** the logo is **typographic** (`.solma-logo`, Fraunces Black wonky) — there is no drawn mascot. Where a compact square mark is needed (WhatsApp avatar, app icon, favicon), use the **`.solma-mark`** "S" monogram (coral square, cream letter).
- **Platform marks:** Instagram / Facebook use Lucide's `Instagram` / `Facebook` glyphs as lightweight stand-ins. **Replace with official brand marks** for any public-facing/production use (platform brand guidelines apply).
- **Emoji:** used as *content* inside SolMa's messages and captions (☀️ 🥐 🎉), never as UI iconography. See Content Fundamentals.
- **No hand-rolled SVG icons** beyond the logo — use Lucide.

---

## INDEX / manifest

**Root**

- `styles.css` — the single entry point consumers link. `@import`s only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter so this system works inside Claude Code.

**`tokens/`** — CSS custom properties (all reachable from `styles.css`)

- `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `radius-shadow.css`

**`assets/`** — brand marks

- `logo-wordmark.png` (coral on cream) · `logo-wordmark-dark.png` (cream on ink) · `app-icon.png` (512² coral square + "S")
- The live logo is CSS, not a file: use `.solma-logo` / `.solma-mark` from `brand.css` (preferred — crisp & recolorable). PNGs are convenience exports for slides/external use.

**`components/`** — reusable React primitives (namespace `window.SolMaDesignSystem_*`)

- `actions/` — **Button**, **IconButton**
- `forms/` — **Input**, **Switch**
- `display/` — **Card**, **Badge**, **Avatar**
- `feedback/` — **Banner**
- Each has `.jsx` + `.d.ts` + `.prompt.md`; one `*.card.html` demo per folder.

**`ui_kits/`** — full-surface recreations

- `whatsapp/` — **the product**: SolMa's post-approval flow inside a WhatsApp chat.
- `landing/` — the marketing site (hero → how-it-works → proof → pricing → CTA).

**`guidelines/cards/`** — foundation specimen cards for the Design System tab (colors, type, spacing, brand).

---

### Caveats / open questions

- No existing brand or code was provided — **everything here is an original proposal.** Share real assets to reconcile.
- **Fonts** are Google Fonts (Fraunces for logo/display, Bricolage Grotesque for headings, Hanken Grotesk for body, JetBrains Mono) loaded via `@import`. If you need self-hosted binaries or different typefaces, say so.
- **Icons** are Lucide (substitution); **Instagram/Facebook marks** are placeholders — swap official marks for production.
- **Photos** are placeholders — provide real shop imagery.
