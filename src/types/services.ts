/** Identifiers for Fremtid Web service package tiers. */
export type PackageTierId = 'starter' | 'growth' | 'enterprise';

/** Identifiers for the agency workflow process steps. */
export type ProcessStepId = 'quote' | 'offer' | 'design' | 'development';

/** Identifiers for core inclusions included in every package. */
export type CoreInclusionId = 'contentDesign' | 'ssl' | 'domainEmail';

/** Structured package tier metadata (non-localized). */
export interface PackageTier {
  readonly id: PackageTierId;
  readonly isPopular: boolean;
}

/** Structured process step metadata (non-localized). */
export interface ProcessStep {
  readonly id: ProcessStepId;
  readonly order: number;
}

/** Structured core inclusion metadata (non-localized). */
export interface CoreInclusion {
  readonly id: CoreInclusionId;
}

/** Localized copy for a single package tier. */
export interface PackageTierContent {
  readonly name: string;
  readonly description: string;
  readonly price: string;
  readonly priceNote: string;
  readonly features: readonly string[];
}

/** Localized copy for a single process step. */
export interface ProcessStepContent {
  readonly title: string;
  readonly description: string;
}

/** Localized copy for a single core inclusion item. */
export interface CoreInclusionContent {
  readonly title: string;
  readonly description: string;
}
