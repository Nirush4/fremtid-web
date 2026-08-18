import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { TechnologyForAll } from '../components/home/TechnologyForAll';
import { TrustSignals } from '../components/home/TrustSignals';
import { PageIntro } from '../components/ui/IllustrationFrame';
import { HeroIllustration } from '../components/illustrations/HeroIllustration';
import { ContactSection } from '../components/home/ContactSection';

export function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <section
        aria-labelledby='hero-heading'
        className='px-4 py-16 bg-warm-beige sm:px-6 lg:py-24'
      >
        <PageIntro
          title={t.home.heroTitle}
          titleId='hero-heading'
          description={t.home.heroSubtitle}
          illustration={<HeroIllustration />}
          illustrationLabel='Website design and development illustration'
        >
          <div className='flex flex-col gap-4 sm:flex-row sm:justify-start'>
            <Link
              to='/services'
              className='inline-flex items-center justify-center w-full px-8 py-3 text-sm font-semibold rounded-lg min-h-11 bg-terra-cotta text-dark-chocolate hover:bg-dark-chocolate hover:text-surface sm:w-auto'
            >
              {t.home.heroCta}
            </Link>
            <Link
              to='/projects'
              className='inline-flex items-center justify-center w-full px-8 py-3 text-sm font-semibold border-2 rounded-lg min-h-11 border-cappuccino text-dark-chocolate hover:bg-surface sm:w-auto'
            >
              {t.home.heroSecondaryCta}
            </Link>
          </div>
        </PageIntro>
      </section>

      <ServicesOverview />
      <TechnologyForAll />
      <FeaturedProjects />
      <TrustSignals />
      <ContactSection />
    </>
  );
}
