import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ProjectContent, ProjectId } from '../../types/projects';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectCardProps {
  readonly projectId: ProjectId;
  readonly content: ProjectContent;
}

export function ProjectCard({ projectId, content }: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <article
      aria-labelledby={`project-${projectId}`}
      className='flex flex-col h-full p-6 transition-shadow border-2 rounded-2xl border-warm-taupe bg-base-white hover:shadow-md'
    >
      <div
        className='flex items-center justify-center h-40 mb-4 rounded-xl bg-warm-taupe'
        aria-hidden='true'
      >
        <span className='text-4xl font-bold text-mustard-gold'>
          {content.title.charAt(0)}
        </span>
      </div>

      <header>
        <p className='text-xs font-medium tracking-wide uppercase text-muted-coral'>
          {content.client}
        </p>
        <h3
          id={`project-${projectId}`}
          className='mt-1 text-lg font-bold text-charcoal-slate'
        >
          {content.title}
        </h3>
      </header>

      <p className='flex-grow mt-3 text-sm leading-relaxed text-charcoal-slate'>
        {content.description}
      </p>

      <ul className='flex flex-wrap gap-2 mt-4' aria-label='Project tags'>
        {content.tags.map((tag) => (
          <li
            key={tag}
            className='px-3 py-1 text-xs font-medium rounded-full bg-warm-taupe text-charcoal-slate'
          >
            {tag}
          </li>
        ))}
      </ul>

      <Link
        to='/projects'
        className='inline-flex items-center gap-2 mt-6 text-sm font-semibold min-h-11 text-muted-coral hover:text-charcoal-slate'
        aria-label={`${t.projects.viewCaseStudy}: ${content.title}`}
      >
        {t.projects.viewCaseStudy}
        <ArrowRight className='w-4 h-4' aria-hidden='true' />
      </Link>
    </article>
  );
}
