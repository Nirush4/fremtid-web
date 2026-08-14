import { Link } from 'react-router-dom';
import { Code, Palette, Rocket } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionWithIllustration } from '../ui/IllustrationFrame';
import { FeaturesIllustration } from '../illustrations/FeaturesIllustration';

const SERVICE_ICONS = {
  development: Code,
  design: Palette,
  maintenance: Rocket,
} as const;

export function ServicesOverview() {
  const { t } = useLanguage();

  const items = [
    { key: 'development' as const, ...t.home.serviceItems.development },
    { key: 'design' as const, ...t.home.serviceItems.design },
    { key: 'maintenance' as const, ...t.home.serviceItems.maintenance },
  ];

  return (
    <section aria-labelledby="home-services-heading" className="bg-surface px-4 py-16 sm:px-6">
      <SectionWithIllustration
        heading={t.home.servicesHeading}
        headingId="home-services-heading"
        subheading={t.home.servicesSubheading}
        illustration={<FeaturesIllustration />}
        illustrationLabel="Core services illustration"
      >
        <ul className="grid gap-6 sm:grid-cols-3">
          {items.map(({ key, title, description }) => {
            const Icon = SERVICE_ICONS[key];
            return (
              <li key={key} className="rounded-xl border border-cappuccino/20 bg-warm-beige p-6">
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

        <div className="mt-8">
          <Link
            to="/services"
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-terra-cotta px-6 py-3 text-sm font-semibold text-dark-chocolate hover:bg-dark-chocolate hover:text-surface"
          >
            {t.home.heroCta}
          </Link>
        </div>
      </SectionWithIllustration>
    </section>
  );
}
