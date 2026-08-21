import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { scrollToTop } from '../utils/scroll';

export function NotFound() {
  const { t } = useLanguage();

  return (
    <main className='relative flex flex-col items-center justify-center min-h-[85vh] px-6 py-16 overflow-hidden bg-warm-beige/30 text-center sm:px-10'>
      <div
        className='absolute -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none top-1/2 left-1/2 w-96 h-96 bg-terra-cotta/5 blur-3xl'
        aria-hidden='true'
      />

      <div className='relative flex flex-col items-center max-w-xl mx-auto space-y-8'>
        <div className='w-full h-64 max-w-sm sm:max-w-md sm:h-80'>
          <img
            src='/image/404.svg'
            alt=''
            className='object-contain w-full h-full drop-shadow-sm'
            aria-hidden='true'
          />
        </div>

        <div className='space-y-3'>
          <h1 className='text-2xl font-extrabold tracking-tight text-dark-chocolate sm:text-4xl'>
            {t.notFound.title}
          </h1>
          <p className='max-w-md mx-auto text-base leading-relaxed text-dark-chocolate/70 sm:text-lg'>
            {t.notFound.subtitle}
          </p>
        </div>

        <div className='pt-2'>
          <Link
            to='/'
            onClick={() => scrollToTop('smooth')}
            className='inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-surface transition-all duration-300 rounded-full bg-terra-cotta hover:bg-dark-chocolate shadow-lg hover:-translate-y-0.5'
          >
            <Home className='w-4 h-4' aria-hidden='true' />
            {t.notFound.backHome}
          </Link>
        </div>
      </div>
    </main>
  );
}
