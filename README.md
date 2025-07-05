# Rågård – Företagswebb

Detta repo innehåller koden för Rågårds nya företagswebbplats.

## Teknikval

- **React** med [Next.js](https://nextjs.org/) för enkel och snabb statisk webb.
- Möjlighet till koppling mot headless CMS (t.ex. Sanity) om kunden vill kunna uppdatera innehåll själv i framtiden.
- Modern frontend-stack med fokus på prestanda och enkel vidareutveckling.

## Kom igång

1. Klona repot:
   ```bash
   git clone git@github.com:YOUR-USERNAME/ragard.git
   cd ragard
   ```
2. Installera beroenden:
   ```bash
   npm install
   ```
3. Starta utvecklingsserver:
   ```bash
   npm run dev
   ```

## Deployment

För produktion rekommenderas Vercel eller Netlify för enkel och säker hosting av Next.js/React-appar.

**OBS!** Om ni vill fortsätta använda Loopia-servern kan ni köra `next export` för att generera en statisk version av sidan och ladda upp filerna via FTP. Läs mer i Next.js-dokumentationen om [statisk export](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports).

## Kontakt

Vid frågor, kontakta [Ditt Namn eller Mail].
