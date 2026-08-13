import { Eye, Globe, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

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
    <section
      aria-labelledby='trust-heading'
      className='px-4 py-16 bg-warm-taupe sm:px-6'
    >
      <div className='max-w-6xl mx-auto'>
        <h2
          id='trust-heading'
          className='mb-10 text-2xl font-bold text-center text-charcoal-slate sm:text-3xl'
        >
          {t.home.trustHeading}
        </h2>

        <ul className='grid gap-6 sm:grid-cols-3'>
          {items.map(({ key, title, description }) => {
            const Icon = TRUST_ICONS[key];
            return (
              <li
                key={key}
                className='p-6 text-center rounded-xl bg-base-white'
              >
                <div
                  className='flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-muted-coral'
                  aria-hidden='true'
                >
                  <Icon className='w-6 h-6 text-base-white' strokeWidth={2} />
                </div>
                <h3 className='text-lg font-semibold text-charcoal-slate'>
                  {title}
                </h3>
                <p className='mt-2 text-sm leading-relaxed text-charcoal-slate'>
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
