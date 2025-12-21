# Issue Tracker Summary (Maintainer Notes)

This document summarizes the **open + closed issues** for this fork and scans the previous maintainer’s repository for **Quill 2 / modern React–relevant** themes (discounting issues that appear specific to **Quill 1.x**).

Generated from the GitHub Issues API (issues only; PRs excluded) on **2025-12-21**.

---

## VaguelySerious/react-quill (this repo)

Issue tracker: [VaguelySerious/react-quill/issues](https://github.com/VaguelySerious/react-quill/issues)

### Counts

- **Open**: 14
- **Closed**: 23

---

## Open issues (14) — what users are hitting right now

- **#50 — Long list numbering breaks at higher indices (Roman > 16, decimal > 99)**  
  Likely list marker / counter / indentation behavior at larger values.  
  <https://github.com/VaguelySerious/react-quill/issues/50>

- **#49 — Copy/paste list loses alignment (`ql-align-*`)**  
  Clipboard import/export mismatch when alignment classes exist on list items.  
  <https://github.com/VaguelySerious/react-quill/issues/49>

- **#45 — `lodash.isequal@4.5.0` deprecation warning**  
  Request to replace `lodash.isequal` (e.g. with `node:util` deep equality).  
  <https://github.com/VaguelySerious/react-quill/issues/45>

- **#44 — “Invalid Quill container” (React 19 context; modules/options mutation)**  
  Typically lifecycle/ref timing or module reconfiguration triggering init against a missing DOM node.  
  <https://github.com/VaguelySerious/react-quill/issues/44>

- **#39 — Bold formatting not working**  
  Sparse report; could be toolbar config, formats whitelist, or theme CSS.  
  <https://github.com/VaguelySerious/react-quill/issues/39>

- **#37 — Multiple instances interfere with each other (中文)**  
  Cross-instance DOM/id collisions or shared module/toolbar state.  
  <https://github.com/VaguelySerious/react-quill/issues/37>

- **#36 — Bullet lists exposed as numbered lists / `<ol>` rendering expectation mismatch**  
  Quill list DOM semantics vs consumer expectations (notably when parsing HTML).  
  <https://github.com/VaguelySerious/react-quill/issues/36>

- **#30 — Custom toolbar formatting partially broken since v3.4.0**  
  Headings toggles, undoing formatting, and list (un)indent problems reported.  
  <https://github.com/VaguelySerious/react-quill/issues/30>

- **#25 — `quill-mention` selection doesn’t insert into editor**  
  Likely module integration / `insertEmbed` call path unable to access the correct instance.  
  <https://github.com/VaguelySerious/react-quill/issues/25>

- **#17 — Losing focus on `onChange`**  
  Controlled value updates / rerenders resetting selection or remounting the editor.  
  <https://github.com/VaguelySerious/react-quill/issues/17>

- **#16 — TypeScript: importing `Blot` returns `unknown` (e.g. `Quill.import("blots/inline")`)**  
  Typings surface for Quill 2 imports/blots.  
  <https://github.com/VaguelySerious/react-quill/issues/16>

- **#15 — Multiple spaces collapse on paste; tab/indent issues; odd list behavior**  
  Clipboard normalization + whitespace preservation are recurring pain points.  
  <https://github.com/VaguelySerious/react-quill/issues/15>

- **#14 — Ordered list numbers show as 0 when converting HTML → PNG**  
  Likely CSS counter/list-style computation in the HTML→image tooling context (outside Quill).  
  <https://github.com/VaguelySerious/react-quill/issues/14>

- **#8 — Jest tests fail with “unexpected token”**  
  Build/test pipeline compatibility regression.  
  <https://github.com/VaguelySerious/react-quill/issues/8>

---

## Closed issues (23) — regression risks & what’s been “fixed/closed” before

Closed issues query: <https://github.com/VaguelySerious/react-quill/issues?q=is%3Aissue+is%3Aclosed>

### Highest regression-risk clusters

- **Editor initialization + lifecycle**: duplicate toolbars, missing toolbar containers, editor disappearing on rerender, “invalid container”.
- **Multi-instance correctness**: toolbars disappearing or being replaced when parent rerenders, cross-instance leakage.
- **Packaging/publish correctness**: missing `dist/` files, broken or missing source maps (`quill.snow.css.map`), Vite/Jest build issues.
- **API surface / typings**: `ref` support and TypeScript DX.
- **Whitespace + placeholder correctness**: placeholder update behavior, `preserveWhitespace`, paste normalization.

### Closed issue digest (each issue)

- **#47 — Placeholder text doesn’t update**  
  <https://github.com/VaguelySerious/react-quill/issues/47>

- **#46 — `ReactQuill` “doesn’t have a ref attribute?” (TS typing / ref forwarding)**  
  <https://github.com/VaguelySerious/react-quill/issues/46>

- **#43 — Contribution blocked by Verdaccio-pinned Quill tarball (401)**  
  <https://github.com/VaguelySerious/react-quill/issues/43>

- **#41 — Multiple components: first toolbar removed on parent update**  
  <https://github.com/VaguelySerious/react-quill/issues/41>

- **#38 — Tab indentation (how to implement / bind)**  
  <https://github.com/VaguelySerious/react-quill/issues/38>

- **#35 — Peer dependency: `quill-delta@^5.1.0` unmet**  
  <https://github.com/VaguelySerious/react-quill/issues/35>

- **#33 — Deprecated `lodash.isequal@4.5.0` warning**  
  <https://github.com/VaguelySerious/react-quill/issues/33>

- **#31 — Placeholder not working**  
  <https://github.com/VaguelySerious/react-quill/issues/31>

- **#29 — “Container required for toolbar” after upgrade with custom toolbar**  
  <https://github.com/VaguelySerious/react-quill/issues/29>

- **#28 — Header toolbar appears twice (Next.js 15 + React 19)**  
  <https://github.com/VaguelySerious/react-quill/issues/28>

- **#27 — Duplicate toolbar in 3.4.1**  
  <https://github.com/VaguelySerious/react-quill/issues/27>

- **#26 — 3.4.0 missing `dist/react-quill.js`**  
  <https://github.com/VaguelySerious/react-quill/issues/26>

- **#24 — Custom image handler makes editor disappear on edits**  
  <https://github.com/VaguelySerious/react-quill/issues/24>

- **#23 — Bundle size: replace full lodash usage**  
  <https://github.com/VaguelySerious/react-quill/issues/23>

- **#21 — `preserveWhitespace` not working as expected**  
  <https://github.com/VaguelySerious/react-quill/issues/21>

- **#20 — Error reading `quill.snow.css.map`**  
  <https://github.com/VaguelySerious/react-quill/issues/20>

- **#19 — `readOnly` doesn’t hide/disable toolbar (inherited upstream expectation)**  
  <https://github.com/VaguelySerious/react-quill/issues/19>

- **#18 — ENOENT for `quill.snow.css.map`**  
  <https://github.com/VaguelySerious/react-quill/issues/18>

- **#13 — `regenerationSnapshot` undefined (delta destructure crash)**  
  <https://github.com/VaguelySerious/react-quill/issues/13>

- **#12 — “Failed to fetch” runtime error (likely app-specific/noisy)**  
  <https://github.com/VaguelySerious/react-quill/issues/12>

- **#11 — Tables support (migration question / plugin ecosystem)**  
  <https://github.com/VaguelySerious/react-quill/issues/11>

- **#10 — Setting bounds for `ql-tooltip`**  
  <https://github.com/VaguelySerious/react-quill/issues/10>

- **#9 — Source map read error (`quill.snow.css.map`)**  
  <https://github.com/VaguelySerious/react-quill/issues/9>

---

## Legacy repo scan: zenoamaro/react-quill (previous maintainer)

Issue tracker: [zenoamaro/react-quill/issues](https://github.com/zenoamaro/react-quill/issues)

### Counts (issues only; PRs excluded)

- **Open**: 405
- **Closed**: 466

### “Discount Quill 1.x” filtering

For the purposes of “modern relevance”, I flagged issues as Quill-1-specific when the title/body mentions things like:

- `quill@1.x`, `Quill 1.x`, `1.3.x`, etc.

Heuristic results:

- **Open**: ~96 appear Quill-1-specific → **~309** “modern” candidates
- **Closed**: ~66 appear Quill-1-specific → **~400** “modern” candidates

This is a best-effort filter (not perfect), but it’s good enough to highlight the dominant themes you’re likely to inherit while maintaining Quill 2 support.

---

## Legacy repo: dominant modern themes (Quill 2 + modern React)

- **React 18/19 compatibility / deprecated APIs**  
  Most visibly `findDOMNode` deprecation/removal and StrictMode double-invocation issues.  
  Examples:  
  - <https://github.com/zenoamaro/react-quill/issues/1039>  
  - <https://github.com/zenoamaro/react-quill/issues/1037>  
  - <https://github.com/zenoamaro/react-quill/issues/1034>

- **SSR + Next.js integration**  
  “document/window is not defined”, dynamic import patterns, hydration pitfalls.  
  Canonical thread: <https://github.com/zenoamaro/react-quill/issues/919>

- **Lists, indentation, whitespace**  
  List semantics, numbering quirks, `<br>` inside `<li>`, “space/tab” expectations and preservation.  
  Examples:  
  - <https://github.com/zenoamaro/react-quill/issues/1043>  
  - <https://github.com/zenoamaro/react-quill/issues/1036>

- **Modules/toolbars reconfiguration stability**  
  Changing `modules`/`formats` or custom toolbars causing disappearing editors or broken behavior.  
  Example: <https://github.com/zenoamaro/react-quill/issues/1040>

- **Clipboard/paste + event ordering**  
  Paste triggers blur, initial `onChange` firing, scroll-to-top after paste, etc.  
  Examples:  
  - <https://github.com/zenoamaro/react-quill/issues/1045>  
  - <https://github.com/zenoamaro/react-quill/issues/276>  

- **Browser deprecations inside Quill**  
  Deprecated mutation events (e.g. `DOMNodeInserted`) and pressure to upgrade Quill internals.  
  Examples:  
  - <https://github.com/zenoamaro/react-quill/issues/943>  
  - <https://github.com/zenoamaro/react-quill/issues/970>

- **“Upgrade to Quill 2” pressure / migration questions**  
  Examples:  
  - <https://github.com/zenoamaro/react-quill/issues/1042>  
  - <https://github.com/zenoamaro/react-quill/issues/978>  
  - <https://github.com/zenoamaro/react-quill/issues/601>

---

## Practical maintainer takeaways (high-signal)

- **Most user pain is lifecycle/compat**, not “feature requests”: React 18/19 + SSR + StrictMode dominate.
- **Lists + clipboard** are the highest-leverage correctness areas: both trackers converge heavily here.
- **Regression risk is highest when the editor re-initializes** (modules/formats/value changes) — this shows up as focus loss, duplicate toolbar, disappearing editor, or invalid-container errors.

