import { Link } from 'react-router-dom';
import { PACKAGE_TIERS } from '../data/services';
import { useLanguage } from '../context/LanguageContext';
import { CoreInclusionsBanner } from '../components/services/CoreInclusionsBanner';
import { PackageTierCard } from '../components/services/PackageTierCard';
import { ProcessTimeline } from '../components/services/ProcessTimeline';
import {
  PageIntro,
  SectionWithIllustration,
} from '../components/ui/IllustrationFrame';
import { ProcessIllustration } from '../components/illustrations/ProcessIllustration';

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

      <section className='px-4 py-16 bg-surface sm:px-6'>
        <div className='max-w-6xl mx-auto'>
          <SectionWithIllustration
            heading={t.services.processHeading}
            headingId='services-process-heading'
            subheading={t.services.processSubheading}
            illustration={<ProcessIllustration />}
            illustrationLabel='Project workflow process illustration'
            reverse
          >
            <ProcessTimeline embedded />
          </SectionWithIllustration>
        </div>
      </section>

      <section className='px-4 py-16 bg-warm-beige sm:px-6'>
        <div className='max-w-2xl mx-auto text-center'>
          <h2 className='text-2xl font-bold text-dark-chocolate'>
            {t.services.contactUs}
          </h2>
          <p className='mt-3 text-base leading-relaxed text-dark-chocolate'>
            {t.brand.tagline}
          </p>
          <Link
            to='/faq'
            className='inline-flex items-center justify-center px-8 py-3 mt-6 text-sm font-semibold rounded-lg min-h-11 bg-terra-cotta text-dark-chocolate hover:bg-dark-chocolate hover:text-surface'
          >
            {t.services.contactUs}
          </Link>
        </div>
      </section>
    </>
  );
}
