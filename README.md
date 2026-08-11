# Portfolio-Gaboelc

Source for [gaboelc.dev](https://www.gaboelc.dev/) — the personal portfolio of
Gabriel León Castro, Analytics Engineer.

Built with [Astro](https://astro.build) and Tailwind CSS, server-rendered and
deployed on Cloudflare Pages.

## Contents

- [Pages](#pages)
- [Content lives in one file](#content-lives-in-one-file)
- [Running it locally](#running-it-locally)
- [Project structure](#project-structure)
- [Deployment](#deployment)
- [License](#license)
- [Contact](#contact)

## Pages

| Route | What it is |
| ----- | ---------- |
| `/`   | The portfolio: about, experience, project case studies, skills, education and contact. |
| `/cv` | A printable CV. Reads dark on screen like the rest of the site, prints black on white, and is tuned to fit a single US Letter page. The download button calls `window.print()`, so there is no PDF file to keep in sync. |

## Content lives in one file

Every CV fact — roles, bullet points, education, certifications, skills, project
case studies — is defined in [`src/data/cv.ts`](src/data/cv.ts). Both the home
page sections and `/cv` import from it.

**Edit that file, not the components.** Changing a component directly will make
the home page and the printable CV disagree with each other.

Skill *names* live in the data file; the mapping from a name to its icon stays
in `Skills.astro`, because `.astro` components cannot be imported from a `.ts`
module.

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
│   └── images/              # Profile photo at three sizes, Open Graph card
│
├── src/
│   ├── components/          # Astro components
│   ├── data/cv.ts           # Single source of truth for all CV content
│   ├── icons/               # Inline SVG icon components
│   ├── layouts/             # MainLayout: meta, fonts, backdrop, JSON-LD
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
- **Website:** [gaboelc.dev](https://www.gaboelc.dev/)
