# MedSimplify

## Setup
```bash
npm install
cp .env.local.example .env.local   # fill in a ROTATED Groq key, never the one pasted in chat
npm run dev
```
Open http://localhost:3000

## Why no key is in the code
`.env.local` is gitignored. The key is read only in `lib/llmClient.js`, which runs
server-side inside `app/api/*/route.js`. It is never sent to the browser.

## Modules
- `components/InputPanel.jsx` — paste text or upload a photo; OCR runs in-browser via tesseract.js (nothing uploaded for scanning).
- `app/api/simplify/route.js` — calls Groq, forces JSON output matching the summary/actions/terms/doctor_questions/red_flags schema.
- `components/ChatBridge.jsx` — split-screen patient/doctor chat; each message is translated via `app/api/translate/route.js`.
- `components/ResultCards.jsx` / `ChatBridge.jsx` — TTS via the browser's built-in `speechSynthesis`, no API needed.
- `components/AccessibilityBar.jsx` + `app/globals.css` (`.hc` class) — high-contrast toggle.

## Known gaps (MVP, not production)
- No auth, no persistence — chat and results live in component state only, lost on refresh.
- No PHI encryption at rest / no audit log — do not point this at real patient data as-is.
- Groq model name in `.env.local.example` may drift; check Groq's current model list if calls fail.
- OCR via tesseract.js is adequate for printed text, weak on handwriting — swap in a cloud OCR provider in `InputPanel.jsx` if needed.
