import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { LOCALE_LABELS } from '../../i18n';

const NAV_LINKS = [
  { to: '/', key: 'home' as const },
  { to: '/services', key: 'services' as const },
  { to: '/about', key: 'about' as const },
  { to: '/projects', key: 'projects' as const },
  { to: '/faq', key: 'faq' as const },
];

export function Header() {
  const { locale, t, toggleLocale } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 border-b border-warm-taupe bg-base-white'>
      <div className='flex items-center justify-between max-w-6xl px-4 py-4 mx-auto sm:px-6'>
        <Link
          to='/'
          className='text-lg font-bold text-charcoal-slate hover:text-muted-coral'
        >
          {t.brand.name}
        </Link>

        <nav
          aria-label='Main navigation'
          className='items-center hidden gap-6 md:flex'
        >
          {NAV_LINKS.map(({ to, key }) => (
            <Link
              key={key}
              to={to}
              className='text-sm font-medium text-charcoal-slate hover:text-muted-coral'
            >
              {t.nav[key]}
            </Link>
          ))}
          <button
            type='button'
            onClick={toggleLocale}
            className='rounded-lg border border-mustard-gold px-3 py-1.5 text-sm font-medium text-charcoal-slate hover:bg-warm-taupe'
            aria-label={`${t.nav.languageSwitch}: ${
              LOCALE_LABELS[locale === 'en' ? 'no' : 'en']
            }`}
          >
            {locale === 'en' ? 'NO' : 'EN'}
          </button>
        </nav>

        <button
          type='button'
          className='inline-flex items-center justify-center rounded-lg min-h-11 min-w-11 text-charcoal-slate hover:bg-warm-taupe md:hidden'
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
          className='px-4 py-4 border-t border-warm-taupe bg-base-white md:hidden'
        >
          <ul className='space-y-2'>
            {NAV_LINKS.map(({ to, key }) => (
              <li key={key}>
                <Link
                  to={to}
                  className='block px-3 py-2 text-sm font-medium rounded-lg text-charcoal-slate hover:bg-warm-taupe'
                  onClick={() => setMenuOpen(false)}
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
                className='w-full px-3 py-2 text-sm font-medium text-left rounded-lg text-charcoal-slate hover:bg-warm-taupe'
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

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className='border-t border-warm-taupe bg-warm-taupe'>
      <div className='max-w-6xl px-4 py-8 mx-auto text-center sm:px-6'>
        <p className='text-sm text-charcoal-slate'>
          <a
            href={`mailto:${t.footer.contact}`}
            className='font-medium text-muted-coral hover:text-charcoal-slate'
          >
            {t.footer.contact}
          </a>
        </p>
        <p className='mt-2 text-sm text-charcoal-slate'>
          © {year} {t.brand.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
