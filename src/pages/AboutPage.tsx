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
      <section aria-labelledby="about-page-title" className="bg-warm-beige px-4 py-16 sm:px-6">
        <PageIntro
          title={t.about.pageTitle}
          titleId="about-page-title"
          description={t.about.pageDescription}
          illustration={<FeaturesIllustration />}
          illustrationLabel="Agency expertise illustration"
        />
      </section>

      <section aria-labelledby="story-heading" className="bg-surface px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 id="story-heading" className="text-2xl font-bold text-dark-chocolate sm:text-3xl">
            {t.about.storyHeading}
          </h2>
          <div className="mt-6 space-y-4">
            {t.about.storyParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-dark-chocolate">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="expertise-heading" className="bg-warm-beige px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2
            id="expertise-heading"
            className="mb-10 text-center text-2xl font-bold text-dark-chocolate sm:text-3xl"
          >
            {t.about.expertiseHeading}
          </h2>
          <ul className="grid gap-6 sm:grid-cols-3">
            {expertise.map(({ key, title, description }) => {
              const Icon = EXPERTISE_ICONS[key];
              return (
                <li key={key} className="rounded-xl border-2 border-cappuccino/30 bg-surface p-6">
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cappuccino"
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6 text-dark-chocolate" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-semibold text-dark-chocolate">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-dark-chocolate">{description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section aria-labelledby="values-heading" className="bg-surface px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2
            id="values-heading"
            className="mb-10 text-center text-2xl font-bold text-dark-chocolate sm:text-3xl"
          >
            {t.about.valuesHeading}
          </h2>
          <ul className="grid gap-6 sm:grid-cols-3">
            {values.map(({ key, title, description }) => {
              const Icon = VALUE_ICONS[key];
              return (
                <li key={key} className="rounded-xl bg-warm-beige p-6">
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-terra-cotta"
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6 text-dark-chocolate" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-semibold text-dark-chocolate">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-dark-chocolate">{description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
