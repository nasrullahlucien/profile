# Science Educator & EdTech Developer Portfolio

A modern, clean, premium, light-themed personal portfolio website designed for a **Science Educator & EdTech Developer** (Thai science teacher specializing in physics, earth & space science, and interactive learning tools).

Built specifically for credibility before academic/position-evaluation committees and school administrators, with a clean and tech-forward aesthetic.

---

## 🌟 Key Features

- **Strict Zero-Hallucination Fact Model**: Every detail uses verified facts; all unprovided details are clearly marked placeholders (e.g. `[YOUR NAME]`, `[YOUR EMAIL]`, `[START]–[END]`).
- **Single-Source Content & Strict i18n**: Fully translated across 3 languages: **Thai** (`th`, default), **English** (`en`), and **Malay** (`ms`, draft marked with `// TODO: native review`). All non-translatable metadata lives in `src/content/content.ts`. Missing translation keys fail the build at compile-time.
- **Interactive Labs**: 3 standalone HTML5/Canvas virtual experiment labs previewable directly in-page via an accessible iframe modal dialog with focus trapping and Escape-key closure.
- **Accessibility & Contrast**: Built to conform to **WCAG AA** standards (> 4.5:1 contrast on all text elements), visible focus rings, full keyboard navigability, semantic landmarks, and dual-layer `prefers-reduced-motion` compliance.
- **Tech Stack**: Vanilla TypeScript (strict) + Vite + Tailwind CSS v4. No heavy frontend framework (React/Vue) — pure modular HTML/DOM components.
- **Deployment Ready**: Fully static output, automated GitHub Actions workflow for zero-config GitHub Pages deployment.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- npm 10+

