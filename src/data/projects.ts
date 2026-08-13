import type { Project } from '../types/projects';

export const PROJECTS: readonly Project[] = [
  { id: 'nordic-brew', category: 'web', featured: true },
  { id: 'fjord-wellness', category: 'design', featured: true },
  { id: 'oslo-artisan', category: 'ecommerce', featured: true },
  { id: 'bergen-legal', category: 'web', featured: false },
  { id: 'trondheim-tech', category: 'web', featured: false },
  { id: 'studio-lumiere', category: 'design', featured: false },
] as const;
