import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { scrollToTop } from '../../utils/scroll';

const QUICK_LINKS = [
  { to: '/', key: 'home' as const },
  { to: '/services', key: 'services' as const },
  { to: '/about', key: 'about' as const },
  { to: '/projects', key: 'projects' as const },
  { to: '/faq', key: 'faq' as const },
];

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className='border-t border-warm-beige bg-warm-beige/60 text-dark-chocolate'>
      <div className='max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-10 pb-12 border-b md:grid-cols-3 md:gap-8 border-dark-chocolate/10'>
          <div className='space-y-3'>
            <Link
              to='/'
              onClick={() => scrollToTop('smooth')}
              className='inline-block text-xl font-extrabold tracking-tight transition-colors w-30 mdsa:w-50 text-dark-chocolate hover:text-terra-cotta'
            >
              <img src='/logo.png' alt='logo' className='w-full h-full' />
            </Link>
            <p className='max-w-sm text-sm leading-relaxed text-dark-chocolate/70'>
              {t.brand.tagline}
            </p>
          </div>

          <div>
            <h3 className='mb-4 text-xs font-bold tracking-widest uppercase text-terra-cotta'>
              {t.footer.navigationTitle}
            </h3>
            <ul className='space-y-2.5'>
              {QUICK_LINKS.map(({ to, key }) => (
                <li key={key}>
                  <Link
                    to={to}
                    onClick={() => scrollToTop('smooth')}
                    className='text-sm font-medium transition-colors text-dark-chocolate/80 hover:text-terra-cotta'
                  >
                    {t.nav[key]}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  to='/privacy'
                  onClick={() => scrollToTop('smooth')}
                  className='text-sm font-medium transition-colors text-dark-chocolate/80 hover:text-terra-cotta'
                >
                  {t.footer.privacyPolicy}
                </Link>
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h3 className='mb-4 text-xs font-bold tracking-widest uppercase text-terra-cotta'>
              {t.footer.getInTouchTitle}
            </h3>
            <div className='space-y-3 text-sm text-dark-chocolate/80'>
              <a
                href={`mailto:${t.footer.contact}`}
                className='inline-flex items-center gap-2.5 font-medium hover:text-terra-cotta transition-colors'
              >
                <Mail className='w-4 h-4 text-terra-cotta' aria-hidden='true' />
                <span>{t.footer.contact}</span>
              </a>
              <div className='flex items-center gap-2.5'>
                <MapPin
                  className='w-4 h-4 text-terra-cotta'
                  aria-hidden='true'
                />
                <span>Norway</span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-between gap-4 pt-8 text-sm sm:flex-row text-dark-chocolate/60'>
          <p>
            © {year} {t.brand.name}. {t.footer.rights}
          </p>

          <button
            type='button'
            onClick={() => scrollToTop('smooth')}
            className='inline-flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all duration-300 border rounded-full shadow-sm cursor-pointer text-dark-chocolate bg-surface border-dark-chocolate/10 hover:bg-terra-cotta hover:text-surface hover:border-terra-cotta'
            aria-label='Scroll to top of page'
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className='w-3.5 h-3.5' aria-hidden='true' />
          </button>
        </div>
      </div>
    </footer>
  );
}
