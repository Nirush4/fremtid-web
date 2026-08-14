import { useMemo, useState } from 'react';
import { PROJECTS } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectFilters } from '../components/projects/ProjectFilters';
import { PageIntro, IllustrationFrame } from '../components/ui/IllustrationFrame';
import { ProjectsIllustration } from '../components/illustrations/ProjectsIllustration';
import type { ProjectCategoryId } from '../types/projects';

export function ProjectsPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategoryId>('all');

  const filteredProjects = useMemo(
    () =>
      activeCategory === 'all'
        ? PROJECTS
        : PROJECTS.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  return (
    <>
      <section
        aria-labelledby="projects-page-title"
        className="bg-warm-beige px-4 py-16 sm:px-6"
      >
        <PageIntro
          title={t.projects.pageTitle}
          titleId="projects-page-title"
          description={t.projects.pageDescription}
          illustration={<ProjectsIllustration />}
          illustrationLabel="Portfolio projects illustration"
        />
      </section>

      <section
        aria-labelledby="projects-grid-heading"
        className="bg-surface px-4 py-16 sm:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <h2
              id="projects-grid-heading"
              className="text-2xl font-bold text-dark-chocolate sm:text-3xl"
            >
              {t.projects.pageTitle}
            </h2>
            <IllustrationFrame
              label="Project grid preview illustration"
              className="hidden max-w-xs lg:block"
            >
              <ProjectsIllustration />
            </IllustrationFrame>
          </div>

          <ProjectFilters activeCategory={activeCategory} onChange={setActiveCategory} />

          {filteredProjects.length === 0 ? (
            <p className="mt-10 text-center text-base text-dark-chocolate" role="status">
              {t.projects.noResults}
            </p>
          ) : (
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
