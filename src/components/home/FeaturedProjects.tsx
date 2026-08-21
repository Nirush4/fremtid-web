import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { ProjectCard } from '../projects/ProjectCard';
import { IllustrationFrame } from '../ui/IllustrationFrame';
import type { ProjectId } from '../../types/projects';

export function FeaturedProjects() {
  const { t } = useLanguage();

  // Get project entries directly from translation dictionary and slice the first 3
  const featuredProjects = Object.entries(t.projects.projects)
    .slice(0, 3)
    .map(([idKey, content]) => ({
      id: idKey as ProjectId,
      content,
    }));

  return (
    <section
      aria-labelledby='featured-projects-heading'
      className='px-4 pb-16 bg-warm-beige sm:px-6'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='grid items-center gap-8 lg:grid-cols-12'>
          <div className='flex justify-center w-full lg:col-span-6'>
            <IllustrationFrame
              label='Featured portfolio work illustration'
              className='hidden w-full max-w-sm p-6 sm:flex sm:items-center sm:justify-center'
            >
              <img
                src='/image/prosjekter.svg'
                alt=''
                aria-hidden='true'
                className='object-contain w-full h-auto max-h-68 drop-shadow-sm'
              />
            </IllustrationFrame>
          </div>

          <header className='flex flex-col justify-center h-full lg:col-span-6'>
            <h2
              id='featured-projects-heading'
              className='text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-dark-chocolate text-balance'
            >
              {t.home.featuredHeading}
            </h2>
            <p className='max-w-xl mt-3 text-base leading-relaxed text-dark-chocolate/80'>
              {t.home.featuredSubheading}
            </p>
          </header>
        </div>

        <ul className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {featuredProjects.map((project) => (
            <li key={project.id}>
              <ProjectCard projectId={project.id} content={project.content} />
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
