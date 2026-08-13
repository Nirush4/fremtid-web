import type {
  CoreInclusion,
  PackageTier,
  ProcessStep,
} from '../types/services';

/** Fremtid Web service package tiers in display order. */
export const PACKAGE_TIERS: readonly PackageTier[] = [
  { id: 'starter', isPopular: false },
  { id: 'growth', isPopular: true },
  { id: 'enterprise', isPopular: false },
] as const;

/** Fremtid Web client workflow process steps in order. */
export const PROCESS_STEPS: readonly ProcessStep[] = [
  { id: 'quote', order: 1 },
  { id: 'offer', order: 2 },
  { id: 'design', order: 3 },
  { id: 'development', order: 4 },
] as const;

/** Core inclusions bundled with every Fremtid Web package. */
export const CORE_INCLUSIONS: readonly CoreInclusion[] = [
  { id: 'contentDesign' },
  { id: 'ssl' },
  { id: 'domainEmail' },
] as const;
