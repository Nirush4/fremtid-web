import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { PROJECTS } from '../../data/projects';
import { ProjectCard } from '../projects/ProjectCard';
import { IllustrationFrame } from '../ui/IllustrationFrame';

export function FeaturedProjects() {
  const { t } = useLanguage();
  const featured = PROJECTS.filter((project) => project.featured);

  return (
    <section
      aria-labelledby='featured-projects-heading'
      className='px-4 py-16 bg-warm-beige sm:px-6'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='grid items-center gap-8 mb-10 lg:grid-cols-2'>
          <div className='w-full'>
            <IllustrationFrame
              label='Featured portfolio work illustration'
              className='hidden sm:flex sm:items-center sm:justify-center p-6 w-full h-full min-h-[180px]'
            >
              <img
                src='/image/prosjekter.svg'
                alt=''
                aria-hidden='true'
                className='object-contain w-full h-auto '
              />
            </IllustrationFrame>
          </div>
          <header className='flex flex-col justify-center h-full'>
            <h2
              id='featured-projects-heading'
              className='text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-dark-chocolate text-balance'
            >
              {t.home.featuredHeading}
            </h2>
            <p className='max-w-xl mt-3 text-base leading-relaxed text-dark-chocolate'>
              {t.home.featuredSubheading}
            </p>
          </header>
        </div>

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
            className='inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition-colors border-2 rounded-lg min-h-11 border-cappuccino text-dark-chocolate hover:bg-surface focus:outline-none focus:ring-2 focus:ring-dark-chocolate focus:ring-offset-2'
          >
            {t.home.viewAllProjects}
          </Link>
        </div>
      </div>
    </section>
  );
}
