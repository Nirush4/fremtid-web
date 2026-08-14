import type { TranslationDictionary } from '../types';

export const no: TranslationDictionary = {
  brand: {
    name: 'Fremtid Web',
    tagline: 'Programvareutvikling og design for voksende bedrifter',
  },
  nav: {
    home: 'Hjem',
    services: 'Tjenester',
    about: 'Om oss',
    projects: 'Prosjekter',
    faq: 'FAQ',
    skipToContent: 'Hopp til hovedinnhold',
    languageSwitch: 'Bytt språk',
    openMenu: 'Åpne navigasjonsmeny',
    closeMenu: 'Lukk navigasjonsmeny',
  },
  home: {
    heroTitle:
      'Vi bygger raske, tilgjengelige og brukervennlige digitale produkter',
    heroSubtitle:
      'Vi lager tilgjengelige, høyytelses nettsteder og merkevareopplevelser for norske bedrifter som er klare for vekst på nett.',
    heroCta: 'Se våre pakker',
    heroSecondaryCta: 'Se vårt arbeid',
    servicesHeading: 'Hva vi gjør',
    servicesSubheading:
      'Frontend-utvikling og grafisk design — levert av ett samlet team.',
    serviceItems: {
      development: {
        title: 'Skreddersydd nettside og programvareutvikling',
        description:
          'Vi bygger raske, sikre og brukervennlige nettsider og apper tilpasset din bedrift, med fokus på at alt skal fungere knirkefritt for alle brukere.',
      },
      design: {
        title: 'Grafisk og visuelt design',
        description:
          'Gjennomtenkte oppsett, god typografi og tiltalende design som bygger tillit hos kundene dine på alle enheter.',
      },
      maintenance: {
        title: 'Lansering og oppfølging',
        description:
          'Vi ordner alt fra domene og sikre SSL-sertifikater til publisering og drift, slik at nettsiden din alltid er trygg og oppdatert.',
      },
    },
    techForAll: {
      tag: 'For små og mellomstore bedrifter',
      title: 'Teknologi tilgjengelig for alle',
      description1:
        'Fremtid Web ble startet med én klar visjon: å senke terskelen for små og mellomstore bedrifter som ønsker moderne og profesjonelle nettsider, uavhengig av bedriftens størrelse.',
      description2:
        'Gode digitale løsninger skal ikke være forbeholdt aktører med store budsjetter. Vi leverer fleksible pakker skreddersydd for lokale aktører og tjenesteytere med full kvalitet og transparente priser.',
      description3:
        'Enten du driver kafé, frisørsalong, konsulentvirksomhet eller et lokalt foretak – vi hjelper deg å bli synlig og ta del i den digitale hverdagen.',
    },
    featuredHeading: 'Utvalgte prosjekter',
    featuredSubheading:
      'Et utvalg av nylig arbeid fra Fremtid Web-porteføljen.',
    viewAllProjects: 'Se alle prosjekter',
    trustHeading: 'Hvorfor bedrifter velger oss',
    trustItems: {
      accessible: {
        title: 'Tilgjengelighet først',
        description:
          'Hvert nettsted vi bygger oppfyller WCAG 2.1 AA — semantisk HTML, tastaturnavigasjon og god kontrast.',
      },
      transparent: {
        title: 'Transparent prising',
        description:
          'Tydelige pakkenivåer uten skjulte kostnader. Du vet alltid hva som er inkludert før vi starter.',
      },
      local: {
        title: 'Norsk og engelsk',
        description:
          'Tospråklig kommunikasjon og flerspråklig nettstedsstøtte for bedrifter med ulike målgrupper.',
      },
    },
  },
  about: {
    pageTitle: 'Om Fremtid Web',
    pageDescription:
      'Et byrå for programvareutvikling og design med fokus på frontend-kvalitet og gjennomtenkte merkevareopplevelser.',
    storyHeading: 'Vår historie',
    storyParagraphs: [
      'Fremtid Web ble grunnlagt for å hjelpe små og mellomstore bedrifter med å konkurrere på nett med samme kvalitetsstandard som større byråer — uten unødvendig kompleksitet eller oppblåste priser.',
      'Vi spesialiserer oss på frontend-utvikling og grafisk design, og kombinerer ren kode med sterk visuell identitet. Hvert prosjekt bygges med tilgjengelighet, ytelse og langsiktig vedlikeholdbarhet i tankene.',
      'Med base i Norge jobber vi tett med kunder på både norsk og engelsk, og veileder dem fra første tilbud til publisert nettsted.',
    ],
    expertiseHeading: 'Vår kompetanse',
    expertiseItems: {
      frontend: {
        title: 'Frontend-utvikling',
        description:
          'React, TypeScript, Vite og Tailwind CSS — moderne teknologi valgt for utvikleropplevelse og sluttbrukerytelse.',
      },
      design: {
        title: 'Grafisk design',
        description:
          'Logoforbedring, fargesystemer, layoutdesign og UI-komponenter som gjenspeiler merkevarens personlighet.',
      },
      collaboration: {
        title: 'Samarbeidsorientert prosess',
        description:
          'Regelmessige oppfølginger, designgjennomganger og tydelige milepæler holder prosjekter på sporet og kunder informert.',
      },
    },
    valuesHeading: 'Våre verdier',
    values: {
      quality: {
        title: 'Kvalitet over kvantitet',
        description:
          'Vi tar på oss prosjekter vi kan levere eksepsjonelt godt, og gir hver kunde oppmerksomheten de fortjener.',
      },
      clarity: {
        title: 'Klar kommunikasjon',
        description:
          'Ingen fagspråk-fylte forslag. Vi forklarer tekniske valg på en enkel måte slik at du kan ta informerte beslutninger.',
      },
      partnership: {
        title: 'Langsiktig partnerskap',
        description:
          'Lanseringsdagen er ikke slutten. Vi tilbyr løpende støtte og er her når du trenger oppdateringer eller nye funksjoner.',
      },
    },
  },
  projects: {
    pageTitle: 'Prosjekter',
    pageDescription:
      'Utforsk porteføljen vår med nettsteder og designarbeid for bedrifter over hele Norge.',
    filterAll: 'Alle',
    filterWeb: 'Webutvikling',
    filterDesign: 'Design',
    filterEcommerce: 'E-handel',
    viewCaseStudy: 'Se casestudie',
    noResults: 'Ingen prosjekter matcher det valgte filteret.',
    projects: {
      'nordic-brew': {
        title: 'Nordic Brew Co.',
        client: 'Håndverksbryggeri, Oslo',
        description:
          'Et responsivt merkevarenettsted med produktkatalog, taproom-arrangementer og integrert nettbestilling.',
        tags: ['React', 'CMS', 'Merkevaredesign'],
      },
      'fjord-wellness': {
        title: 'Fjord Wellness',
        client: 'Helsestudio, Bergen',
        description:
          'Roelig visuell identitet og bookingsfokuserte landingssider for et velværesenter.',
        tags: ['UI/UX', 'Booking', 'Tilgjengelighet'],
      },
      'oslo-artisan': {
        title: 'Oslo Artisan Market',
        client: 'Nettbasert markedsplass',
        description:
          'Flerleverandør e-handelsplattform med produktfiltre, leverandørprofiler og sikker kasse.',
        tags: ['E-handel', 'Stripe', 'Flerleverandør'],
      },
      'bergen-legal': {
        title: 'Bergen Legal Partners',
        client: 'Advokatfirma, Bergen',
        description:
          'Profesjonelt bedriftsnettsted med fagområdesider, teamprofiler og kontaktskjemaer.',
        tags: ['Bedrift', 'SEO', 'Skjemaer'],
      },
      'trondheim-tech': {
        title: 'Trondheim Tech Hub',
        client: 'Coworking-space',
        description:
          'Dynamisk nettsted som viser medlemskap, arrangementskalender og fellesskapshøydepunkter.',
        tags: ['Arrangementer', 'Medlemskap', 'React'],
      },
      'studio-lumiere': {
        title: 'Studio Lumière',
        client: 'Fotografistudio',
        description:
          'Porteføljedrevet design med fullskjermsgallerier og et minimalt, redaksjonelt uttrykk.',
        tags: ['Portefølje', 'Galleri', 'Merkevare'],
      },
    },
  },
  faq: {
    pageTitle: 'Ofte stilte spørsmål',
    pageDescription:
      'Svar om våre teknologistacker, tidsplaner, prosesser og hvordan Fremtid Web samarbeider med kunder.',
    contactPrompt: 'Har du flere spørsmål? Vi hjelper gjerne.',
    contactCta: 'Be om tilbud',
    items: {
      techStack: {
        question: 'Hvilken teknologistack bruker dere?',
        answer:
          'Vi bygger primært med React, TypeScript, Vite og Tailwind CSS. For innholdsadministrasjon integrerer vi headless CMS-løsninger ved behov. Alle nettsteder deployes med HTTPS, optimaliseres for ytelse og testes for tilgjengelighet.',
      },
      timeline: {
        question: 'Hvor lang tid tar et typisk prosjekt?',
        answer:
          'Et Starter Pack-nettsted tar vanligvis 3–4 uker. Vekstpakke-prosjekter tar 6–8 uker. Enterprise-prosjekter varierer basert på omfang, men starter typisk på 10+ uker. Vi oppgir en detaljert tidsplan i hvert tilbud.',
      },
      process: {
        question: 'Hvordan ser prosessen deres ut?',
        answer:
          'Vi følger fire tydelige steg: be om tilbud, motta vårt tilbud, gjennomgå første designutkast, deretter utvikling og publisering. Du er involvert ved hver milepæl med strukturerte tilbakemeldingsrunder.',
      },
      support: {
        question: 'Tilbyr dere støtte etter lansering?',
        answer:
          'Ja. Hver pakke inkluderer støtte etter lansering (30–90 dager avhengig av nivå). Vi tilbyr også løpende vedlikeholdsavtaler for oppdateringer, sikkerhetsfikser og innholdsendringer.',
      },
      pricing: {
        question: 'Hvordan fungerer prisingen?',
        answer:
          'Vi tilbyr tre transparente pakkenivåer — Starter, Vekst og Komplett/Enterprise. Hver inkluderer tekniske grunnlag (innhold og design, SSL, domene og e-postoppsett). Tilpassede prosjekter får skreddersydde tilbud.',
      },
      accessibility: {
        question: 'Er nettstedene deres tilgjengelige?',
        answer:
          'Tilgjengelighet er et kjernekrav, ikke et tillegg. Vi bygger etter WCAG 2.1 AA-standarder: semantisk HTML, tastaturnavigasjon, tilstrekkelig fargekontrast, skjermleserstøtte og fokusstyring.',
      },
    },
  },
  services: {
    pageTitle: 'Tjenester og pakker',
    pageDescription:
      'Transparente nettsidepakker fra Fremtid Web — fra enkle starterløsninger til komplette bedriftsprosjekter.',
    packagesHeading: 'Velg din pakke',
    packagesSubheading:
      'Alle nivåer inkluderer våre tekniske grunnlag. Velg nivået som passer målene og budsjettet ditt.',
    mostPopular: 'Mest populær',
    getStarted: 'Kom i gang',
    contactUs: 'Be om tilbud',
    coreInclusionsHeading: 'Kjerneinkluderinger i alle pakker',
    coreInclusionsSubheading:
      'Disse grunnleggende tjenestene følger med i hver Fremtid Web-pakke — uten skjulte tillegg.',
    processHeading: 'Vår prosess',
    processSubheading:
      'En tydelig og samarbeidsorientert vei fra første samtale til lansering.',
    packages: {
      starter: {
        name: 'Starterpakke',
        description:
          'En profesjonell nettprofil for små bedrifter og enkeltgründere som kommer i gang.',
        price: 'Fra 25 000 NOK',
        priceNote: 'Engangsprosjekthonorar',
        features: [
          'Opptil 5 sider',
          'Mobiltilpasset design',
          'Integrert kontaktskjema',
          'Grunnleggende SEO-oppsett',
          '30 dagers støtte etter lansering',
        ],
      },
      growth: {
        name: 'Vekstpakke',
        description:
          'For etablerte bedrifter som er klare for mer innhold og integrasjoner.',
        price: 'Fra 45 000 NOK',
        priceNote: 'Engangsprosjekthonorar',
        features: [
          'Opptil 12 sider',
          'Skreddersydd UI/UX-design',
          'CMS-integrasjon',
          'Oppsett av analyse og sporing',
          'Ytelsesoptimalisering',
          '60 dagers støtte etter lansering',
        ],
      },
      enterprise: {
        name: 'Komplett / Enterprise-pakke',
        description:
          'Helhetlige løsninger for komplekse behov, flerspråklige nettsteder og langsiktige samarbeid.',
        price: 'Tilpasset pris',
        priceNote: 'Skreddersydd etter omfang',
        features: [
          'Ubegrenset antall sider og seksjoner',
          'Avanserte integrasjoner og API-er',
          'Flerspråklig støtte',
          'Tilgjengelighetsrevisjon (WCAG 2.1 AA)',
          'Dedikert prosjektleder',
          '90 dagers prioritert støtte',
        ],
      },
    },
    coreInclusions: {
      contentDesign: {
        title: 'Innhold og design',
        description:
          'Profesjonell layout, typografi og visuell retning tilpasset merkevaren din.',
      },
      ssl: {
        title: 'SSL-sertifikat',
        description:
          'Sikker HTTPS-kryptering som beskytter besøkende og bygger tillit hos søkemotorer.',
      },
      domainEmail: {
        title: 'Domene og e-postoppsett',
        description:
          'Veiledning og konfigurasjon for domene, DNS og profesjonelle e-postkontoer.',
      },
    },
    process: {
      quote: {
        title: 'Be om tilbud',
        description:
          'Fortell oss om mål, tidsplan og budsjett. Vi svarer innen to virkedager.',
      },
      offer: {
        title: 'Vi sender et tilbud',
        description:
          'Du mottar et detaljert forslag med omfang, milepæler og transparent prising.',
      },
      design: {
        title: 'Første designutkast',
        description:
          'Vi deler wireframes og visuelle konsepter for tilbakemelding før utvikling starter.',
      },
      development: {
        title: 'Utvikling og publisering',
        description:
          'Vi bygger, tester for tilgjengelighet og lanserer nettstedet — og overleverer alt du trenger.',
      },
    },
  },
  footer: {
    rights: 'Alle rettigheter reservert.',
    contact: 'hello@fremtidweb.no',
  },
};
