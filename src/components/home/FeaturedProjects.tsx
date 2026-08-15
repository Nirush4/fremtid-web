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
      className='px-4 py-16 bg-warm-beige sm:px-6 lg:py-24'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='grid items-center gap-10 mb-12 lg:grid-cols-12 lg:gap-16'>
          {/* Header Column (Text First on Desktop/Mobile for natural reading order) */}
          <header className='flex flex-col justify-center h-full lg:col-span-7'>
            <h2
              id='featured-projects-heading'
              className='text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-dark-chocolate text-balance'
            >
              {t.home.featuredHeading}
            </h2>
            <p className='max-w-xl mt-4 text-base font-normal leading-relaxed sm:text-lg text-dark-chocolate/90'>
              {t.home.featuredSubheading}
            </p>
          </header>

          {/* Illustration Column */}
          <div className='w-full lg:col-span-5'>
            <IllustrationFrame
              label='Featured portfolio work illustration'
              className='hidden sm:flex sm:items-center sm:justify-center p-6 bg-surface/50 rounded-2xl border border-cappuccino/20 shadow-sm w-full h-full min-h-[220px] transition-transform duration-300 hover:scale-[1.01]'
            >
              <img
                src='/image/prosjekter.svg'
                alt=''
                aria-hidden='true'
                className='object-contain w-full h-auto max-h-56'
              />
            </IllustrationFrame>
          </div>
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

        <div className='mt-12 text-center'>
          <Link
            to='/projects'
            className='inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold transition-all duration-200 border-2 rounded-xl min-h-[48px] border-cappuccino text-dark-chocolate hover:bg-surface hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-dark-chocolate focus:ring-offset-2'
          >
            {t.home.viewAllProjects}
          </Link>
        </div>
      </div>
    </section>
  );
}
