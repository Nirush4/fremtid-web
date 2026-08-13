/** Portfolio project identifiers. */
export type ProjectId =
  | 'nordic-brew'
  | 'fjord-wellness'
  | 'oslo-artisan'
  | 'bergen-legal'
  | 'trondheim-tech'
  | 'studio-lumiere';

/** Portfolio project category identifiers. */
export type ProjectCategoryId = 'all' | 'web' | 'design' | 'ecommerce';

/** Non-localized project metadata. */
export interface Project {
  readonly id: ProjectId;
  readonly category: Exclude<ProjectCategoryId, 'all'>;
  readonly featured: boolean;
}

/** Localized project card content. */
export interface ProjectContent {
  readonly title: string;
  readonly client: string;
  readonly description: string;
  readonly tags: readonly string[];
}
