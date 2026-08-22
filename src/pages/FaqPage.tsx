import { useState } from 'react';
import { FAQ_ITEMS } from '../data/faq';
import { useLanguage } from '../context/LanguageContext';
import { Accordion } from '../components/ui/Accordion';
import {
  PageIntro,
  IllustrationFrame,
} from '../components/ui/IllustrationFrame';
import { FaqIllustration } from '../components/illustrations/FaqIllustration';
import CallToAction from '../components/ui/CallToAction';
import { ContactModalWrapper } from '../components/ui/ContactModalWrapper';

export function FaqPage() {
  const { t } = useLanguage();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const accordionItems = FAQ_ITEMS.map(({ id }) => ({
    id,
    question: t.faq.items[id].question,
    answer: t.faq.items[id].answer,
  }));

  return (
    <>
      <section
        aria-labelledby='faq-page-title'
        className='px-4 py-16 bg-warm-beige sm:px-6'
      >
        <PageIntro
          title={t.faq.pageTitle}
          titleId='faq-page-title'
          description={t.faq.pageDescription}
          illustration={<FaqIllustration />}
          illustrationLabel='Frequently asked questions illustration'
        />
      </section>

      <section
        aria-labelledby='faq-accordion-heading'
        className='px-4 py-16 bg-surface sm:px-6'
      >
        <div className='mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1fr_minmax(280px,360px)] lg:gap-16'>
          <div>
            <h2 id='faq-accordion-heading' className='sr-only'>
              {t.faq.pageTitle}
            </h2>
            <Accordion items={accordionItems} />
          </div>
          <IllustrationFrame
            label='Support and answers illustration'
            className='sticky hidden top-24 lg:block'
          >
            <img
              src='/image/FAQ.svg'
              alt='Features and trust signals illustration'
              className='object-contain w-full h-full'
              aria-hidden='true'
            />
          </IllustrationFrame>
        </div>
      </section>

      <CallToAction
        t={t}
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />

      {isContactModalOpen && (
        <ContactModalWrapper
          t={t}
          onClose={() => setIsContactModalOpen(false)}
        />
      )}
    </>
  );
}
