import { type JSX, useEffect } from 'react';
import type { TranslationDictionary } from '../../i18n/types';
import { ContactSection } from '../home/ContactSection';

interface ContactModalWrapperProps {
  t: TranslationDictionary;
  onClose: () => void;
}

export function ContactModalWrapper({
  onClose,
}: ContactModalWrapperProps): JSX.Element {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-chocolate/50 backdrop-blur-sm animate-fade-in'
      onClick={onClose}
    >
      <div
        className='relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface rounded-3xl shadow-2xl border border-dark-chocolate/10'
        role='dialog'
        aria-modal='true'
        aria-labelledby='modal-title'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className='absolute z-10 p-2 transition-colors rounded-full top-5 right-5 bg-warm-beige/80 text-dark-chocolate/70 hover:text-dark-chocolate hover:bg-warm-beige'
          aria-label='Close modal'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>

        <div>
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
