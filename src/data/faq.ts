import type { FaqItem } from '../types/faq';

export const FAQ_ITEMS: readonly FaqItem[] = [
  { id: 'techStack' },
  { id: 'timeline' },
  { id: 'process' },
  { id: 'support' },
  { id: 'pricing' },
  { id: 'accessibility' },
] as const;
