import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { PROJECTS } from '../../data/projects';
import { ProjectCard } from '../projects/ProjectCard';
import { IllustrationFrame } from '../ui/IllustrationFrame';
import { ProjectsIllustration } from '../illustrations/ProjectsIllustration';

export function FeaturedProjects() {
  const { t } = useLanguage();
  const featured = PROJECTS.filter((project) => project.featured);

  return (
    <section aria-labelledby="featured-projects-heading" className="bg-warm-beige px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid items-center gap-8 lg:grid-cols-[1fr_minmax(240px,320px)]">
          <header>
            <h2
              id="featured-projects-heading"
              className="text-2xl font-bold text-dark-chocolate sm:text-3xl"
            >
              {t.home.featuredHeading}
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-dark-chocolate">
              {t.home.featuredSubheading}
            </p>
          </header>
          <IllustrationFrame
            label="Featured portfolio work illustration"
            className="hidden sm:block"
          >
            <ProjectsIllustration />
          </IllustrationFrame>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <li key={project.id}>
              <ProjectCard
                projectId={project.id}
                content={t.projects.projects[project.id]}
              />
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link
            to="/projects"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border-2 border-cappuccino px-6 py-3 text-sm font-semibold text-dark-chocolate hover:bg-surface"
          >
            {t.home.viewAllProjects}
          </Link>
        </div>
      </div>
    </section>
  );
}
