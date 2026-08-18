import { Link } from 'react-router-dom';
import { PACKAGE_TIERS } from '../data/services';
import { useLanguage } from '../context/LanguageContext';
import { CoreInclusionsBanner } from '../components/services/CoreInclusionsBanner';
import { PackageTierCard } from '../components/services/PackageTierCard';
import { ProcessTimeline } from '../components/services/ProcessTimeline';
import { PageIntro } from '../components/ui/IllustrationFrame';

export function ServicesPage() {
  const { t } = useLanguage();

  return (
    <>
      <section
        aria-labelledby='services-page-title'
        className='px-4 py-16 bg-warm-beige sm:px-6'
      >
        <PageIntro
          title={t.services.pageTitle}
          titleId='services-page-title'
          description={t.services.pageDescription}
          svgUrl='/image/services.svg'
          illustrationLabel='Service packages illustration'
        />
      </section>

      <section
        aria-labelledby='packages-heading'
        className='px-4 py-16 bg-surface sm:px-6'
      >
        <div className='max-w-6xl mx-auto'>
          <header className='max-w-2xl mx-auto mb-12 text-center'>
            <h2
              id='packages-heading'
              className='text-2xl font-bold text-dark-chocolate sm:text-3xl'
            >
              {t.services.packagesHeading}
            </h2>
            <p className='mt-3 text-base leading-relaxed text-dark-chocolate'>
              {t.services.packagesSubheading}
            </p>
          </header>

          <div className='grid gap-8 lg:grid-cols-3'>
            {PACKAGE_TIERS.map(({ id, isPopular }) => (
              <PackageTierCard
                key={id}
                id={id}
                content={t.services.packages[id]}
                isPopular={isPopular}
              />
            ))}
          </div>
        </div>
      </section>

      <section className='px-4 py-16 bg-warm-beige sm:px-6'>
        <div className='max-w-6xl mx-auto'>
          <CoreInclusionsBanner />
        </div>
      </section>

      <section className='px-4 py-16 sm:px-6 bg-warm-beige/50'>
        <div className='max-w-6xl mx-auto'>
          <div className='max-w-3xl mb-12 lg:mb-16'>
            <div className='w-12 h-1 mb-4 rounded-full bg-terra-cotta' />
            <h2
              id='services-process-heading'
              className='text-2xl font-bold text-dark-chocolate sm:text-3xl'
            >
              {t.services.processHeading}
            </h2>
            <p className='mt-4 text-lg leading-relaxed text-dark-chocolate/80'>
              {t.services.processSubheading}
            </p>
          </div>

          <div className='relative p-6 overflow-hidden border shadow-sm bg-surface rounded-3xl border-dark-chocolate/5 sm:p-12'>
            <div className='absolute top-0 right-0 w-64 h-64 -mt-20 -mr-20 rounded-full pointer-events-none bg-terra-cotta/5 blur-2xl' />
            <ProcessTimeline embedded />
          </div>
        </div>
      </section>

      <section className='px-6 py-16 bg-warm-beige/30 sm:px-10 '>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='flex justify-center mb-10'>
            <div className='w-16 h-1.5 rounded-full bg-terra-cotta' />
          </div>

          <h2 className='text-3xl font-extrabold tracking-tighter text-dark-chocolate sm:text-5xl lg:text-6xl'>
            {t.services.contactUs}
          </h2>

          <p className='max-w-2xl mx-auto mt-6 text-lg leading-relaxed sm:text-xl text-dark-chocolate/70'>
            {t.brand.tagline}
          </p>

          {/* Premium Pill Button with inline SVG arrow */}
          <div className='mt-12'>
            <Link
              to='/contact'
              className='inline-flex items-center justify-center px-10 py-4 text-base font-bold tracking-wide uppercase transition-all duration-300 rounded-full shadow-xl group bg-dark-chocolate text-surface hover:bg-terra-cotta hover:scale-105 shadow-dark-chocolate/10'
            >
              {t.services.contactUs}
              <svg
                className='w-5 h-5 ml-3 -mr-1 transition-transform duration-300 group-hover:translate-x-1'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M14 5l7 7m0 0l-7 7m7-7H3'
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
