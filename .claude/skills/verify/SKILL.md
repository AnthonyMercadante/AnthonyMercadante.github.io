---
name: verify
description: Build, serve, and visually verify this CRA portfolio site
---

# Verify: portfolio site (CRA + Tailwind + framer-motion)

## Build & serve
- `npm install --legacy-peer-deps` - plain `npm install` fails with ERESOLVE because `react-swipeable-views@0.14` pins React `<=17`.
- `npm run build` - react-scripts build, usually about 1-2 minutes. `npx tsc --noEmit` is unreliable here because framer-motion v12 types conflict with the current `moduleResolution: node`; trust the CRA build instead.
- Serve the SPA with `npx serve -s build -l 4173`. The `-s` flag is required so deep routes like `/WorkExperience` resolve.

## Drive & capture
Use headless Edge screenshots; Playwright is not installed in this repo.

```powershell
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless=new --disable-gpu --force-device-scale-factor=1 --hide-scrollbars --virtual-time-budget=6000 --window-size=1440,900 --screenshot="out.png" "http://localhost:4173/<route>"
```

Routes worth checking: `/`, `/portfolio`, `/about-me`, `/skills`, `/WorkExperience`, `/Projects`, plus one detail page such as `/XRDeveloper` or `/CellTower`.

## Gotchas
- Chromium headless clamps window width to 500px minimum. A `--window-size=390,...` screenshot renders the layout at 500px and crops it, which looks like fake horizontal overflow. Use 500px as the narrowest honest width; real phones apply the viewport meta correctly.
- `--virtual-time-budget` is required so framer-motion entrance animations finish before capture.
- The global ambient background lives in `src/components/Ambient.tsx` and is mounted in `App.tsx`; pages must not set `bg-black` or opaque MUI `backgroundColor` on their root, or they will hide it.
