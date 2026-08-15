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
    heroTitle: 'We build fast, accessible, and user-friendly digital products',
    heroSubtitle:
      'We craft accessible, high-performance websites and brand experiences for Norwegian businesses ready to grow online.',
    heroCta: 'View our packages',
    heroSecondaryCta: 'See our work',
    servicesHeading: 'What we do',
    servicesSubheading:
      'Front-end development and graphic design — delivered as one cohesive team.',
    serviceItems: {
      development: {
        title: 'Custom Website & Software Development',
        description:
          'We build fast, secure, and user-friendly websites and apps tailored to your business goals, ensuring a seamless experience for all users.',
      },
      design: {
        title: 'Graphic & Visual Design',
        description:
          'Clean layouts, professional typography, and eye-catching designs that build trust with your customers on any device.',
      },
      maintenance: {
        title: 'Launch & Ongoing Support',
        description:
          'We handle domain setup, secure SSL certificates, publishing, and regular updates so your website always runs smoothly and safely.',
      },
    },
    techForAll: {
      tag: 'For small & medium businesses',
      title: 'Technology available to everyone',
      description1:
        'Fremtid Web was founded with a clear vision: to lower the barrier for small and mid-sized businesses looking for modern, professional websites—regardless of company size.',
      description2:
        'Great digital solutions should not be reserved for enterprises with large budgets. We offer flexible packages tailored for local businesses and service providers with uncompromised quality and transparent pricing.',
      description3:
        'Whether you run a local café, salon, boutique, or consulting firm, we help you stand out and thrive in the digital space.',
    },
    featuredHeading: 'Featured projects',
    featuredSubheading:
      'A selection of recent front-end work from the Fremtid Web portfolio.',
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
      'Explore our portfolio of front-end applications, interactive experiences, and digital platforms built with modern web technologies.',
    filterAll: 'All',
    filterWeb: 'Web development',
    filterDesign: 'Design',
    filterEcommerce: 'E-commerce',
    viewCaseStudy: 'View case study',
    noResults: 'No projects match the selected filter.',
    projects: {
      1: {
        title: 'Holidaze 🏡',
        client: 'Accommodation Booking Platform',
        description:
          'Modern accommodation booking platform built with React and TypeScript, featuring venue management, bookings, authentication, and a scalable frontend architecture.',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Vitest'],
      },
      2: {
        title: 'Online Shop 🛒',
        client: 'Frontend E-commerce Application',
        description:
          'Frontend e-commerce application built with React and TypeScript, focused on performance, scalability, and a clean user experience.',
        tags: [
          'React',
          'TypeScript',
          'TanStack Query',
          'Zustand',
          'Tailwind CSS',
        ],
      },
      3: {
        title: 'NewsHub 📰',
        client: 'Full-stack News Platform',
        description:
          'Full-stack news platform built with React, TypeScript, and Tailwind CSS, using Supabase as a Backend-as-a-Service for authentication and database management.',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
      },
      4: {
        title: 'Auction House 🏷️',
        client: 'Responsive Auction Platform',
        description:
          'Responsive and accessible auction platform built with Vanilla TypeScript and Tailwind CSS, integrating the Noroff Auction House API v2.',
        tags: ['TypeScript', 'Tailwind CSS', 'Noroff API v2', 'JWT'],
      },
      5: {
        title: 'Flip Match – Memory Card Game',
        client: 'Interactive Web Game',
        description:
          'A responsive memory card matching game built with React, TypeScript, and Tailwind CSS, featuring smooth interactions and simple game mechanics.',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      },
      6: {
        title: 'Rainy Days – Interactive Product Storefronts',
        client: 'Dynamic Online Shop',
        description:
          'A dynamic online shop built with vanilla JavaScript and real-time product data from an external API.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'REST API'],
      },
      7: {
        title: 'Social Media App – Frontend Social Platform',
        client: 'Social Interaction App',
        description:
          'Frontend social media application with post management, interactions, and responsive design built using TypeScript and Vite.',
        tags: ['TypeScript', 'Tailwind CSS', 'Vite', 'Vitest'],
      },
      8: {
        title: 'Lens of Wanderlust 📸 – Travel Vlog Page',
        client: 'Travel Vlog Website',
        description:
          'Responsive travel vlog website with API-driven content, videos, and image-based storytelling.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'REST APIs'],
      },
      9: {
        title: 'Square Pumpkin 🤳🏼 – Social Media Platform',
        client: 'Interactive Social Platform',
        description:
          'Interactive social media platform with photo sharing, personalized feeds, and built-in camera functionality.',
        tags: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'],
      },
      10: {
        title: 'The Community Science Museum: Discover Together',
        client: 'Educational Museum Website',
        description:
          'Interactive and responsive science museum website designed for children, families, and educators.',
        tags: ['HTML5', 'CSS3', 'JavaScript'],
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
