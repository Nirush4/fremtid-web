import { Eye, Globe, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { IllustrationFrame } from '../ui/IllustrationFrame';

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
      className='px-4 py-16 bg-warm-beige sm:px-6'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='mb-12 grid items-center gap-10 lg:grid-cols-[1fr_minmax(280px,380px)]'>
          <div className='space-y-4'>
            <span className='inline-block rounded-full bg-terra-cotta/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-terra-cotta'>
              Quality Assured
            </span>
            <h2
              id='trust-heading'
              className='text-3xl font-extrabold tracking-tight text-dark-chocolate sm:text-4xl'
            >
              {t.home.trustHeading}
            </h2>
            <p className='text-base leading-relaxed text-dark-chocolate/80'>
              Discover why growing businesses rely on us to deliver secure,
              accessible, and high-performance digital experiences.
            </p>
          </div>

          <IllustrationFrame label='Trust and quality illustration'>
            <img
              src='/image/choose_us.svg'
              alt=''
              className='object-cover w-full h-full p-4'
              aria-hidden='true'
            />
          </IllustrationFrame>
        </div>

        <ul className='grid gap-6 sm:grid-cols-3'>
          {items.map(({ key, title, description }) => {
            const Icon = TRUST_ICONS[key];
            return (
              <li
                key={key}
                className='flex flex-col justify-between p-8 transition-all duration-300 border shadow-sm group rounded-2xl bg-surface hover:-translate-y-1 hover:shadow-md border-dark-chocolate/5'
              >
                <div>
                  <div
                    className='flex items-center justify-center mx-auto mb-6 transition-colors h-14 w-14 rounded-xl bg-terra-cotta/10 text-terra-cotta group-hover:bg-terra-cotta group-hover:text-surface'
                    aria-hidden='true'
                  >
                    <Icon
                      className='transition-transform duration-300 h-7 w-7 group-hover:scale-110'
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className='text-lg font-bold text-center text-dark-chocolate'>
                    {title}
                  </h3>
                  <p className='mt-3 text-sm leading-relaxed text-center text-dark-chocolate/80'>
                    {description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
