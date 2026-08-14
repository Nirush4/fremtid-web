import { Link } from 'react-router-dom';
import { PACKAGE_TIERS } from '../data/services';
import { useLanguage } from '../context/LanguageContext';
import { CoreInclusionsBanner } from '../components/services/CoreInclusionsBanner';
import { PackageTierCard } from '../components/services/PackageTierCard';
import { ProcessTimeline } from '../components/services/ProcessTimeline';
import { PageIntro, SectionWithIllustration } from '../components/ui/IllustrationFrame';
import { ServicesIllustration } from '../components/illustrations/ServicesIllustration';
import { ProcessIllustration } from '../components/illustrations/ProcessIllustration';

export function ServicesPage() {
  const { t } = useLanguage();

  return (
    <>
      <section
        aria-labelledby="services-page-title"
        className="bg-warm-beige px-4 py-16 sm:px-6"
      >
        <PageIntro
          title={t.services.pageTitle}
          titleId="services-page-title"
          description={t.services.pageDescription}
          illustration={<ServicesIllustration />}
          illustrationLabel="Service packages illustration"
        />
      </section>

      <section
        aria-labelledby="packages-heading"
        className="bg-surface px-4 py-16 sm:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <header className="mx-auto mb-12 max-w-2xl text-center">
            <h2
              id="packages-heading"
              className="text-2xl font-bold text-dark-chocolate sm:text-3xl"
            >
              {t.services.packagesHeading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-dark-chocolate">
              {t.services.packagesSubheading}
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-3">
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

      <section className="bg-warm-beige px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <CoreInclusionsBanner />
        </div>
      </section>

      <section className="bg-surface px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionWithIllustration
            heading={t.services.processHeading}
            headingId="services-process-heading"
            subheading={t.services.processSubheading}
            illustration={<ProcessIllustration />}
            illustrationLabel="Project workflow process illustration"
            reverse
          >
            <ProcessTimeline embedded />
          </SectionWithIllustration>
        </div>
      </section>

      <section className="bg-warm-beige px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-dark-chocolate">
            {t.services.contactUs}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-dark-chocolate">
            {t.brand.tagline}
          </p>
          <Link
            to="/faq"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-terra-cotta px-8 py-3 text-sm font-semibold text-dark-chocolate hover:bg-dark-chocolate hover:text-surface"
          >
            {t.services.contactUs}
          </Link>
        </div>
      </section>
    </>
  );
}
