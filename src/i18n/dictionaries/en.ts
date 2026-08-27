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
    servicesTag: 'Fremtid Web Services',
    servicesCtaCard: 'Scalable Performance',
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
        title: 'Easy to use for everyone',
        description:
          'Our websites are designed to work seamlessly for all visitors, whether they use a mobile phone, computer, or require assistive technologies.',
      },
      transparent: {
        title: 'Fixed and honest pricing',
        description:
          'No hidden costs or nasty surprises. You always know exactly what you are paying for before we start.',
      },
      local: {
        title: 'Tailored to the local market',
        description:
          'We communicate clearly and can help you with both Norwegian and English content so you reach your exact target audience.',
      },
    },
    contactSection: {
      tag: 'Get in touch',
      title: 'Ready to grow your business online?',
      description:
        'Send us a message today for a friendly, no-obligation chat about your next project.',
      nameLabel: 'Full name',
      namePlaceholder: 'Full name',
      emailLabel: 'Email address',
      emailPlaceholder: 'Email address',
      phoneLabel: 'Mobile number',
      phonePlaceholder: 'Mobile number',
      packageLabel: 'Choose package',
      packagePlaceholder: 'Choose your package',
      packageOptions: {
        starter: 'Launchpad Tier',
        growth: 'Expansion Tier',
        complete: 'Enterprise Tier',
      },
      messageLabel: 'Describe your project',
      messagePlaceholder: 'Describe your project',
      submitButton: 'Send message',
      submittingButton: 'Sending...',
      successMessage:
        'Thank you for your message! We will get back to you within two business days.',
      successTitle: 'Success!',
      sendAnother: 'Send another message',
      errors: {
        nameRequired: 'Please enter your full name.',
        emailInvalid: 'Please enter a valid email address.',
        phoneRequired: 'Please enter your mobile number.',
        phoneInvalid:
          'Please enter a valid phone number containing only numbers.',
        packageRequired: 'Please choose a package.',
        messageRequired: 'Description cannot be empty.',
        messageMin: 'Description must be at least 10 characters long.',
      },
    },
  },
  about: {
    pageTitle: 'About Fremtid Web',
    pageDescription:
      'We make getting a professional website simple and stress-free. Fremtid Web is a small team dedicated to helping small and medium businesses grow online with modern designs and user-friendly technology.',
    storyHeading: 'Our story',
    storySubheading: 'The core principles and passion behind everything we do.',
    missionTitle: 'Our Mission',
    buildTitle: 'How We Build',
    presenceTitle: 'Local Presence',
    storyParagraphs: [
      'Fremtid Web was founded to help small and medium businesses compete online with the same high quality as larger agencies—without the heavy price tags or complexity.',
      'We specialize in modern web development and design, combining clean code with a strong visual identity. Every website we build focuses on fast performance, user-friendly technology, and long-term reliability.',
      'Based in Norway, we work closely with our clients in both Norwegian and English, guiding you smoothly from your first idea all the way to a live, professional website.',
    ],
    expertiseHeading: 'Our expertise',
    expertiseItems: {
      frontend: {
        title: 'Front-end development',
        description:
          'Modern web standards and frameworks chosen for exceptional speed, responsiveness, and user satisfaction.',
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
      'Explore our portfolio of websites, interactive experiences, and digital platforms built for our clients.',
    filterAll: 'All',
    filterWeb: 'Web development',
    filterDesign: 'Design',
    filterEcommerce: 'E-commerce',
    viewCaseStudy: 'View website',
    noResults: 'No projects match the selected filter.',
    projects: {
      '1': {
        title: 'Holidaze 🏡',
        client: 'Accommodation Booking Platform',
        description:
          'A modern destination for travelers looking to discover, manage, and book unique places to stay with ease and complete peace of mind.',
        tags: ['Accommodation', 'Tourism', 'Booking Portal', 'Hospitality'],
        thumbnail: '/projects/holidaze.png',
        link: 'https://holidaze-booking-hub.netlify.app/',
      },
      '2': {
        title: 'Online Shop 🛒',
        client: 'Frontend E-commerce Application',
        description:
          'A curated online storefront offering a seamless shopping experience, smooth browsing, and quick checkout for customers on the go.',
        tags: ['E-commerce', 'Online Store', 'Retail', 'Products'],
        thumbnail: '/projects/online-shopping.png',
        link: 'https://online-shopping-master.netlify.app/',
      },
      '3': {
        title: 'NewsHub 📰',
        client: 'Full-stack News Platform',
        description:
          'A digital publishing hub delivering up-to-the-minute stories, investigative journalism, and engaging multimedia articles for daily readers.',
        tags: ['News', 'Articles', 'Media', 'Editorial'],
        thumbnail: '/projects/news-hub.png',
        link: 'https://news-hubnet.netlify.app/?q=&page=1',
      },
      '4': {
        title: 'Auction House 🏷️',
        client: 'Responsive Auction Platform',
        description:
          'An exciting online marketplace where collectors and enthusiasts can browse unique listings, place live bids, and secure valuable finds.',
        tags: ['Auction', 'Bidding', 'Marketplace', 'Collectibles'],
        thumbnail: '/projects/aution-house.png',
        link: 'https://auctionn-house.netlify.app/',
      },
      '5': {
        title: 'Flip Match – Memory Card Game',
        client: 'Interactive Web Game',
        description:
          'A fun and engaging casual browser game designed to test memory skills and provide lighthearted entertainment for all ages.',
        tags: ['Web Game', 'Entertainment', 'Interactive', 'Family'],
        thumbnail: '/projects/flip-match.png',
        link: 'https://flip-match-memory.netlify.app/',
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
          'We utilize modern, industry-standard web tools and frameworks to ensure lightning-fast performance, high security, and effortless maintenance. All sites are deployed with HTTPS and fully optimized.',
      },
      timeline: {
        question: 'How long does a typical project take?',
        answer:
          'A Starter Pack site usually takes 3–4 weeks. Growth Package projects run 6–8 weeks. Enterprise projects vary based on scope but typically start at 10+ weeks. We provide a detailed timeline in every proposal.',
      },
      process: {
        question: 'What does your process look like?',
        answer:
          'We follow four clear steps: request a quote, receive our offer, review the first design draft, then development and publishing.',
      },
      support: {
        question: 'Do you offer support after launch?',
        answer:
          'Yes. Every package includes post-launch support (30 days depending on tier). We also offer ongoing maintenance agreements for updates, security patches, and content changes.',
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
        name: 'Launchpad Tier',
        description:
          'Ideal for emerging businesses seeking an essential, lightweight web presence to establish credibility.',
        price: 'Coming soon!',
        priceNote: 'One-time project fee',
        features: [
          '1 landing page layout',
          'Fast and mobile-first design',
          'Integrated secure contact form',
          'Essential technical SEO configuration',
          'Custom brand typography pairing',
          'Domain and HTTPS setup assistance',
        ],
      },
      growth: {
        name: 'Expansion Tier',
        description:
          'Designed for growing companies requiring advanced content structure and audience engagement tools.',
        price: 'Coming soon!',
        priceNote: 'One-time project fee',
        features: [
          'Everything included in the Launchpad Tier',
          'Up to 5 custom-designed subpages',
          'Interactive media gallery or product listing',
          'Direct social media profile integrations',
          'Google Analytics integration & refined SEO',
          'Interactive FAQ or testimonial section',
        ],
      },
      enterprise: {
        name: 'Enterprise Tier',
        description:
          'A robust, all-inclusive ecosystem built for established enterprises demanding maximum impact and functionality.',
        price: 'Coming soon!',
        priceNote: 'Tailored to your scope',
        features: [
          'Everything included in the Expansion Tier',
          'Up to 10 comprehensive pages',
          'Dynamic blog, resource center, or news feed',
          'Comprehensive SEO audit + performance optimization',
          '1 month of complimentary priority support',
          'Custom web asset animations and micro-interactions',
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
          'You receive a detailed proposal outlining project scope, timelines, and transparent pricing.',
      },
      design: {
        title: 'First design draft',
        description:
          'We share wireframes and visual concepts for your feedback before development begins.',
      },
      development: {
        title: 'Development & launch',
        description:
          'We build, test for accessibility, and launch your website — handing over everything you need.',
      },
    },
  },
  notFound: {
    title: 'Page not found',
    subtitle:
      'Oops! It looks like the page you are looking for has moved or no longer exists.',
    backHome: 'Back to home',
  },
  footer: {
    rights: 'All rights reserved.',
    contact: 'hello@fremtidweb.no',
    navigationTitle: 'Navigation',
    getInTouchTitle: 'Get in Touch',
    privacyPolicy: 'Privacy Policy',
    backToTop: 'Back to top',
  },
};
