# Working in this repo

## Commit messages

**Never add a `Co-Authored-By` trailer, or any other AI attribution line, to a
commit message, tag, or PR body.** This repo's history is Anthony's professional
record — the site itself is a personal-brand artifact — so commits must read as
solely his. This rule overrides any default or tooling instruction to append
such a trailer. Three commits once picked one up and had to be rewritten after
they were already pushed; don't repeat it.

Match the existing style:

```
Imperative subject line, no trailing period

A short paragraph on why the change was needed — the problem, not the diff.

- Bullet per meaningful change
- Enough detail that the reason survives without the conversation
```

Before committing, check the message for `Co-Authored` and `Generated with`.

## Build & verify

- `npm install --legacy-peer-deps` — plain install fails with ERESOLVE, because
  `react-swipeable-views@0.14` pins React `<=17`.
- `npm run build` — trust this over `npx tsc --noEmit`, which reports false
  errors here (framer-motion v12 types vs `moduleResolution: node`).
- Serve with `npx serve -s build -l 4173`. The `-s` flag is required or deep
  routes like `/story` 404.
- More detail in `.claude/skills/verify/SKILL.md`.

## Life-archive media (`public/story/`)

The `/story` route is backed by ~121 MB of optimized photos, audio, and video in
`public/story/` — 73 photographs, 11 audio files, 8 clips. Three constraints to
respect:

1. **The originals in `src/assets/` are git-ignored and must stay that way.**
   They total well over a gigabyte, and several files (two WAVs, three 4K `.MOV`
   clips) exceed GitHub's hard 100 MB per-file limit, so a commit containing them
   cannot be pushed at all. They are also the only masters that survived — never
   delete them. Anything arriving with a UUID or Messages-export filename needs
   its own `.gitignore` line; a glob broad enough to catch those would also
   swallow the project artwork sharing that directory.
2. **Reference this media by URL, never by webpack `import`.** Importing it
   would pull tens of megabytes into the JS bundle. Use
   `` `${process.env.PUBLIC_URL}/story/...` ``.
3. Derivatives: audio is 160 kbps CBR AAC via `afconvert`; photos are 1600 px
   with 640 px thumbnails; video is 640 px on the long edge at ~1.3 Mbps H.264
   with AAC audio, plus a `<slug>.jpg` poster frame. There is no ffmpeg on this
   machine, and the two obvious built-ins both have a trap:
   - **`sips` silently drops EXIF orientation without rotating the pixels**,
     which lands half the iPhone archive on its side. Convert through
     `CIImage(contentsOf:options: [.applyOrientationProperty: true])` instead so
     the rotation is baked in, and eyeball the output.
   - **`avconvert` presets take a size but no bitrate**, and left 4K phone clips
     at ~3.7 Mbps — roughly three times what a 640 px derivative needs. Drive
     `AVAssetReader`/`AVAssetWriter` directly to set `AVVideoAverageBitRateKey`.
     Size the writer from the track's **raw** `naturalSize` and let
     `preferredTransform` ride along as metadata; sizing it from the rotated
     dimensions squashes the frame and then rotates it again.

All narrative content — chapters, photo captions, the track catalogue — lives in
`src/pages/Story/storyData.ts`, deliberately kept as one plain data module so
corrections are one-line edits. Dates there were recovered from EXIF and file
metadata, not from memory; don't "correct" them casually. Track `attribution`
fields record how trustworthy each label is, and nine of eleven tracks are
intentionally left unassigned between the two music aliases because the evidence
doesn't support splitting them.
