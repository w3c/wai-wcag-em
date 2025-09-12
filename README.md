# 2025 update for WCAG-EM

This repo contains drafts and explorations of a potential 2025 update of the 2014 [WCAG-EM](https://www.w3.org/TR/WCAG-EM/).

## Setup

Start a web server from the top-level repository folder and open `index.html`

```bash
python3 -m http.server 8000 & sleep 2 && open http://localhost:8000
```

## Changelog

### Big picture

- Made methodology more widely applicable, by making it less specific, most notably by introducing the terms “digital products” (to refer to websites, apps, kiosks, documents), “samples” (to refer to items selected for evaluation, like web pages, screens, pages, views) and “sample set” (to refer to the set of all selected samples).
- Removed all instances of WCAG 2.0 to be either WCAG 2 (where possible) or WCAG 2.2, so that it applies to the latest of WCAG 2.
- Simplified language where possible.
  - Removed notion of “separable website areas” to help simplify; if users of WCAG-EM wanted to commission or conduct evaluations that are specifically about a separable area, they could include or exclude areas in scope, with product enclosure guiding and WCAG conformance criteria guiding conformance claims.
  - Removed notion of “aggregated digital products”, as the complexity it hints at has become much more of a standard practice.

### All changes

- 12 September 2025: add examples of considerations for when auditing kiosks, self-service terminals, set-top boxes and documents ([#86](https://github.com/w3c/wai-wcag-em/pull/86/files)). The info itself is minimal, but the presence should help communicate that the process can be used widely.
- 11 September 2025: add “unique identifier” ([d2ad36](https://github.com/w3c/wai-wcag-em/commit/d2ad364e69d7442d1af80f3331e5b56a0c2593f9)) and “methodology” ([ade823](https://github.com/w3c/wai-wcag-em/commit/ade82398a2fa64dca0e6b71aee9e130f7d302d50)) as possible meta data for a report.
- 18 August 2025: use “sample set” and ”sample” consistently throughout and add “sample set” to glossary.
- 13 August 2025: use WCAG 3 developing definition “view” instead of “user interface” and remove “user interface states” for now.
- 14 July 2025: to suggested content of report, add new meta data for “About the evaluation”: list of dates incl mention of repeat evaluation and version numbers; name of person, team or organisation responsible for the product (may be different from the commissioner).
- 10 July 2025: move background reading and terms into appendices, call terms “Glossary” (to align with WCAG 22 wording). Add method for sampling that can work without web pages, that suggests to manually list all UI. ([cd17e12](https://github.com/w3c/wai-wcag-em/commit/cd17e1283f417efb733e23fa3e1dff595a2587b7))
- 8 July 2025: simplify introduction, use active verbs, a list for factors and 'target audience' instead of 'purpose', move terms and background reading to end of document ([b3ceab3](https://github.com/w3c/wai-wcag-em/commit/b3ceab3c7fb4508053ef10be8e16e9dbdfa45eba)).
- 7 July 2025: replace “web pages” mostly with “samples”, websites mostly with “digital products”, and remove “web” from “web technologies” and “web accessibility”([1ab9fea](https://github.com/w3c/wai-wcag-em/commit/1ab9fea91917949122fcb9ed5221d056addb93d5)); define “samples”, “digital products”, “user interface” ([6d6b6d5](https://github.com/w3c/wai-wcag-em/commit/6d6b6d512429e69377e1c7584a79d96b48b589a7)).
- 25 May 2025: add reading material on ICT Accessibility and standards that incorporate WCAG 2 ([05d6aa4](https://github.com/w3c/wai-wcag-em/commit/05d6aa4bd3a167049a93191658c70836500c104a)).
- 6 May 2025: remove remaining instance of 2.0 reference. Update deploy script ([2679000](https://github.com/w3c/wai-wcag-em/commit/26790007fb03b9740ca17a680a23131156cd6083)).
- 30 April: update name to apply more broadly.
- 28 April: simplify abstract, get URLs up to date and use HTTPS everywhere ([f80d6aa](https://github.com/w3c/wai-wcag-em/commit/f80d6aa168ac89b709471fd9936bb315f528c602)).
- 15 April 2025: add IDs throughout that match the IDs in WCAG-EM 1.0 to ensure no internal links are broken. Replaced instances of WCAG 2.0 and links to WCAG 2.0 specific resources.
- 14 April 2025: auto-publish main.
