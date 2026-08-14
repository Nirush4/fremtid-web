import type { FaqItemContent } from '../types/faq';
import type { ProjectContent, ProjectId } from '../types/projects';
import type {
  CoreInclusionContent,
  PackageTierContent,
  ProcessStepContent,
} from '../types/services';

export type Locale = 'en' | 'no';

export interface NavTranslations {
  readonly home: string;
  readonly services: string;
  readonly about: string;
  readonly projects: string;
  readonly faq: string;
  readonly skipToContent: string;
  readonly languageSwitch: string;
  readonly openMenu: string;
  readonly closeMenu: string;
}

export interface HomeTranslations {
  readonly heroTitle: string;
  readonly heroSubtitle: string;
  readonly heroCta: string;
  readonly heroSecondaryCta: string;
  readonly servicesHeading: string;
  readonly servicesSubheading: string;
  readonly serviceItems: {
    readonly development: {
      readonly title: string;
      readonly description: string;
    };
    readonly design: { readonly title: string; readonly description: string };
    readonly maintenance: {
      readonly title: string;
      readonly description: string;
    };
  };
  readonly techForAll: {
    readonly tag: string;
    readonly title: string;
    readonly description1: string;
    readonly description2: string;
    readonly description3: string;
  };
  readonly featuredHeading: string;
  readonly featuredSubheading: string;
  readonly viewAllProjects: string;
  readonly trustHeading: string;
  readonly trustItems: {
    readonly accessible: {
      readonly title: string;
      readonly description: string;
    };
    readonly transparent: {
      readonly title: string;
      readonly description: string;
    };
    readonly local: { readonly title: string; readonly description: string };
  };
}

export interface AboutTranslations {
  readonly pageTitle: string;
  readonly pageDescription: string;
  readonly storyHeading: string;
  readonly storyParagraphs: readonly string[];
  readonly expertiseHeading: string;
  readonly expertiseItems: {
    readonly frontend: { readonly title: string; readonly description: string };
    readonly design: { readonly title: string; readonly description: string };
    readonly collaboration: {
      readonly title: string;
      readonly description: string;
    };
  };
  readonly valuesHeading: string;
  readonly values: {
    readonly quality: { readonly title: string; readonly description: string };
    readonly clarity: { readonly title: string; readonly description: string };
    readonly partnership: {
      readonly title: string;
      readonly description: string;
    };
  };
}

export interface ProjectsTranslations {
  readonly pageTitle: string;
  readonly pageDescription: string;
  readonly filterAll: string;
  readonly filterWeb: string;
  readonly filterDesign: string;
  readonly filterEcommerce: string;
  readonly viewCaseStudy: string;
  readonly noResults: string;
  readonly projects: Record<ProjectId, ProjectContent>;
}

export interface FaqTranslations {
  readonly pageTitle: string;
  readonly pageDescription: string;
  readonly contactPrompt: string;
  readonly contactCta: string;
  readonly items: {
    readonly techStack: FaqItemContent;
    readonly timeline: FaqItemContent;
    readonly process: FaqItemContent;
    readonly support: FaqItemContent;
    readonly pricing: FaqItemContent;
    readonly accessibility: FaqItemContent;
  };
}

export interface ServicesTranslations {
  readonly pageTitle: string;
  readonly pageDescription: string;
  readonly packagesHeading: string;
  readonly packagesSubheading: string;
  readonly mostPopular: string;
  readonly getStarted: string;
  readonly contactUs: string;
  readonly coreInclusionsHeading: string;
  readonly coreInclusionsSubheading: string;
  readonly processHeading: string;
  readonly processSubheading: string;
  readonly packages: {
    readonly starter: PackageTierContent;
    readonly growth: PackageTierContent;
    readonly enterprise: PackageTierContent;
  };
  readonly coreInclusions: {
    readonly contentDesign: CoreInclusionContent;
    readonly ssl: CoreInclusionContent;
    readonly domainEmail: CoreInclusionContent;
  };
  readonly process: {
    readonly quote: ProcessStepContent;
    readonly offer: ProcessStepContent;
    readonly design: ProcessStepContent;
    readonly development: ProcessStepContent;
  };
}

export interface TranslationDictionary {
  readonly brand: {
    readonly name: string;
    readonly tagline: string;
  };
  readonly nav: NavTranslations;
  readonly home: HomeTranslations;

  readonly about: AboutTranslations;
  readonly projects: ProjectsTranslations;
  readonly faq: FaqTranslations;
  readonly services: ServicesTranslations;
  readonly footer: {
    readonly rights: string;
    readonly contact: string;
  };
}

export type DictionaryMap = Record<Locale, TranslationDictionary>;
