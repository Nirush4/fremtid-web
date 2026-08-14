import { Eye, Globe, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { IllustrationFrame } from '../ui/IllustrationFrame';
import { FeaturesIllustration } from '../illustrations/FeaturesIllustration';

const TRUST_ICONS = {
  accessible: Eye,
  transparent: ShieldCheck,
  local: Globe,
} as const;

export function TrustSignals() {
  const { t } = useLanguage();

  const items = [
    { key: 'accessible' as const, ...t.home.trustItems.accessible },
    { key: 'transparent' as const, ...t.home.trustItems.transparent },
    { key: 'local' as const, ...t.home.trustItems.local },
  ];

  return (
    <section aria-labelledby="trust-heading" className="bg-warm-beige px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid items-center gap-8 lg:grid-cols-[1fr_minmax(280px,360px)]">
          <h2
            id="trust-heading"
            className="text-2xl font-bold text-dark-chocolate sm:text-3xl lg:text-4xl"
          >
            {t.home.trustHeading}
          </h2>
          <IllustrationFrame
            label="Trust and quality illustration"
            className="hidden lg:block"
          >
            <FeaturesIllustration />
          </IllustrationFrame>
        </div>

        <ul className="grid gap-6 sm:grid-cols-3">
          {items.map(({ key, title, description }) => {
            const Icon = TRUST_ICONS[key];
            return (
              <li key={key} className="rounded-xl bg-surface p-6 text-center">
                <div
                  className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-terra-cotta"
                  aria-hidden="true"
                >
                  <Icon className="h-6 w-6 text-dark-chocolate" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-semibold text-dark-chocolate">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-dark-chocolate">
                  {description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
