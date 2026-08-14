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
          ? 'border-cappuccino bg-warm-beige ring-2 ring-cappuccino ring-offset-2 ring-offset-surface'
          : 'border-warm-beige bg-surface'
      }`}
    >
      {isPopular && (
        <span
          className='absolute px-4 py-1 text-sm font-semibold -translate-x-1/2 rounded-full -top-3 left-1/2 bg-terra-cotta text-dark-chocolate'
          aria-label={t.services.mostPopular}
        >
          {t.services.mostPopular}
        </span>
      )}

      <header className='pt-2 mb-6'>
        <h3 id={headingId} className='text-xl font-bold text-dark-chocolate'>
          {content.name}
        </h3>
        <p className='mt-2 text-sm leading-relaxed text-dark-chocolate'>
          {content.description}
        </p>
      </header>

      <div className='mb-6'>
        <p className='text-2xl font-bold text-dark-chocolate'>
          {content.price}
        </p>
        <p className='mt-1 text-sm text-dark-chocolate'>{content.priceNote}</p>
      </div>

      <ul
        className='flex-grow mb-8 space-y-3'
        aria-label={`${content.name} features`}
      >
        {content.features.map((feature) => (
          <li
            key={feature}
            className='flex items-start gap-3 text-sm text-dark-chocolate'
          >
            <span
              className='mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cappuccino text-xs font-bold text-dark-chocolate'
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
            ? 'bg-terra-cotta text-dark-chocolate hover:bg-dark-chocolate hover:text-surface'
            : 'bg-cappuccino text-dark-chocolate hover:bg-dark-chocolate hover:text-surface'
        }`}
      >
        {t.services.getStarted}
      </Link>
    </article>
  );
}
