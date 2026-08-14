import { Link } from 'react-router-dom';
import { FAQ_ITEMS } from '../data/faq';
import { useLanguage } from '../context/LanguageContext';
import { Accordion } from '../components/ui/Accordion';
import { PageIntro, IllustrationFrame } from '../components/ui/IllustrationFrame';
import { FaqIllustration } from '../components/illustrations/FaqIllustration';

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
        aria-labelledby="faq-page-title"
        className="bg-warm-beige px-4 py-16 sm:px-6"
      >
        <PageIntro
          title={t.faq.pageTitle}
          titleId="faq-page-title"
          description={t.faq.pageDescription}
          illustration={<FaqIllustration />}
          illustrationLabel="Frequently asked questions illustration"
        />
      </section>

      <section
        aria-labelledby="faq-accordion-heading"
        className="bg-surface px-4 py-16 sm:px-6"
      >
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1fr_minmax(280px,360px)] lg:gap-16">
          <div>
            <h2 id="faq-accordion-heading" className="sr-only">
              {t.faq.pageTitle}
            </h2>
            <Accordion items={accordionItems} />
          </div>
          <IllustrationFrame
            label="Support and answers illustration"
            className="sticky top-24 hidden lg:block"
          >
            <FaqIllustration />
          </IllustrationFrame>
        </div>
      </section>

      <section className="bg-warm-beige px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base leading-relaxed text-dark-chocolate">
            {t.faq.contactPrompt}
          </p>
          <Link
            to="/services"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-terra-cotta px-8 py-3 text-sm font-semibold text-dark-chocolate hover:bg-dark-chocolate hover:text-surface"
          >
            {t.faq.contactCta}
          </Link>
        </div>
      </section>
    </>
  );
}
