import type { ProjectCategoryId } from '../../types/projects';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectFiltersProps {
  readonly activeCategory: ProjectCategoryId;
  readonly onChange: (category: ProjectCategoryId) => void;
}

const FILTERS: readonly {
  id: ProjectCategoryId;
  labelKey: 'filterAll' | 'filterWeb' | 'filterDesign' | 'filterEcommerce';
}[] = [
  { id: 'all', labelKey: 'filterAll' },
  { id: 'web', labelKey: 'filterWeb' },
  { id: 'design', labelKey: 'filterDesign' },
  { id: 'ecommerce', labelKey: 'filterEcommerce' },
];

export function ProjectFilters({
  activeCategory,
  onChange,
}: ProjectFiltersProps) {
  const { t } = useLanguage();

  return (
    <div
      role='group'
      aria-label={t.projects.pageTitle}
      className='flex flex-wrap justify-center gap-2'
    >
      {FILTERS.map(({ id, labelKey }) => {
        const isActive = activeCategory === id;
        return (
          <button
            key={id}
            type='button'
            aria-pressed={isActive}
            onClick={() => onChange(id)}
            className={`min-h-11 rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              isActive
                ? 'bg-terra-cotta text-dark-chocolate hover:bg-dark-chocolate hover:text-surface'
                : 'border-2 border-cappuccino bg-surface text-dark-chocolate hover:bg-warm-beige'
            }`}
          >
            {t.projects[labelKey]}
          </button>
        );
      })}
    </div>
  );
}
