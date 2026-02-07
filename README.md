# luckylabs-web

Lettvekts React-landingsside som matcher fargetemaet fra Vinn-appen (mint, mørk grønn, lys bakgrunn). Bygget med Vite + TypeScript.

## Kom i gang

```bash
cd luckylabs-web
npm install
npm run dev
```

- Dev-server starter på `http://localhost:5173`.
- Bygg for produksjon: `npm run build` og deretter `npm run preview` for å teste bygget.

## Struktur
- `src/App.tsx` – landingsside med hero, funksjoner, eksempel-konkurranser og CTA.
- `src/index.css` – globale stiler med Vinn-paletten.
- `vite.config.ts` og `tsconfig*.json` – Vite/TS-oppsett.

## Neste steg
1. Legg til faktiske seksjoner/innhold for produktsiden.
2. Koble konkurranse-kort til API eller CMS når du har data tilgjengelig.
3. Sett opp hosting (Netlify/Vercel/S3) og legg inn analytics.
