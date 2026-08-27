import { Link } from 'react-router-dom';
import { Code, Palette, ShieldCheck, ArrowRight } from 'lucide-react';
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

  const [mainService, designService, maintenanceService] = items;
  const MainIcon = SERVICE_ICONS.development;
  const DesignIcon = SERVICE_ICONS.design;
  const MaintenanceIcon = SERVICE_ICONS.maintenance;

  return (
    <section
      aria-labelledby='home-services-heading'
      className='px-4 py-20 mx-auto bg-surface sm:px-6 lg:px-8 max-w-7xl'
    >
      {/* Section Header */}
      <div className='flex flex-col justify-between gap-6 mb-12 md:flex-row md:items-end'>
        <div className='max-w-2xl'>
          <span className='text-xs font-bold tracking-widest uppercase text-terra-cotta'>
            {t.home.servicesTag || 'Fremtid Web Services'}
          </span>
          <h2
            id='home-services-heading'
            className='mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-dark-chocolate'
          >
            {t.home.servicesHeading ||
              'Alt du trenger for en sterk digital tilstedeværelse'}
          </h2>
          <p className='mt-3 text-base text-dark-chocolate/80'>
            {t.home.servicesSubheading ||
              'Vi kombinerer solid håndverk med moderne design for å løfte din bedrift.'}
          </p>
        </div>

        <Link
          to='/services'
          className='inline-flex items-center self-start gap-2 text-sm font-bold transition-colors md:self-auto text-terra-cotta hover:text-dark-chocolate group'
        >
          <span>{t.home.viewAllProjects || 'Se alle tjenester'}</span>
          <ArrowRight
            className='w-4 h-4 transition-transform group-hover:translate-x-1'
            aria-hidden='true'
          />
        </Link>
      </div>

      {/* Asymmetrical Bento Grid Layout */}
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-12'>
        {/* Card 1: Featured / Primary Bento Box */}
        <div className='flex flex-col justify-between p-8 transition-all duration-300 border lg:col-span-7 sm:p-10 rounded-3xl border-cappuccino/30 bg-warm-beige/80 hover:shadow-xl group'>
          <div>
            <div className='flex items-center justify-between mb-8'>
              <div
                className='flex items-center justify-center w-16 h-16 transition-transform duration-300 shadow-md rounded-2xl bg-surface group-hover:scale-105'
                aria-hidden='true'
              >
                <MainIcon
                  className='w-8 h-8 text-terra-cotta'
                  strokeWidth={1.7}
                />
              </div>
            </div>
            <h3 className='text-2xl font-bold tracking-tight text-dark-chocolate sm:text-3xl'>
              {mainService.title}
            </h3>
            <p className='max-w-xl mt-4 text-base leading-relaxed text-dark-chocolate/80'>
              {mainService.description}
            </p>
          </div>
          <div className='flex items-center justify-between pt-8 mt-8 text-xs font-semibold tracking-wider uppercase border-t border-dark-chocolate/10 text-dark-chocolate/60'>
            <span>{t.home.servicesCtaCard || 'Skreddersydd kode'}</span>
          </div>
        </div>

        {/* Column Group for Cards 2 & 3 */}
        <div className='flex flex-col gap-6 lg:col-span-5'>
          {/* Card 2: Design */}
          <div className='flex flex-col justify-between p-6 transition-all duration-300 border sm:p-8 rounded-3xl border-cappuccino/30 bg-warm-beige/40 hover:bg-warm-beige/80 hover:shadow-lg group'>
            <div className='flex items-start gap-5'>
              <div
                className='flex items-center justify-center w-12 h-12 transition-transform duration-300 shadow-sm shrink-0 rounded-xl bg-surface group-hover:scale-105'
                aria-hidden='true'
              >
                <DesignIcon
                  className='w-6 h-6 text-terra-cotta'
                  strokeWidth={1.8}
                />
              </div>
              <div>
                <h3 className='text-lg font-bold tracking-tight text-dark-chocolate'>
                  {designService.title}
                </h3>
                <p className='mt-2 text-sm leading-relaxed text-dark-chocolate/80'>
                  {designService.description}
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Maintenance */}
          <div className='flex flex-col justify-between p-6 transition-all duration-300 border sm:p-8 rounded-3xl border-cappuccino/30 bg-warm-beige/40 hover:bg-warm-beige/80 hover:shadow-lg group'>
            <div className='flex items-start gap-5'>
              <div
                className='flex items-center justify-center w-12 h-12 transition-transform duration-300 shadow-sm shrink-0 rounded-xl bg-surface group-hover:scale-105'
                aria-hidden='true'
              >
                <MaintenanceIcon
                  className='w-6 h-6 text-terra-cotta'
                  strokeWidth={1.8}
                />
              </div>
              <div>
                <h3 className='text-lg font-bold tracking-tight text-dark-chocolate'>
                  {maintenanceService.title}
                </h3>
                <p className='mt-2 text-sm leading-relaxed text-dark-chocolate/80'>
                  {maintenanceService.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Button */}
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
