import { useMemo, useState } from 'react';
import { PROJECTS } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectFilters } from '../components/projects/ProjectFilters';
import type { ProjectCategoryId } from '../types/projects';

export function ProjectsPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategoryId>('all');

  const filteredProjects = useMemo(
    () =>
      activeCategory === 'all'
        ? PROJECTS
        : PROJECTS.filter((project) => project.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
      <section
        aria-labelledby='projects-page-title'
        className='px-4 py-16 bg-base-white sm:px-6'
      >
        <div className='max-w-4xl mx-auto text-center'>
          <h1
            id='projects-page-title'
            className='text-3xl font-bold text-charcoal-slate sm:text-4xl'
          >
            {t.projects.pageTitle}
          </h1>
          <p className='max-w-2xl mx-auto mt-4 text-base leading-relaxed text-charcoal-slate'>
            {t.projects.pageDescription}
          </p>
        </div>
      </section>

      <section
        aria-labelledby='projects-grid-heading'
        className='px-4 py-16 bg-warm-taupe sm:px-6'
      >
        <div className='max-w-6xl mx-auto'>
          <h2 id='projects-grid-heading' className='sr-only'>
            {t.projects.pageTitle}
          </h2>

          <ProjectFilters
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />

          {filteredProjects.length === 0 ? (
            <p
              className='mt-10 text-base text-center text-charcoal-slate'
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
                    content={t.projects.projects[project.id]}
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
