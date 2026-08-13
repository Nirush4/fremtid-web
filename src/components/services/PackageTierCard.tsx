import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import type { PackageTierContent, PackageTierId } from '../../types/services';

interface PackageTierCardProps {
  readonly id: PackageTierId;
  readonly content: PackageTierContent;
  readonly isPopular: boolean;
}

export function PackageTierCard({
  id,
  content,
  isPopular,
}: PackageTierCardProps) {
  const { t } = useLanguage();
  const headingId = `package-${id}`;

  return (
    <article
      aria-labelledby={headingId}
      className={`relative flex h-full flex-col rounded-2xl border-2 p-6 shadow-sm ${
        isPopular
          ? 'border-mustard-gold bg-warm-taupe ring-2 ring-mustard-gold ring-offset-2 ring-offset-base-white'
          : 'border-warm-taupe bg-base-white'
      }`}
    >
      {isPopular && (
        <span
          className='absolute px-4 py-1 text-sm font-semibold -translate-x-1/2 rounded-full -top-3 left-1/2 bg-muted-coral text-base-white'
          aria-label={t.services.mostPopular}
        >
          {t.services.mostPopular}
        </span>
      )}

      <header className='pt-2 mb-6'>
        <h3 id={headingId} className='text-xl font-bold text-charcoal-slate'>
          {content.name}
        </h3>
        <p className='mt-2 text-sm leading-relaxed text-charcoal-slate'>
          {content.description}
        </p>
      </header>

      <div className='mb-6'>
        <p className='text-2xl font-bold text-charcoal-slate'>
          {content.price}
        </p>
        <p className='mt-1 text-sm text-charcoal-slate'>{content.priceNote}</p>
      </div>

      <ul
        className='flex-grow mb-8 space-y-3'
        aria-label={`${content.name} features`}
      >
        {content.features.map((feature) => (
          <li
            key={feature}
            className='flex items-start gap-3 text-sm text-charcoal-slate'
          >
            <span
              className='mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mustard-gold text-xs font-bold text-charcoal-slate'
              aria-hidden='true'
            >
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <Link
        to='/faq'
        className={`inline-flex min-h-11 items-center justify-center rounded-lg px-6 py-3 text-center text-sm font-semibold transition-colors ${
          isPopular
            ? 'bg-muted-coral text-base-white hover:bg-charcoal-slate'
            : 'bg-mustard-gold text-charcoal-slate hover:bg-charcoal-slate hover:text-base-white'
        }`}
      >
        {t.services.getStarted}
      </Link>
    </article>
  );
}
