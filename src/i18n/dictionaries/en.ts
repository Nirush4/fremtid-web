import type { TranslationDictionary } from '../types';

export const en: TranslationDictionary = {
  brand: {
    name: 'Fremtid Web',
    tagline: 'Software development & design for growing businesses',
  },
  nav: {
    home: 'Home',
    services: 'Services',
    about: 'About',
    projects: 'Projects',
    faq: 'FAQ',
    skipToContent: 'Skip to main content',
    languageSwitch: 'Switch language',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
  },
  home: {
    heroTitle: 'Build your digital future with Fremtid Web',
    heroSubtitle:
      'We craft accessible, high-performance websites and brand experiences for Norwegian businesses ready to grow online.',
    heroCta: 'View our packages',
    heroSecondaryCta: 'See our work',
    servicesHeading: 'What we do',
    servicesSubheading:
      'Front-end development and graphic design — delivered as one cohesive team.',
    serviceItems: {
      development: {
        title: 'Front-end development',
        description:
          'React, TypeScript, and modern tooling built for speed, maintainability, and WCAG 2.1 AA compliance.',
      },
      design: {
        title: 'Graphic & UI design',
        description:
          'Brand-aligned layouts, typography, and visual systems that look professional on every device.',
      },
      maintenance: {
        title: 'Launch & support',
        description:
          'Domain setup, SSL, deployment, and post-launch support so your site stays secure and up to date.',
      },
    },
    featuredHeading: 'Featured projects',
    featuredSubheading: 'A selection of recent work from the Fremtid Web portfolio.',
    viewAllProjects: 'View all projects',
    trustHeading: 'Why businesses choose us',
    trustItems: {
      accessible: {
        title: 'Accessibility first',
        description:
          'Every site we build meets WCAG 2.1 AA — semantic HTML, keyboard navigation, and strong contrast.',
      },
      transparent: {
        title: 'Transparent pricing',
        description:
          'Clear package tiers with no hidden fees. You always know what is included before we start.',
      },
      local: {
        title: 'Norwegian & English',
        description:
          'Bilingual communication and multi-language site support for businesses serving diverse audiences.',
      },
    },
  },
  about: {
    pageTitle: 'About Fremtid Web',
    pageDescription:
      'A software development and design agency focused on front-end excellence and thoughtful brand experiences.',
    storyHeading: 'Our story',
    storyParagraphs: [
      'Fremtid Web was founded to help small and mid-sized businesses compete online with the same quality standards as larger agencies — without the complexity or inflated price tags.',
      'We specialise in front-end development and graphic design, combining clean code with strong visual identity. Every project is built with accessibility, performance, and long-term maintainability in mind.',
      'Based in Norway, we work closely with clients in both Norwegian and English, guiding them from first quote to published site.',
    ],
    expertiseHeading: 'Our expertise',
    expertiseItems: {
      frontend: {
        title: 'Front-end development',
        description:
          'React, TypeScript, Vite, and Tailwind CSS — modern stacks chosen for developer experience and end-user performance.',
      },
      design: {
        title: 'Graphic design',
        description:
          'Logo refinement, colour systems, layout design, and UI components that reflect your brand personality.',
      },
      collaboration: {
        title: 'Collaborative process',
        description:
          'Regular check-ins, design reviews, and clear milestones keep projects on track and clients informed.',
      },
    },
    valuesHeading: 'Our values',
    values: {
      quality: {
        title: 'Quality over quantity',
        description:
          'We take on projects we can deliver exceptionally well, giving each client the attention they deserve.',
      },
      clarity: {
        title: 'Clarity in communication',
        description:
          'No jargon-heavy proposals. We explain technical decisions in plain language so you can make informed choices.',
      },
      partnership: {
        title: 'Long-term partnership',
        description:
          'Launch day is not the end. We offer ongoing support and are here when you need updates or new features.',
      },
    },
  },
  projects: {
    pageTitle: 'Projects',
    pageDescription:
      'Explore our portfolio of websites and design work for businesses across Norway.',
    filterAll: 'All',
    filterWeb: 'Web development',
    filterDesign: 'Design',
    filterEcommerce: 'E-commerce',
    viewCaseStudy: 'View case study',
    noResults: 'No projects match the selected filter.',
    projects: {
      'nordic-brew': {
        title: 'Nordic Brew Co.',
        client: 'Craft brewery, Oslo',
        description:
          'A responsive brand site with product catalogue, taproom events, and online ordering integration.',
        tags: ['React', 'CMS', 'Brand design'],
      },
      'fjord-wellness': {
        title: 'Fjord Wellness',
        client: 'Health studio, Bergen',
        description:
          'Calming visual identity and booking-focused landing pages for a wellness centre.',
        tags: ['UI/UX', 'Booking', 'Accessibility'],
      },
      'oslo-artisan': {
        title: 'Oslo Artisan Market',
        client: 'Online marketplace',
        description:
          'Multi-vendor e-commerce platform with product filters, vendor profiles, and secure checkout.',
        tags: ['E-commerce', 'Stripe', 'Multi-vendor'],
      },
      'bergen-legal': {
        title: 'Bergen Legal Partners',
        client: 'Law firm, Bergen',
        description:
          'Professional corporate site with practice area pages, team profiles, and contact forms.',
        tags: ['Corporate', 'SEO', 'Forms'],
      },
      'trondheim-tech': {
        title: 'Trondheim Tech Hub',
        client: 'Coworking space',
        description:
          'Dynamic site showcasing membership plans, event calendar, and community highlights.',
        tags: ['Events', 'Membership', 'React'],
      },
      'studio-lumiere': {
        title: 'Studio Lumière',
        client: 'Photography studio',
        description:
          'Portfolio-driven design with fullscreen galleries and a minimal, editorial aesthetic.',
        tags: ['Portfolio', 'Gallery', 'Brand'],
      },
    },
  },
  faq: {
    pageTitle: 'Frequently asked questions',
    pageDescription:
      'Answers about our technical stacks, timelines, processes, and how Fremtid Web works with clients.',
    contactPrompt: 'Still have questions? We are happy to help.',
    contactCta: 'Request a quote',
    items: {
      techStack: {
        question: 'What technology stack do you use?',
        answer:
          'We primarily build with React, TypeScript, Vite, and Tailwind CSS. For content management we integrate headless CMS solutions when needed. All sites are deployed with HTTPS, optimised for performance, and tested for accessibility.',
      },
      timeline: {
        question: 'How long does a typical project take?',
        answer:
          'A Starter Pack site usually takes 3–4 weeks. Growth Package projects run 6–8 weeks. Enterprise projects vary based on scope but typically start at 10+ weeks. We provide a detailed timeline in every proposal.',
      },
      process: {
        question: 'What does your process look like?',
        answer:
          'We follow four clear steps: request a quote, receive our offer, review the first design draft, then development and publishing. You are involved at each milestone with structured feedback rounds.',
      },
      support: {
        question: 'Do you offer support after launch?',
        answer:
          'Yes. Every package includes post-launch support (30–90 days depending on tier). We also offer ongoing maintenance agreements for updates, security patches, and content changes.',
      },
      pricing: {
        question: 'How does pricing work?',
        answer:
          'We offer three transparent package tiers — Starter, Growth, and Complete/Enterprise. Each includes core technical foundations (content & design, SSL, domain & email setup). Custom scopes receive tailored quotes.',
      },
      accessibility: {
        question: 'Are your websites accessible?',
        answer:
          'Accessibility is a core requirement, not an add-on. We build to WCAG 2.1 AA standards: semantic HTML, keyboard navigation, sufficient colour contrast, screen reader compatibility, and focus management.',
      },
    },
  },
  services: {
    pageTitle: 'Services & Packages',
    pageDescription:
      'Transparent website packages from Fremtid Web — from starter sites to complete enterprise solutions.',
    packagesHeading: 'Choose your package',
    packagesSubheading:
      'Every tier includes our core technical foundations. Pick the level that matches your goals and budget.',
    mostPopular: 'Most Popular',
    getStarted: 'Get started',
    contactUs: 'Request a quote',
    coreInclusionsHeading: 'Core inclusions in every package',
    coreInclusionsSubheading:
      'These essentials are included with every Fremtid Web package — no hidden add-ons.',
    processHeading: 'Our process',
    processSubheading:
      'A clear, collaborative path from first conversation to launch.',
    packages: {
      starter: {
        name: 'Starter Pack',
        description:
          'A polished online presence for small businesses and solo founders getting started.',
        price: 'From 25 000 NOK',
        priceNote: 'One-time project fee',
        features: [
          'Up to 5 pages',
          'Mobile-responsive design',
          'Contact form integration',
          'Basic SEO setup',
          '30 days post-launch support',
        ],
      },
      growth: {
        name: 'Growth Package',
        description:
          'For established businesses ready to scale with richer content and integrations.',
        price: 'From 45 000 NOK',
        priceNote: 'One-time project fee',
        features: [
          'Up to 12 pages',
          'Custom UI/UX design',
          'CMS integration',
          'Analytics & tracking setup',
          'Performance optimization',
          '60 days post-launch support',
        ],
      },
      enterprise: {
        name: 'Complete / Enterprise Package',
        description:
          'Full-service builds for complex requirements, multi-language sites, and long-term partnerships.',
        price: 'Custom pricing',
        priceNote: 'Tailored to your scope',
        features: [
          'Unlimited pages & sections',
          'Advanced integrations & APIs',
          'Multi-language support',
          'Accessibility audit (WCAG 2.1 AA)',
          'Dedicated project manager',
          '90 days priority support',
        ],
      },
    },
    coreInclusions: {
      contentDesign: {
        title: 'Content & design',
        description:
          'Professional layout, typography, and visual direction aligned with your brand.',
      },
      ssl: {
        title: 'SSL certificate',
        description:
          'Secure HTTPS encryption to protect visitors and build trust with search engines.',
      },
      domainEmail: {
        title: 'Domain & email setup',
        description:
          'Guidance and configuration for your domain, DNS, and professional email accounts.',
      },
    },
    process: {
      quote: {
        title: 'Request a quote',
        description:
          'Tell us about your goals, timeline, and budget. We respond within two business days.',
      },
      offer: {
        title: 'We give an offer',
        description:
          'You receive a detailed proposal with scope, milestones, and transparent pricing.',
      },
      design: {
        title: 'First draft of design',
        description:
          'We share wireframes and visual concepts for your feedback before development begins.',
      },
      development: {
        title: 'Development and publishing',
        description:
          'We build, test for accessibility, and launch your site — then hand over everything you need.',
      },
    },
  },
  footer: {
    rights: 'All rights reserved.',
    contact: 'hello@fremtidweb.no',
  },
};
