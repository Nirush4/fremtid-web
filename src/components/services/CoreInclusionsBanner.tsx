import { Globe, Lock, Palette } from 'lucide-react';
import { CORE_INCLUSIONS } from '../../data/services';
import { useLanguage } from '../../context/LanguageContext';
import type { CoreInclusionId } from '../../types/services';

const INCLUSION_ICONS: Record<CoreInclusionId, typeof Palette> = {
  contentDesign: Palette,
  ssl: Lock,
  domainEmail: Globe,
};

interface CoreInclusionsBannerProps {
  readonly embedded?: boolean;
}

export function CoreInclusionsBanner({
  embedded = false,
}: CoreInclusionsBannerProps) {
  const { t } = useLanguage();

  return (
    <div
      aria-labelledby={embedded ? undefined : 'core-inclusions-heading'}
      className={embedded ? '' : 'rounded-2xl bg-warm-beige '}
    >
      {!embedded && (
        <header className='max-w-2xl mx-auto mb-12 text-center'>
          <h2
            id='core-inclusions-heading'
            className='text-2xl font-bold text-dark-chocolate sm:text-3xl'
          >
            {t.services.coreInclusionsHeading}
          </h2>
          <p className='mt-3 text-base leading-relaxed text-dark-chocolate'>
            {t.services.coreInclusionsSubheading}
          </p>
        </header>
      )}

      <ul className='grid max-w-5xl gap-8 mx-auto md:grid-cols-3'>
        {CORE_INCLUSIONS.map(({ id }) => {
          const Icon = INCLUSION_ICONS[id];
          const content = t.services.coreInclusions[id];

          return (
            <li
              key={id}
              className='flex flex-col justify-between p-8 transition-all duration-300 border shadow-sm group rounded-2xl bg-surface hover:-translate-y-1 hover:shadow-md border-dark-chocolate/5'
            >
              <div>
                <div
                  className='flex items-center justify-center mx-auto mb-6 transition-colors h-14 w-14 rounded-xl bg-terra-cotta/10 text-terra-cotta group-hover:bg-terra-cotta group-hover:text-surface'
                  aria-hidden='true'
                >
                  <Icon
                    className='transition-transform duration-300 h-7 w-7 group-hover:scale-110'
                    strokeWidth={2}
                  />
                </div>
                <h3 className='text-lg font-bold text-center text-dark-chocolate'>
                  {content.title}
                </h3>
                <p className='mt-3 text-sm leading-relaxed text-center text-dark-chocolate/80'>
                  {content.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
