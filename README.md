# Fremtid Web 🚀

> Moderne, raske og tilgjengelige digitale løsninger for små og mellomstore bedrifter. Vi kombinerer solid frontend-utvikling med gjennomtenkt visuelt design for å skape merkevareopplevelser som skaper vekst.

---

## 📋 Om prosjektet

**Fremtid Web** er en moderne, høypresterende webapplikasjon bygget for bedrifter som ønsker en rask, universelt utformet (tilgjengelig) og visuelt slående digital tilstedeværelse. Prosjektet benytter den nyeste teknologistakken innen React-økosystemet for å sikre lynrask lasting, god søkemotoroptimalisering (SEO) og en førsteklasses brukeropplevelse.

---

## 🛠️ Teknologier og Arkitektur

Dette prosjektet er satt opp med en moderne og robust tech-stack:

- **Core:** [React 19](https://react.dev/) / [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Build Tool:** [Vite](https://vitejs.dev/) for ekstremt rask utvikling og optimaliserte produksjonsbygg
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) for moderne, responsiv og skalerbar styling
- **Routing:** [React Router DOM v7](https://reactrouter.com/) for sømløs klientside-navigasjon
- **Formulering & Validering:** [React Hook Form](https://react-hook-form.com/) + [Zod v4](https://zod.dev/) for type-sikre skjemaer og validering
- **Ikoner:** [Lucide React](https://lucide.dev/) for rene, moderne ikoner
- **Lifting & Linting:** [Oxlint](https://oxlint.org/) for lynrask statiskkodeanalyse

---

## 📁 Prosjektstruktur

Prosjektet følger en modulær og skalerbar komponentarkitektur under `src/`:

```text
src/
├── components/          # Gjenbrukelige UI- og seksjonskomponenter
│   ├── home/            # Seksjoner spesifikke for forsiden (Hero, Tjenester, TrustSignals m.m.)
│   ├── layout/          # Layout-elementer (Navbar, Footer, Layout wrapper)
│   ├── projects/        # Prosjekt- og porteføljekomponenter
│   ├── services/        # Tjenesterelaterte komponenter (Prispakker, Tidslinjer)
│   └── ui/              # Atomiske UI-komponenter (Modaler, Accordions, Knapper)
├── context/             # React Context for global tilstandshåndtering
├── data/                # Statisk data, innhold og konfigurasjoner
├── i18n/                # Internasjonalisering og tekstressurser
├── pages/               # Sidemaler (HomePage, AboutPage, ServicesPage, Contact m.fl.)
├── types/               # TypeScript grensesnitt og typer
├── utils/               # Hjelpefunksjoner og verktøy
├── App.ts               # Hovedkomponent med routing-definisjoner
├── index.css            # Globale stiler og Tailwind-integrasjon
└── main.ts              # Applikasjonens startpunkt
```

---

## ⚙️ Tilgjengelige skript

I `package.json` finner du følgende tilgjengelige kommandoer:

| Skript            | Beskrivelse                                                                               |
| :---------------- | :---------------------------------------------------------------------------------------- |
| `npm run dev`     | Starter Vite-utviklingsserveren med HMR (Hot Module Replacement).                         |
| `npm run build`   | Kjører TypeScript type-sjekk (`tsc -b`) og bygger applikasjonen for produksjon i `dist/`. |
| `npm run lint`    | Kjører Oxlint for å sjekke koden for stil- og syntaksfeil.                                |
| `npm run preview` | Forhåndsviser produksjonsbygget lokalt før utrulling.                                     |

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- npm
- Supabase account

### 1. Clone the Repository

```bash
git clone https://github.com/Nirush4/fremtid-web
cd fremtid-web
```

### Install Dependencies

```bash
npm install
```

### Run the Application

```bash
npm run dev
```

- The app will run locally (default: http://localhost:5173).

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## Author 👨‍💻​

- Nirushan Rajamanoharan [@Nirush4](https://github.com/Nirush4)

**Happy coding!**
