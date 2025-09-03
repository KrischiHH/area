# WebAR Starter (Image + Surface)
This starter gives you two **working** WebAR demos:

- **viewer-image/** — Image tracking via MindAR + A‑Frame (uses CDN sample target so it runs immediately).
- **viewer-surface/** — Surface/world placement via Three.js + WebXR (Android Chrome/Samsung Internet). iOS will see a friendly fallback.

## Quick start
1. Serve over HTTPS (or `localhost`). If you open the files via `file://`, the camera will not start.
2. Open `viewer-image/index.html` and allow camera access — point at the sample card image shown on screen.
3. On Android, open `viewer-surface/index.html` and tap **Enter AR**, move your phone to find a surface, then tap to place the box.
4. Deploy to GitHub Pages using the included workflow under `.github/workflows/gh-pages.yml` (requires a simple build step or change the workflow to publish the root).

## Notes
- The image demo uses MindAR's official CDN sample assets to avoid local setup. Replace them later with your own `.mind` target and assets.
- The surface demo uses WebXR Hit‑Test. iOS Safari currently lacks WebXR; you’ll get a fallback message.
