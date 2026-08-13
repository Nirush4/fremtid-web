import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { PROJECTS } from '../../data/projects';
import { ProjectCard } from '../projects/ProjectCard';

export function FeaturedProjects() {
  const { t } = useLanguage();
  const featured = PROJECTS.filter((project) => project.featured);

  return (
    <section
      aria-labelledby='featured-projects-heading'
      className='px-4 py-16 bg-base-white sm:px-6'
    >
      <div className='max-w-6xl mx-auto'>
        <header className='max-w-2xl mx-auto mb-10 text-center'>
          <h2
            id='featured-projects-heading'
            className='text-2xl font-bold text-charcoal-slate sm:text-3xl'
          >
            {t.home.featuredHeading}
          </h2>
          <p className='mt-3 text-base leading-relaxed text-charcoal-slate'>
            {t.home.featuredSubheading}
          </p>
        </header>

        <ul className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {featured.map((project) => (
            <li key={project.id}>
              <ProjectCard
                projectId={project.id}
                content={t.projects.projects[project.id]}
              />
            </li>
          ))}
        </ul>

        <div className='mt-10 text-center'>
          <Link
            to='/projects'
            className='inline-flex items-center justify-center px-6 py-3 text-sm font-semibold border-2 rounded-lg min-h-11 border-mustard-gold text-charcoal-slate hover:bg-warm-taupe'
          >
            {t.home.viewAllProjects}
          </Link>
        </div>
      </div>
    </section>
  );
}
