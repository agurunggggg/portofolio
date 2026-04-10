# Anil Gurung — Revenue Management Analyst Portfolio

Personal portfolio site for **Anil Gurung**, a Revenue Management Analyst with 10+ years of experience in media, advertising, and data analytics based in Toronto, Canada.

## About

This site showcases professional experience, data analytics case studies, and technical skills across revenue optimization, audience forecasting, and pricing strategy in the TV and media industry.

### Featured Projects

- **TV Revenue Forecasting Model** — Quarterly ad revenue prediction across specialty channels (95% accuracy)
- **Audience Analytics Dashboard** — Unified weekly audience metrics tracking across 8 TV networks
- **Pricing & Inventory Optimization** — Ad inventory analysis identifying $1.2M in annual revenue recovery
- **SQL Data Exploration** — Advertiser segmentation and churn analysis across 50K+ records

## Tech Stack

| Layer       | Technology                          |
| ----------- | ----------------------------------- |
| Framework   | [Next.js 16](https://nextjs.org/) (App Router) |
| UI          | [React 19](https://react.dev/)      |
| Language    | TypeScript                          |
| Styling     | [Tailwind CSS v4](https://tailwindcss.com/) |
| Fonts       | Inter + IBM Plex Mono (Google Fonts) |

## Getting Started

### Prerequisites

- Node.js 18.18+
- npm

### Installation

```bash
cd site
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
Portfolio/
├── LICENSE
├── README.md
└── site/                        # Next.js application
    ├── public/
    │   └── favicon.svg          # AG logo
    └── src/
        ├── app/
        │   ├── layout.tsx       # Root layout with sidebar + footer
        │   ├── page.tsx         # Home (Hero, About, Projects, Skills, Contact)
        │   ├── globals.css      # Tailwind v4 theme + design tokens
        │   └── projects/
        │       └── [slug]/
        │           └── page.tsx # Project case study detail pages
        ├── components/
        │   ├── nav.tsx          # Sidebar (desktop) / bottom bar (mobile)
        │   ├── footer.tsx       # Site footer
        │   ├── sections/        # Page sections (hero, about, projects, skills, contact)
        │   └── ui/              # Reusable UI components
        ├── data/                # Static content (profile, projects, experience, skills)
        └── types/               # TypeScript interfaces
```

## License

[MIT](LICENSE)
