# AR Studio Lite – PRO

**Zweck:** Browserbasierter Editor (no‑code feeling) + zwei Viewer (Image‑AR / Surface‑AR), statisch hostbar (GitHub Pages).

## Quickstart (GitHub Pages)
1. Neues Repo anlegen (z. B. `ARstudios`) und **alle** Dateien in die Repo‑Root pushen/uploaden.
2. **Settings → Pages** → „Deploy from a branch“, Branch `main`, Folder `/` → **Save**.
3. Öffnen: `https://<USER>.github.io/<REPO>/` (Startseite mit Demo‑Links).

## Dateien
- `index.html` – Landing (Editor/Demos).
- `editor.html` – Editor mit JSON‑Szenen, 3D‑Vorschau, **Direktlinks** + **QR** (keine Popups).
- `image-viewer.html` – MindAR + A‑Frame (Image‑Tracking) inkl. Beispielfiles vom CDN.
- `surface-viewer.html` – Three.js WebXR (Hit‑Test) mit Fallback via `<model-viewer>`.
- `.github/workflows/pages.yml` – Auto‑Deploy per Actions (optional, Pages tut’s auch ohne).
- `.nojekyll` – deaktiviert Jekyll‑Spezialfälle.

## Hinweise
- HTTPS ist Pflicht (Pages liefert automatisch per HTTPS) → Kamera/WebXR funktionieren erst dann.
- iOS: Kein WebXR – Fallback öffnet nativen AR‑Viewer (Quick Look) via `<model-viewer>`‑Button.
- Eigene `.mind` Targets: MindAR CLI/Tool nutzen, Datei ins Repo legen und im Editor als `anchor.src` setzen.
