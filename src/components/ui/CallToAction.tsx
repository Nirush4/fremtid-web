import { type JSX } from 'react';
import type { TranslationDictionary } from '../../i18n/types';

interface CallToActionProps {
  t: TranslationDictionary;
  title?: string;
  tagline?: string;
  onOpenContactModal?: () => void;
}

export default function CallToAction({
  t,
  onOpenContactModal,
}: CallToActionProps): JSX.Element {
  return (
    <section className='px-6 py-16 border-b bg-warm-beige/30 sm:px-10 border-dark-chocolate/10'>
      <div className='max-w-4xl mx-auto text-center'>
        <div className='flex justify-center mb-10'>
          <div className='w-16 h-1.5 rounded-full bg-terra-cotta' />
        </div>

        <h2 className='text-3xl font-extrabold tracking-tighter text-dark-chocolate sm:text-5xl lg:text-6xl'>
          {t.services.contactUs}
        </h2>

        <p className='max-w-2xl mx-auto mt-6 text-lg leading-relaxed sm:text-xl text-dark-chocolate/70'>
          {t.brand.tagline}
        </p>

        <div className='mt-12'>
          <button
            type='button'
            onClick={onOpenContactModal}
            className='inline-flex items-center justify-center px-10 py-4 text-base font-bold tracking-wide uppercase transition-all duration-300 rounded-full shadow-xl cursor-pointer group bg-dark-chocolate text-surface hover:bg-terra-cotta hover:scale-105 shadow-dark-chocolate/10'
          >
            {t.services.contactUs}
            <svg
              className='w-5 h-5 ml-3 -mr-1 transition-transform duration-300 group-hover:translate-x-1'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M14 5l7 7m0 0l-7 7m7-7H3'
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
