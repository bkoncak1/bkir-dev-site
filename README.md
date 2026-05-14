# bkir-dev-site

Persoonlijke browser-startpagina met categorieën van favoriete links. Gebouwd
met [Astro](https://astro.build/) en [Tailwind CSS](https://tailwindcss.com/),
gehost als statische site op Cloudflare Pages.

Links staan in YAML-bestanden onder `src/data/categories/` — één bestand per
categorie. Toevoegen of verwijderen = bestand bewerken en committen.

## Links beheren

| Actie | Hoe |
|---|---|
| Link toevoegen | Regel toevoegen aan het juiste `.yaml`-bestand onder `links:` |
| Link verwijderen | Regel weghalen |
| Categorie toevoegen | Nieuw `.yaml`-bestand met `title`, `order`, `links:` |
| Volgorde wijzigen | Veld `order:` aanpassen (lager nummer = eerder) |

Voorbeeld van een categorie-bestand:

```yaml
title: GIS
icon: 🗺️
order: 1
links:
  - title: Esri ArcGIS Pro Help
    url: https://pro.arcgis.com/en/pro-app/latest/help/main/welcome-to-the-arcgis-pro-app-help.htm
    description: Officiële documentatie ArcGIS Pro
  - title: Safe Software FME Docs
    url: https://docs.safe.com/
```

Het Zod-schema in `src/content.config.ts` valideert de YAML bij build, dus
typo's en ongeldige URL's worden direct opgemerkt.

## Sneltoetsen

- Druk een willekeurige letter → focus springt naar de zoekbalk
- Typen filtert links op titel, hostname en beschrijving
- `Enter` → opent het eerste zichtbare resultaat
- `Esc` → wist het filter

## Lokaal draaien

Vereist Node 20+.

```bash
npm install
npm run dev      # dev-server op http://localhost:4321
npm run build    # productie-build naar dist/
npm run preview  # preview de build lokaal
```

## Projectstructuur

```
src/
├── content.config.ts          # Zod-schema voor categorieën
├── data/categories/           # Eén YAML-bestand per categorie
├── layouts/Layout.astro
├── components/
│   ├── CategorySection.astro
│   └── LinkCard.astro
├── pages/index.astro          # Homepage met grid + filter
└── styles/global.css          # Tailwind v4
```

## Deploy naar Cloudflare Pages

In het Cloudflare Pages dashboard:

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node version (env var):** `NODE_VERSION=20`

Koppel de repo aan Cloudflare Pages — elke push naar `main` deployt
automatisch.

## Licentie

[MIT](LICENSE)
