import { Link } from 'react-router-dom';
import { Code, Palette, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const SERVICE_ICONS = {
  development: Code,
  design: Palette,
  maintenance: ShieldCheck,
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
      className='px-4 py-16 mx-auto bg-white sm:px-6 lg:px-8 max-w-7xl'
    >
      <div className='max-w-2xl mx-auto mb-12 text-center'>
        <h2
          id='home-services-heading'
          className='mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-dark-chocolate'
        >
          {t.home.servicesHeading ||
            'Alt du trenger for en sterk digital tilstedeværelse'}
        </h2>
        <p className='mt-3 text-base text-dark-chocolate opacity-80'>
          {t.home.servicesSubheading ||
            'Vi kombinerer solid håndverk med moderne design for å løfte din bedrift.'}
        </p>
      </div>

      <ul className='grid gap-8 sm:grid-cols-3'>
        {items.map(({ key, title, description }) => {
          const Icon = SERVICE_ICONS[key];
          return (
            <li
              key={key}
              className='relative flex flex-col justify-between p-8 transition-all duration-300 border group rounded-2xl border-cappuccino/30 bg-warm-beige hover:-translate-y-1 hover:shadow-lg focus-within:ring-2 focus-within:ring-terra-cotta focus-within:ring-offset-2'
            >
              <div>
                <div
                  className='flex items-center justify-center mb-6 transition-transform duration-300 shadow-sm w-14 h-14 rounded-xl bg-surface group-hover:scale-110'
                  aria-hidden='true'
                >
                  <Icon
                    className='w-7 h-7 text-terra-cotta'
                    strokeWidth={1.8}
                  />
                </div>
                <h3 className='text-xl font-bold tracking-tight text-dark-chocolate'>
                  {title}
                </h3>
                <p className='mt-3 text-sm leading-relaxed text-dark-chocolate opacity-90'>
                  {description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      <div className='mt-12 text-center'>
        <Link
          to='/services'
          className='inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-all duration-200 shadow-sm rounded-xl min-h-12 bg-terra-cotta text-dark-chocolate hover:bg-dark-chocolate hover:text-surface focus:outline-none focus:ring-2 focus:ring-dark-chocolate focus:ring-offset-2'
        >
          {t.home.heroCta}
        </Link>
      </div>
    </section>
  );
}
