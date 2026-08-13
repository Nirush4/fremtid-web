import { Link } from 'react-router-dom';
import { Code, Palette, Rocket } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const SERVICE_ICONS = {
  development: Code,
  design: Palette,
  maintenance: Rocket,
} as const;

export function ServicesOverview() {
  const { t } = useLanguage();

  const items = [
    { key: 'development' as const, ...t.home.serviceItems.development },
    { key: 'design' as const, ...t.home.serviceItems.design },
    { key: 'maintenance' as const, ...t.home.serviceItems.maintenance },
  ];

  return (
    <section
      aria-labelledby='home-services-heading'
      className='px-4 py-16 bg-warm-taupe sm:px-6'
    >
      <div className='max-w-6xl mx-auto'>
        <header className='max-w-2xl mx-auto mb-10 text-center'>
          <h2
            id='home-services-heading'
            className='text-2xl font-bold text-charcoal-slate sm:text-3xl'
          >
            {t.home.servicesHeading}
          </h2>
          <p className='mt-3 text-base leading-relaxed text-charcoal-slate'>
            {t.home.servicesSubheading}
          </p>
        </header>

        <ul className='grid gap-6 sm:grid-cols-3'>
          {items.map(({ key, title, description }) => {
            const Icon = SERVICE_ICONS[key];
            return (
              <li key={key} className='p-6 rounded-xl bg-base-white'>
                <div
                  className='flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-mustard-gold'
                  aria-hidden='true'
                >
                  <Icon
                    className='w-6 h-6 text-charcoal-slate'
                    strokeWidth={2}
                  />
                </div>
                <h3 className='text-lg font-semibold text-charcoal-slate'>
                  {title}
                </h3>
                <p className='mt-2 text-sm leading-relaxed text-charcoal-slate'>
                  {description}
                </p>
              </li>
            );
          })}
        </ul>

        <div className='mt-8 text-center'>
          <Link
            to='/services'
            className='inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg min-h-11 bg-mustard-gold text-charcoal-slate hover:bg-charcoal-slate hover:text-base-white'
          >
            {t.home.heroCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
