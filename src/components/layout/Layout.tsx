import { Outlet } from 'react-router-dom';
import { Footer, Header } from './Header';
import { useLanguage } from '../../context/LanguageContext';

export function Layout() {
  const { t } = useLanguage();

  return (
    <>
      <a
        href='#main-content'
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-cappuccino focus:px-4 focus:py-2 focus:text-dark-chocolate"
      >
        {t.nav.skipToContent}
      </a>
      <Header />
      <main id='main-content' tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
