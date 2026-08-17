import { useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectFilters } from '../components/projects/ProjectFilters';
import {
  PageIntro,
  IllustrationFrame,
} from '../components/ui/IllustrationFrame';
import { ProjectsIllustration } from '../components/illustrations/ProjectsIllustration';
import type { ProjectCategoryId, ProjectId } from '../types/projects';

// Use Partial<Record<...>> so not all project IDs are strictly required to be listed
const PROJECT_CATEGORIES: Partial<Record<ProjectId, ProjectCategoryId>> = {
  '1': 'web',
  '2': 'ecommerce',
  '3': 'web',
  '4': 'ecommerce',
  '5': 'design',
  '6': 'web',
  '7': 'web',
  '8': 'design',
  '9': 'web',
};

export function ProjectsPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategoryId>('all');

  const projectsList = useMemo(() => {
    return Object.entries(t.projects.projects).map(([idKey, content]) => {
      const projectId = idKey as ProjectId;
      return {
        id: projectId,
        category: PROJECT_CATEGORIES[projectId] ?? 'web',
        content,
      };
    });
  }, [t]);

  const filteredProjects = useMemo(
    () =>
      activeCategory === 'all'
        ? projectsList
        : projectsList.filter((project) => project.category === activeCategory),
    [activeCategory, projectsList]
  );

  return (
    <>
      <section
        aria-labelledby='projects-page-title'
        className='px-4 py-16 bg-warm-beige sm:px-6'
      >
        <PageIntro
          title={t.projects.pageTitle}
          titleId='projects-page-title'
          description={t.projects.pageDescription}
          illustration={<ProjectsIllustration />}
          illustrationLabel='Portfolio projects illustration'
        />
      </section>

      <section
        aria-labelledby='projects-grid-heading'
        className='px-4 py-16 bg-surface sm:px-6'
      >
        <div className='max-w-6xl mx-auto'>
          <div className='mb-10 grid items-center gap-8 lg:grid-cols-[1fr_auto]'>
            <h2
              id='projects-grid-heading'
              className='text-2xl font-bold text-dark-chocolate sm:text-3xl'
            >
              {t.projects.pageTitle}
            </h2>
            <IllustrationFrame
              label='Project grid preview illustration'
              className='hidden max-w-xs lg:block'
            >
              <ProjectsIllustration />
            </IllustrationFrame>
          </div>

          <ProjectFilters
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />

          {filteredProjects.length === 0 ? (
            <p
              className='mt-10 text-base text-center text-dark-chocolate'
              role='status'
            >
              {t.projects.noResults}
            </p>
          ) : (
            <ul className='grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3'>
              {filteredProjects.map((project) => (
                <li key={project.id}>
                  <ProjectCard
                    projectId={project.id}
                    content={project.content}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
