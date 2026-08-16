/** Portfolio project identifiers. */
export type ProjectId = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

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
  readonly thumbnail: string;
  readonly link: string;
}
