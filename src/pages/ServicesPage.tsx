import { PACKAGE_TIERS } from '../data/services';
import { useLanguage } from '../context/LanguageContext';
import { CoreInclusionsBanner } from '../components/services/CoreInclusionsBanner';
import { PackageTierCard } from '../components/services/PackageTierCard';
import { ProcessTimeline } from '../components/services/ProcessTimeline';
import { PageIntro } from '../components/ui/IllustrationFrame';
import CallToAction from '../components/ui/CallToAction';

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

      <CallToAction t={t} />
    </>
  );
}
