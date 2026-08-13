import { Link } from 'react-router-dom';
import { PACKAGE_TIERS } from '../data/services';
import { useLanguage } from '../context/LanguageContext';
import { CoreInclusionsBanner } from '../components/services/CoreInclusionsBanner';
import { PackageTierCard } from '../components/services/PackageTierCard';
import { ProcessTimeline } from '../components/services/ProcessTimeline';

export function ServicesPage() {
  const { t } = useLanguage();

  return (
    <>
      <section
        aria-labelledby='services-page-title'
        className='px-4 py-16 bg-base-white sm:px-6'
      >
        <div className='max-w-6xl mx-auto text-center'>
          <h1
            id='services-page-title'
            className='text-3xl font-bold text-charcoal-slate sm:text-4xl'
          >
            {t.services.pageTitle}
          </h1>
          <p className='max-w-2xl mx-auto mt-4 text-base leading-relaxed text-charcoal-slate'>
            {t.services.pageDescription}
          </p>
        </div>
      </section>

      <section
        aria-labelledby='packages-heading'
        className='px-4 py-16 bg-warm-taupe sm:px-6'
      >
        <div className='max-w-6xl mx-auto'>
          <header className='max-w-2xl mx-auto mb-12 text-center'>
            <h2
              id='packages-heading'
              className='text-2xl font-bold text-charcoal-slate sm:text-3xl'
            >
              {t.services.packagesHeading}
            </h2>
            <p className='mt-3 text-base leading-relaxed text-charcoal-slate'>
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

      <section className='px-4 py-16 bg-base-white sm:px-6'>
        <div className='max-w-6xl mx-auto'>
          <CoreInclusionsBanner />
        </div>
      </section>

      <section className='px-4 py-16 bg-warm-taupe sm:px-6'>
        <div className='max-w-6xl mx-auto'>
          <ProcessTimeline />
        </div>
      </section>

      <section className='px-4 py-16 bg-base-white sm:px-6'>
        <div className='max-w-2xl mx-auto text-center'>
          <h2 className='text-2xl font-bold text-charcoal-slate'>
            {t.services.contactUs}
          </h2>
          <p className='mt-3 text-base leading-relaxed text-charcoal-slate'>
            {t.brand.tagline}
          </p>
          <Link
            to='/faq'
            className='inline-flex items-center justify-center px-8 py-3 mt-6 text-sm font-semibold rounded-lg min-h-11 bg-muted-coral text-base-white hover:bg-charcoal-slate'
          >
            {t.services.contactUs}
          </Link>
        </div>
      </section>
    </>
  );
}