### Installation & Development
```bash
# Install dependencies
npm install

# Start local development server with hot-reload
npm run dev

# Run TypeScript strict type-checking
npm run typecheck

# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Architecture

```text
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions automated deployment
├── public/
│   ├── files/
│   │   └── cv.pdf            # Downloadable CV placeholder
│   ├── images/
│   │   └── profile-placeholder.svg  # Profile photo placeholder
│   └── labs/                 # Standalone interactive virtual labs
│       ├── earth-space-orbital/index.html
│       ├── physics-simulation/index.html
│       └── science-apparatus-tool/index.html
├── src/
│   ├── components/           # Vanilla TypeScript modular components
│   │   ├── Button.ts
│   │   ├── Card.ts
│   │   ├── LanguageSwitcher.ts
│   │   ├── Modal.ts          # Lab modal with iframe & focus trap
│   │   ├── Nav.ts            # Sticky header with active-nav observer
│   │   ├── SectionHeading.ts
│   │   ├── Tag.ts
│   │   └── TimelineItem.ts
│   ├── content/              # Single non-translatable data layer
│   │   ├── content.ts        # URLs, tags, slugs, file paths, dates
│   │   └── types.ts          # Strict TypeScript data models
│   ├── i18n/                 # Multi-language translation layer
│   │   ├── en.ts             # English dictionary
│   │   ├── index.ts          # Language switcher & reactive store
│   │   ├── ms.ts             # Malay dictionary (with TODO markers)
│   │   ├── th.ts             # Thai dictionary (default)
│   │   └── types.ts          # Shared TranslationSchema interface
│   ├── sections/             # 10 page sections (Hero, About, etc.)
│   ├── styles/
│   │   └── main.css          # Tailwind tokens & accessibility rules
│   ├── utils/
│   │   ├── icons.ts          # SVG icons
│   │   ├── scrollReveal.ts   # Scroll reveal with reduced-motion check
│   │   └── storage.ts        # Safe localStorage wrapper
│   └── main.ts               # Application orchestrator & entry point
├── index.html                # Entry HTML with meta & Open Graph tags
├── package.json
├── tsconfig.json             # Strict TypeScript configuration
└── vite.config.ts            # Configurable base path for GitHub Pages
```

---

## ✏️ How to Edit Content

All editable content is centralized in two places. **Components never hardcode text.**

### 1. Non-Translatable Data (Links, Dates, Slugs, Files)
Open [`src/content/content.ts`](src/content/content.ts):
- **Name & Email**:
  ```ts
  author: {
    namePlaceholder: 'นายสมชาย ใจดี',  // Replace placeholder
    emailPlaceholder: 'teacher@school.ac.th',
    profilePhotoPath: 'images/profile.jpg', // Place your photo in public/images/
    cvPath: 'files/cv.pdf',                // Place your PDF in public/files/
  }
  ```
- **Social Media Links**: Update URLs under `socials`.
- **Teaching Dates**: Replace `'[START]–[END]'` with actual academic years (e.g. `'2564–ปัจจุบัน'`).
- **Academic Years**: Replace `'[YEAR]'` under `academicWorks` and `education`.
- **Document File Sizes**: Replace `'[FILE SIZE]'` under `documents` (e.g. `'2.4 MB'`).

### 2. Translatable Text & Labels
Open the translation files in `src/i18n/`:
- **Thai**: [`src/i18n/th.ts`](src/i18n/th.ts)
- **English**: [`src/i18n/en.ts`](src/i18n/en.ts)
- **Malay**: [`src/i18n/ms.ts`](src/i18n/ms.ts)

Replace placeholders inside the dictionaries:
- `hero.name`: Your display name
- `hero.title`: Your formal job title
- `projects.item1Title` / `item1Desc`: Real title and summary of your project
- `academic.item1Title` / `item1Org`: Real research paper title and publishing organization
- `academic.training1Title` / `training1Org`: Real training course certificate name and organizer

---

## 🌐 How to Add a New Language

The i18n system uses a strict TypeScript interface (`TranslationSchema`). Any missing translation keys will immediately stop the build and show the exact missing fields.

1. **Add the language code** in [`src/i18n/types.ts`](src/i18n/types.ts):
   ```ts
   export type SupportedLanguage = 'th' | 'en' | 'ms' | 'ja'; // e.g. adding Japanese
   ```

2. **Create the translation dictionary** `src/i18n/ja.ts`:
   ```ts
   import type { TranslationSchema } from './types';

   export const ja: TranslationSchema = {
     common: { ... },
     nav: { ... },
     hero: { ... },
     // Fill all schema fields
   };
   ```

3. **Register the language** in [`src/i18n/index.ts`](src/i18n/index.ts):
   ```ts
   import { ja } from './ja';

   const dictionaries: Record<SupportedLanguage, TranslationSchema> = {
     th,
     en,
     ms,
     ja, // Register dictionary
   };

   export const LANGUAGE_LABELS: Record<SupportedLanguage, { label: string; flag: string }> = {
     th: { label: 'ไทย', flag: '🇹🇭' },
     en: { label: 'English', flag: '🇬🇧' },
     ms: { label: 'Bahasa Melayu', flag: '🇲🇾' },
     ja: { label: '日本語', flag: '🇯🇵' }, // Add label & flag
   };
   ```

The navigation language switcher will automatically render the new language on both desktop and mobile!

---

## 🔬 How to Add a New Interactive Lab

1. **Create the lab files**:
   Create a new folder in `public/labs/<your-lab-slug>/` with an `index.html` file (along with any CSS/JS needed).
   ```text
   public/labs/pendulum-harmonic/index.html
   ```

2. **Register the lab in the Content Layer** [`src/content/content.ts`](src/content/content.ts):
   ```ts
   projects: [
     // ... existing projects
     {
       id: 'lab-pendulum',
       slug: 'pendulum-harmonic',
       labUrl: 'labs/pendulum-harmonic/index.html',
       githubUrl: 'https://github.com/your-username/pendulum-harmonic',
       tags: ['Physics', 'Simple Harmonic', 'Canvas'],
       titleKey: 'projects.pendulum.title',
       descriptionKey: 'projects.pendulum.description',
     },
   ]
   ```

3. **Add translation keys** to [`src/i18n/types.ts`](src/i18n/types.ts) and all dictionary files (`th.ts`, `en.ts`, `ms.ts`):
   ```ts
   // In each dictionary:
   pendulumTitle: 'แบบจำลองการแกว่งของลูกตุ้มอย่างง่าย',
   pendulumDesc: 'การทดลองเสมือนจริงเพื่อศึกษาคาบการแกว่ง ความยาวเชือก และความเร่งโน้มถ่วง',
   ```

The project card and modal iframe preview will automatically wire up!

---

## 🚢 How to Deploy to GitHub Pages

This repository includes a turnkey GitHub Actions workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Science Educator portfolio"
   git branch -M main
   git remote add origin https://github.com/nasrullahlucien/profile.git
   git push -u origin main
   ```

2. **Enable GitHub Pages via Actions**:
   - Go to your repository on GitHub: [github.com/nasrullahlucien/profile](https://github.com/nasrullahlucien/profile)
   - Click **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.

3. **Automated Deployment**:
   - Every push to the `main` branch will automatically run the workflow, run TypeScript verification, build static files, and deploy to:
     **https://nasrullahlucien.github.io/profile/**

---

## 📜 License
MIT License. Created for Science Educators and EdTech Innovators.
