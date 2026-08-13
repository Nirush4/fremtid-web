import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { TrustSignals } from '../components/home/TrustSignals';

export function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <section
        aria-labelledby='hero-heading'
        className='px-4 py-20 bg-base-white sm:px-6 lg:py-28'
      >
        <div className='max-w-4xl mx-auto text-center'>
          <h1
            id='hero-heading'
            className='text-3xl font-bold leading-tight text-charcoal-slate sm:text-5xl'
          >
            {t.home.heroTitle}
          </h1>
          <p className='max-w-2xl mx-auto mt-6 text-lg leading-relaxed text-charcoal-slate'>
            {t.home.heroSubtitle}
          </p>
          <div className='flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row'>
            <Link
              to='/services'
              className='inline-flex items-center justify-center w-full px-8 py-3 text-sm font-semibold rounded-lg min-h-11 bg-muted-coral text-base-white hover:bg-charcoal-slate sm:w-auto'
            >
              {t.home.heroCta}
            </Link>
            <Link
              to='/projects'
              className='inline-flex items-center justify-center w-full px-8 py-3 text-sm font-semibold border-2 rounded-lg min-h-11 border-mustard-gold text-charcoal-slate hover:bg-warm-taupe sm:w-auto'
            >
              {t.home.heroSecondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <ServicesOverview />
      <FeaturedProjects />
      <TrustSignals />
    </>
  );
}
