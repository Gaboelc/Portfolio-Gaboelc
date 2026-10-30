# Portfolio-Gaboelc

Source for [portfolio-gaboelc.pages.dev](https://portfolio-gaboelc.pages.dev/) — the personal portfolio of
Gabriel León Castro, Analytics Engineer.

Built with [Astro](https://astro.build) and Tailwind CSS, server-rendered and
deployed on Cloudflare Pages.

## Contents

- [Pages](#pages)
- [Content lives in one file](#content-lives-in-one-file)
- [Design](#design)
- [Running it locally](#running-it-locally)
- [Project structure](#project-structure)
- [Deployment](#deployment)
- [License](#license)
- [Contact](#contact)

## Pages

| Route | What it is |
| ----- | ---------- |
| `/`   | The portfolio: work history, case studies, stack, about and contact. |
| `/cv` | A printable CV. Sits on the sheet on screen, prints black on white, and is tuned to fit a single US Letter page in both languages. The download button calls `window.print()`, so there is no PDF file to keep in sync. |
| `/es/`, `/es/cv` | The same two pages in Spanish. |

## Content lives in one file

Every CV fact — roles, bullet points, education, certifications, skills, project
case studies — is defined in [`src/data/cv.ts`](src/data/cv.ts). Both the home
page sections and `/cv` import from it.

**Edit that file, not the components.** Changing a component directly will make
the home page and the printable CV disagree with each other.

Skills carry a `used` note citing where each one was used; a skill with nothing
to cite shows a dash on the page rather than filler.

Prose is stored as `{ en, es }` and resolved with `t()` from
[`src/i18n.ts`](src/i18n.ts); job titles, company names, dates and figures are
written once and shared, so the two languages cannot drift apart. Each page
reads its language from the URL (anything under `/es/`), and `src/views/` holds
the page bodies that `/` and `/es/` both render. Interface strings live next to
the component that uses them, in a small `copy` object per language.

## Design

The page is drawn as a worksheet: column letters and row numbers frame it, the
Name Box and formula bar follow the section in view, and the sections are sheet
tabs. Colours are the five in the brand palette, defined once as CSS custom
properties in `styles/global.css`. Type is Departure Mono (pixel display,
self-hosted from `public/fonts/`, OFL), Schibsted Grotesk and IBM Plex Mono.

Every animation degrades to the finished state: without JavaScript, with
reduced motion, or in print.

## Running it locally

Requires [Node](https://nodejs.org) and [pnpm](https://pnpm.io). Both versions
are pinned — Node in `.node-version`, pnpm in the `packageManager` field of
`package.json` — so local and CI builds resolve the same dependency tree.

```bash
git clone https://github.com/Gaboelc/Portfolio-Gaboelc.git
cd Portfolio-Gaboelc
pnpm install
pnpm dev
```

The site runs at `http://localhost:4321`.

> **On Windows PowerShell**, `&&` is not a valid separator. Run the commands
> individually, or chain them with `;`.

`pnpm-workspace.yaml` is required to build. pnpm blocks dependency install
scripts by default, and `esbuild`, `sharp` and `workerd` need theirs to fetch
native binaries — the file allows exactly those three. Without it, `pnpm
install` exits 1 and the build never starts.

### Scripts

| Command | What it does |
| ------- | ------------ |
| `pnpm dev` | Start the dev server |
| `pnpm build` | Build to `dist/` |
| `pnpm preview` | Serve the production build locally |

## Project structure

```bash
Portfolio-Gaboelc/
│
├── public/
│   ├── favicon/
│   ├── fonts/               # Departure Mono and its licence
│   └── images/              # Profile photo, its dithered version, Open Graph card
│
├── src/
│   ├── components/          # Astro components
│   ├── data/cv.ts           # Single source of truth for all CV content
│   ├── icons/               # The print icon used by /cv
│   ├── layouts/             # MainLayout: meta, fonts, sheet frame, JSON-LD
│   ├── pages/               # index.astro, cv.astro, 404.astro
│   └── middleware.ts        # Cache-Control on HTML responses
│
├── styles/global.css        # Design tokens, base styles, print rules
│
├── .node-version            # Pinned Node version
├── astro.config.mjs
├── pnpm-workspace.yaml      # Allowed dependency build scripts
└── tailwind.config.mjs      # Colour tokens read from CSS custom properties
```

## Deployment

Cloudflare Pages watches this repository, so **pushing is deploying**. There is
no deploy command and no `wrangler.toml`.

Work lands on `dev`, which produces a preview deployment on a temporary URL.
Production goes out when `dev` is merged into `main` through a pull request.

## License

MIT. See [LICENSE](LICENSE).

## Contact

- **Email:** <gabrielleon917@gmail.com>
- **LinkedIn:** [linkedin.com/in/gaboelc](https://www.linkedin.com/in/gaboelc/)
- **Website:** [portfolio-gaboelc.pages.dev](https://portfolio-gaboelc.pages.dev/)
