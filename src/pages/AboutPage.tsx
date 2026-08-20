import {
  Code,
  Heart,
  MessageCircle,
  Palette,
  Sparkles,
  Users,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PageIntro } from '../components/ui/IllustrationFrame';
import { FeaturesIllustration } from '../components/illustrations/FeaturesIllustration';

const EXPERTISE_ICONS = {
  frontend: Code,
  design: Palette,
  collaboration: Users,
} as const;

const VALUE_ICONS = {
  quality: Sparkles,
  clarity: MessageCircle,
  partnership: Heart,
} as const;

export function AboutPage() {
  const { t } = useLanguage();

  const expertise = [
    { key: 'frontend' as const, ...t.about.expertiseItems.frontend },
    { key: 'design' as const, ...t.about.expertiseItems.design },
    { key: 'collaboration' as const, ...t.about.expertiseItems.collaboration },
  ];

  const values = [
    { key: 'quality' as const, ...t.about.values.quality },
    { key: 'clarity' as const, ...t.about.values.clarity },
    { key: 'partnership' as const, ...t.about.values.partnership },
  ];

  return (
    <>
      <section
        aria-labelledby='about-page-title'
        className='px-4 py-16 bg-warm-beige sm:px-6'
      >
        <PageIntro
          title={t.about.pageTitle}
          titleId='about-page-title'
          description={t.about.pageDescription}
          illustration={<FeaturesIllustration />}
          illustrationLabel='Agency expertise illustration'
        />
      </section>

      <section
        aria-labelledby='story-heading'
        className='relative px-6 py-16 overflow-hidden bg-warm-beige/40 sm:px-10'
      >
        <div
          className='absolute -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none top-1/2 left-1/2 w-96 h-96 bg-terra-cotta/5 blur-3xl'
          aria-hidden='true'
        />

        <div className='relative max-w-6xl mx-auto'>
          <div className='max-w-2xl mx-auto mb-16 text-center'>
            <div className='w-12 h-1 mx-auto mb-4 rounded-full bg-terra-cotta' />
            <h2
              id='story-heading'
              className='text-3xl font-extrabold tracking-tight text-dark-chocolate sm:text-4xl'
            >
              {t.about.storyHeading}
            </h2>
            <p className='mt-4 text-base text-dark-chocolate/70 sm:text-lg'>
              {t.about.storySubheading}
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-3'>
            {t.about.storyParagraphs.map((paragraph, index) => {
              const cardTitles = [
                t.about.missionTitle,
                t.about.buildTitle,
                t.about.presenceTitle,
              ];

              return (
                <div
                  key={index}
                  className='group relative flex flex-col justify-between p-8 bg-surface rounded-3xl border border-dark-chocolate/10 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-terra-cotta/30 hover:-translate-y-1.5'
                >
                  <div>
                    <div className='flex items-center justify-between mb-6'>
                      <span className='flex items-center justify-center text-xs font-bold tracking-wider rounded-full w-9 h-9 bg-terra-cotta/10 text-terra-cotta'>
                        0{index + 1}
                      </span>
                      <span className='text-xs font-semibold tracking-widest uppercase text-dark-chocolate/40'>
                        {cardTitles[index]}
                      </span>
                    </div>

                    <p className='text-base leading-relaxed text-dark-chocolate/80'>
                      {paragraph}
                    </p>
                  </div>

                  <div className='w-8 h-1 mt-8 transition-all duration-300 rounded-full bg-terra-cotta/50 group-hover:w-16' />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        aria-labelledby='expertise-heading'
        className='px-4 py-16 bg-warm-beige sm:px-6'
      >
        <div className='max-w-6xl mx-auto'>
          <h2
            id='expertise-heading'
            className='mb-10 text-2xl font-bold text-center text-dark-chocolate sm:text-3xl'
          >
            {t.about.expertiseHeading}
          </h2>
          <ul className='grid gap-6 sm:grid-cols-3'>
            {expertise.map(({ key, title, description }) => {
              const Icon = EXPERTISE_ICONS[key];
              return (
                <li
                  key={key}
                  className='p-6 border-2 rounded-xl border-cappuccino/30 bg-surface'
                >
                  <div
                    className='flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-cappuccino'
                    aria-hidden='true'
                  >
                    <Icon
                      className='w-6 h-6 text-dark-chocolate'
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className='text-lg font-semibold text-dark-chocolate'>
                    {title}
                  </h3>
                  <p className='mt-2 text-sm leading-relaxed text-dark-chocolate'>
                    {description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby='values-heading'
        className='px-4 py-16 bg-surface sm:px-6'
      >
        <div className='max-w-6xl mx-auto'>
          <h2
            id='values-heading'
            className='mb-10 text-2xl font-bold text-center text-dark-chocolate sm:text-3xl'
          >
            {t.about.valuesHeading}
          </h2>
          <ul className='grid gap-6 sm:grid-cols-3'>
            {values.map(({ key, title, description }) => {
              const Icon = VALUE_ICONS[key];
              return (
                <li key={key} className='p-6 rounded-xl bg-warm-beige'>
                  <div
                    className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-terra-cotta'
                    aria-hidden='true'
                  >
                    <Icon
                      className='w-6 h-6 text-dark-chocolate'
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className='text-lg font-semibold text-dark-chocolate'>
                    {title}
                  </h3>
                  <p className='mt-2 text-sm leading-relaxed text-dark-chocolate'>
                    {description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
