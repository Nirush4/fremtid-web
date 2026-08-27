import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { LOCALE_LABELS } from '../../i18n';
import { scrollToTop } from '../../utils/scroll';

const NAV_LINKS = [
  { to: '/', key: 'home' as const },
  { to: '/services', key: 'services' as const },
  { to: '/about', key: 'about' as const },
  { to: '/projects', key: 'projects' as const },
  { to: '/faq', key: 'faq' as const },
];

export function Navbar() {
  const { locale, t, toggleLocale } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    scrollToTop('smooth');
    setMenuOpen(false);
  };

  return (
    <header className='sticky top-0 z-50 border-b border-warm-beige bg-surface'>
      <div className='flex items-center justify-between px-4 py-2 mx-auto max-w-7xl sm:px-6'>
        <Link
          to='/'
          onClick={handleNavClick}
          className='w-20 text-lg font-bold md:w-30 text-dark-chocolate hover:text-terra-cotta'
        >
          <img src='/logo.png' alt='logo' className='w-full h-full' />
        </Link>

        <nav
          aria-label='Main navigation'
          className='items-center hidden gap-6 md:flex'
        >
          {NAV_LINKS.map(({ to, key }) => (
            <Link
              key={key}
              to={to}
              onClick={handleNavClick}
              className='text-sm font-medium text-dark-chocolate hover:text-terra-cotta'
            >
              {t.nav[key]}
            </Link>
          ))}
          <button
            type='button'
            onClick={toggleLocale}
            className='rounded-lg border border-cappuccino px-3 py-1.5 text-sm font-medium text-dark-chocolate hover:bg-warm-beige'
            aria-label={`${t.nav.languageSwitch}: ${
              LOCALE_LABELS[locale === 'en' ? 'no' : 'en']
            }`}
          >
            {locale === 'en' ? 'NO' : 'EN'}
          </button>
        </nav>

        <button
          type='button'
          className='inline-flex items-center justify-center rounded-lg min-h-11 min-w-11 text-dark-chocolate hover:bg-warm-beige md:hidden'
          aria-expanded={menuOpen}
          aria-controls='mobile-nav'
          aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden='true' /> : <Menu aria-hidden='true' />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id='mobile-nav'
          aria-label='Mobile navigation'
          className='px-4 py-4 border-t border-warm-beige bg-surface md:hidden'
        >
          <ul className='space-y-2'>
            {NAV_LINKS.map(({ to, key }) => (
              <li key={key}>
                <Link
                  to={to}
                  className='block px-3 py-2 text-sm font-medium rounded-lg text-dark-chocolate hover:bg-warm-beige'
                  onClick={handleNavClick}
                >
                  {t.nav[key]}
                </Link>
              </li>
            ))}
            <li>
              <button
                type='button'
                onClick={() => {
                  toggleLocale();
                  setMenuOpen(false);
                }}
                className='w-full px-3 py-2 text-sm font-medium text-left rounded-lg text-dark-chocolate hover:bg-warm-beige'
              >
                {t.nav.languageSwitch}:{' '}
                {LOCALE_LABELS[locale === 'en' ? 'no' : 'en']}
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
