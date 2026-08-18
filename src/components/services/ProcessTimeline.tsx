import { PROCESS_STEPS } from '../../data/services';
import { useLanguage } from '../../context/LanguageContext';

interface ProcessTimelineProps {
  readonly embedded?: boolean;
}

export function ProcessTimeline({ embedded = false }: ProcessTimelineProps) {
  const { t } = useLanguage();

  return (
    <section aria-labelledby={embedded ? undefined : 'process-heading'}>
      {!embedded && (
        <header className='max-w-2xl mx-auto mb-10 text-center'>
          <h2
            id='process-heading'
            className='text-2xl font-bold text-dark-chocolate sm:text-3xl'
          >
            {t.services.processHeading}
          </h2>
          <p className='mt-3 text-base leading-relaxed text-dark-chocolate'>
            {t.services.processSubheading}
          </p>
        </header>
      )}

      <ol className='grid gap-6 md:grid-cols-2'>
        {PROCESS_STEPS.map(({ id, order }) => {
          const content = t.services.process[id];

          return (
            <li
              key={id}
              className='relative p-6 border-2 rounded-xl border-warm-beige bg-warm-beige'
            >
              <span
                className='inline-flex items-center justify-center w-10 h-10 mb-4 text-lg font-bold rounded-full bg-terra-cotta text-dark-chocolate'
                aria-hidden='true'
              >
                {order}
              </span>
              <h3 className='text-lg font-semibold text-dark-chocolate'>
                <span className='sr-only'>Step {order}: </span>
                {content.title}
              </h3>
              <p className='mt-2 text-sm leading-relaxed text-dark-chocolate'>
                {content.description}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
