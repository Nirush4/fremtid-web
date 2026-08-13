import { Globe, Lock, Palette } from 'lucide-react';
import { CORE_INCLUSIONS } from '../../data/services';
import { useLanguage } from '../../context/LanguageContext';
import type { CoreInclusionId } from '../../types/services';

const INCLUSION_ICONS: Record<CoreInclusionId, typeof Palette> = {
  contentDesign: Palette,
  ssl: Lock,
  domainEmail: Globe,
};

export function CoreInclusionsBanner() {
  const { t } = useLanguage();

  return (
    <section
      aria-labelledby='core-inclusions-heading'
      className='px-6 py-10 rounded-2xl bg-warm-taupe sm:px-10'
    >
      <header className='max-w-2xl mx-auto mb-8 text-center'>
        <h2
          id='core-inclusions-heading'
          className='text-2xl font-bold text-charcoal-slate sm:text-3xl'
        >
          {t.services.coreInclusionsHeading}
        </h2>
        <p className='mt-3 text-base leading-relaxed text-charcoal-slate'>
          {t.services.coreInclusionsSubheading}
        </p>
      </header>

      <ul className='grid max-w-5xl gap-6 mx-auto sm:grid-cols-3'>
        {CORE_INCLUSIONS.map(({ id }) => {
          const Icon = INCLUSION_ICONS[id];
          const content = t.services.coreInclusions[id];

          return (
            <li
              key={id}
              className='p-6 border rounded-xl border-mustard-gold/30 bg-base-white'
            >
              <div
                className='flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-mustard-gold'
                aria-hidden='true'
              >
                <Icon className='w-6 h-6 text-charcoal-slate' strokeWidth={2} />
              </div>
              <h3 className='text-lg font-semibold text-charcoal-slate'>
                {content.title}
              </h3>
              <p className='mt-2 text-sm leading-relaxed text-charcoal-slate'>
                {content.description}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
