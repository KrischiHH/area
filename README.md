# WebAR Starter Kit (AR Studio–ähnlicher Flow)

Dieses Repo ist *GitHub Pages*-fertig. Lege es einfach in deinen Repo und aktiviere Pages (Branch/Ordner: `docs/`).

## Struktur
```
docs/
  index.html                 ← Landing
  .nojekyll
  image-ar/                  ← MindAR (Image Target)
    index.html
  surface-ar/
    index.html               ← Native AR via <model-viewer> (Android: Scene Viewer, iOS: Quick Look)
    webxr.html               ← (Optional) In-Browser WebXR Hit-Test (Android Chrome)
  editor/
    index.html               ← Mini-Editor: GLB laden, transformieren, Szene exportieren
  qr/
    index.html               ← QR-Code Generator für Links
  assets/
    models/                  ← Lege hier eigene .glb/.gltf Modelle ab (oder nutze externe URLs)
    targets/                 ← MindAR .mind Targets (erstellt mit MindAR Target Compiler)
    usdz/                    ← iOS Quick Look .usdz Dateien
    audio/                   ← optional .mp3/.wav
```

## Schnellstart
1. **GitHub Pages aktivieren**: Repository → Settings → Pages → Source: *Deploy from branch* → Folder: `/docs`.
2. **Image AR testen**: `docs/image-ar/index.html` öffnen. 
   - Ersetze `./assets/targets/target.mind` durch dein eigenes Target (siehe unten).
3. **Surface AR testen**:
   - `docs/surface-ar/index.html` (empfohlen: funktioniert out-of-the-box mit Android/iOS via nativen Viewern).
   - `docs/surface-ar/webxr.html` (Android Chrome, echtes In-Browser AR via WebXR Hit-Test).
4. **Editor**: `docs/editor/index.html` → GLB-URL eintragen (oder lokales Modell via GH Pages) → laden → transformieren → **Export** → es entsteht eine `scene.json` zum Wiederverwenden.
5. **QR**: `docs/qr/index.html` → eine URL eintragen (z. B. die veröffentlichte AR-Seite) → QR-Code erzeugen → speichern.

## MindAR Target (.mind) erstellen
Nutze den **MindAR Image Targets Compiler**. Du erhältst eine `.mind` Datei, die du nach `docs/assets/targets/` legst und in `image-ar/index.html` referenzierst.

## Hinweise
- **HTTPS** ist für Kamera & WebXR Pflicht – GitHub Pages liefert automatisch über HTTPS aus.
- **iOS** (Safari) unterstützt **kein WebXR AR** im Browser. Nutze `surface-ar/index.html` (model-viewer → Quick Look) oder Image Targets (MindAR).
- **Android**: WebXR AR (Hit-Test) im Chrome ist unterstützt.
- **Assets**: Externe Modell-URLs (CDN) funktionieren – achte auf **CORS**.
- **Audio**: Autoplay ist eingeschränkt. Starte Audio an eine Nutzerinteraktion (Button/Tap) gebunden.

Erstellt: 2025-09-04
