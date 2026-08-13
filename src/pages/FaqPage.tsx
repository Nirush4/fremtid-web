import { Link } from 'react-router-dom';
import { FAQ_ITEMS } from '../data/faq';
import { useLanguage } from '../context/LanguageContext';
import { Accordion } from '../components/ui/Accordion';

export function FaqPage() {
  const { t } = useLanguage();

  const accordionItems = FAQ_ITEMS.map(({ id }) => ({
    id,
    question: t.faq.items[id].question,
    answer: t.faq.items[id].answer,
  }));

  return (
    <>
      <section
        aria-labelledby='faq-page-title'
        className='px-4 py-16 bg-base-white sm:px-6'
      >
        <div className='max-w-4xl mx-auto text-center'>
          <h1
            id='faq-page-title'
            className='text-3xl font-bold text-charcoal-slate sm:text-4xl'
          >
            {t.faq.pageTitle}
          </h1>
          <p className='max-w-2xl mx-auto mt-4 text-base leading-relaxed text-charcoal-slate'>
            {t.faq.pageDescription}
          </p>
        </div>
      </section>

      <section
        aria-labelledby='faq-accordion-heading'
        className='px-4 py-16 bg-warm-taupe sm:px-6'
      >
        <div className='max-w-3xl mx-auto'>
          <h2 id='faq-accordion-heading' className='sr-only'>
            {t.faq.pageTitle}
          </h2>
          <Accordion items={accordionItems} />
        </div>
      </section>

      <section className='px-4 py-16 bg-base-white sm:px-6'>
        <div className='max-w-2xl mx-auto text-center'>
          <p className='text-base leading-relaxed text-charcoal-slate'>
            {t.faq.contactPrompt}
          </p>
          <Link
            to='/services'
            className='inline-flex items-center justify-center px-8 py-3 mt-6 text-sm font-semibold rounded-lg min-h-11 bg-muted-coral text-base-white hover:bg-charcoal-slate'
          >
            {t.faq.contactCta}
          </Link>
        </div>
      </section>
    </>
  );
}
