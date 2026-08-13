/** FAQ item identifiers. */
export type FaqItemId =
  | 'techStack'
  | 'timeline'
  | 'process'
  | 'support'
  | 'pricing'
  | 'accessibility';

/** Non-localized FAQ metadata. */
export interface FaqItem {
  readonly id: FaqItemId;
}

/** Localized FAQ item content. */
export interface FaqItemContent {
  readonly question: string;
  readonly answer: string;
}
