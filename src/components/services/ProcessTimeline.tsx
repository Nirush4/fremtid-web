import { PROCESS_STEPS } from '../../data/services';
import { useLanguage } from '../../context/LanguageContext';

export function ProcessTimeline() {
  const { t } = useLanguage();

  return (
    <section aria-labelledby='process-heading'>
      <header className='max-w-2xl mx-auto mb-10 text-center'>
        <h2
          id='process-heading'
          className='text-2xl font-bold text-charcoal-slate sm:text-3xl'
        >
          {t.services.processHeading}
        </h2>
        <p className='mt-3 text-base leading-relaxed text-charcoal-slate'>
          {t.services.processSubheading}
        </p>
      </header>

      <ol className='grid max-w-5xl gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-4'>
        {PROCESS_STEPS.map(({ id, order }) => {
          const content = t.services.process[id];

          return (
            <li
              key={id}
              className='relative p-6 border-2 rounded-xl border-warm-taupe bg-base-white'
            >
              <span
                className='inline-flex items-center justify-center w-10 h-10 mb-4 text-lg font-bold rounded-full bg-muted-coral text-base-white'
                aria-hidden='true'
              >
                {order}
              </span>
              <h3 className='text-lg font-semibold text-charcoal-slate'>
                <span className='sr-only'>Step {order}: </span>
                {content.title}
              </h3>
              <p className='mt-2 text-sm leading-relaxed text-charcoal-slate'>
                {content.description}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
