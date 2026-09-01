import { Link } from 'react-router-dom';

export const PrivacyPolicy = () => {
  return (
    <main className='min-h-screen px-4 py-12 bg-surface text-dark-chocolate'>
      <div className='max-w-3xl p-8 mx-auto border shadow-sm bg-warm-beige/30 border-warm-beige rounded-xl'>
        <header className='pb-6 mb-8 border-b border-dark-chocolate/10'>
          <h1 className='text-3xl font-bold text-dark-chocolate'>
            Privacy Policy
          </h1>
          <p className='mt-2 text-sm text-dark-chocolate/70'>
            Effective Date: <time dateTime='2026-08-26'>August 26, 2026</time>
          </p>
        </header>

        <div className='space-y-6 text-sm leading-relaxed text-dark-chocolate/80'>
          <section aria-labelledby='intro-heading'>
            <h2 id='intro-heading' className='sr-only'>
              Introduction
            </h2>
            <p className='mb-3'>
              This privacy policy for <strong>Fremtid Web</strong>. We tells you
              how we may collect, use, and share your information when you visit
              our website{' '}
              <a
                href='https://fremtidweb.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
                className='font-medium text-terra-cotta hover:underline'
              >
                https://fremtidweb.netlify.app/
              </a>
              .
            </p>
            <p>
              We appreciate your decision to use our website and to trust us
              with your valuable personal information. In this document, we seek
              to explain in the clearest terms possible our privacy practices.
              We strongly encourage you to read this document carefully before
              using the website. If there are any terms or conditions in this
              document that you do not agree with, please do not use the
              website, or discontinue use immediately. By using the website, you
              accept and consent to the practices described in this Privacy
              Policy.
            </p>
          </section>

          <section aria-labelledby='collect-heading'>
            <h2
              id='collect-heading'
              className='mb-2 text-xl font-semibold text-dark-chocolate'
            >
              What Information Do We Collect About You?
            </h2>
            <p className='mb-2'>
              When we collect information, we do so to ensure that you get to
              experience our service seamlessly. We collect the following
              personal information:
            </p>
            <ul className='pl-5 space-y-1 list-disc text-dark-chocolate/80'>
              <li>Name</li>
              <li>Email address</li>
            </ul>
          </section>

          <section aria-labelledby='methods-heading'>
            <h2
              id='methods-heading'
              className='mb-2 text-xl font-semibold text-dark-chocolate'
            >
              How Do We Collect Such Information?
            </h2>
            <p className='mb-2'>
              We collect information through the following methods:
            </p>
            <ul className='pl-5 space-y-2 list-disc text-dark-chocolate/80'>
              <li>
                <strong className='text-dark-chocolate'>
                  The information that you give us:
                </strong>{' '}
                When you sign up for an account or contact us, we ask for
                information like your name or email address.
              </li>
              <li>
                <strong className='text-dark-chocolate'>
                  The information that we automatically collect from you:
                </strong>{' '}
                When you access our service from a device, we may automatically
                collect basic technical interaction information through standard
                hosting logs.
              </li>
              <li>
                <strong className='text-dark-chocolate'>
                  Information that we collect from third parties:
                </strong>{' '}
                From time to time, we may collect information from professional
                directories, public business registries, or partner networks
                when collaborating on small business projects.
              </li>
            </ul>
          </section>

          <section aria-labelledby='cookies-heading'>
            <h2
              id='cookies-heading'
              className='mb-2 text-xl font-semibold text-dark-chocolate'
            >
              Cookies and Similar Technologies
            </h2>
            <p className='mb-2'>
              Cookies are small packets of information placed on your device to
              retrieve information such as login status or site preferences.
            </p>
            <p>
              However, we do not use cookies or similar tracking technologies on
              our website.
            </p>
          </section>

          <section aria-labelledby='dnt-heading'>
            <h2
              id='dnt-heading'
              className='mb-2 text-xl font-semibold text-dark-chocolate'
            >
              Do Not Track Requests
            </h2>
            <p>
              Under the EU General Data Protection Regulation (GDPR) and
              applicable privacy standards, we do not track your behavior across
              third-party sites or load non-enhanced tracking tools unless you
              give us your explicit, prior consent via our platform preference
              controls.
            </p>
          </section>

          <section aria-labelledby='legal-heading'>
            <h2
              id='legal-heading'
              className='mb-2 text-xl font-semibold text-dark-chocolate'
            >
              Why Do We Collect Information About You? (Legal Bases & Uses)
            </h2>
            <p className='mb-2'>
              We collect and process your information for specific business
              purposes, backed by valid legal justifications under the GDPR:
            </p>
            <ul className='pl-5 space-y-2 list-disc text-dark-chocolate/80'>
              <li>
                <strong className='text-dark-chocolate'>
                  To Provide and Maintain Service:
                </strong>{' '}
                To maintain our website and deliver our freelance services
                (Legal Basis: Performance of a contract).
              </li>
              <li>
                <strong className='text-dark-chocolate'>
                  To Perform a Contract with Us:
                </strong>{' '}
                To carry out obligations arising from agreements entered into
                with small business clients (Legal Basis: Performance of a
                contract).
              </li>
              <li>
                <strong className='text-dark-chocolate'>
                  To Contact the User:
                </strong>{' '}
                To respond to inquiries, questions, or project correspondence
                (Legal Basis: Legitimate interest and contractual preparation).
              </li>
              <li>
                <strong className='text-dark-chocolate'>
                  To Evaluate and Improve Our Products/Services:
                </strong>{' '}
                To analyze general usage trends and improve website performance
                (Legal Basis: Legitimate interest).
              </li>
            </ul>
          </section>

          <section aria-labelledby='retention-heading'>
            <h2
              id='retention-heading'
              className='mb-2 text-xl font-semibold text-dark-chocolate'
            >
              How Long Do We Retain Your Information?
            </h2>
            <p className='mb-2'>
              We will keep your personal information only for as long as is
              necessary for the purposes set out in this Privacy Policy, unless
              a longer retention period is required or permitted by law (such as
              tax or accounting requirements).
            </p>
            <ul className='pl-5 mb-2 space-y-2 list-disc text-dark-chocolate/80'>
              <li>
                <strong className='text-dark-chocolate'>
                  Client and Project Data:
                </strong>{' '}
                Retained for the duration of the project engagement plus up to 5
                years for legal protection.
              </li>
              <li>
                <strong className='text-dark-chocolate'>
                  Invoices and Financial Records:
                </strong>{' '}
                Retained in accordance with statutory accounting and tax
                regulations.
              </li>
              <li>
                <strong className='text-dark-chocolate'>Inquiries:</strong>{' '}
                Retained for up to 12 months if no formal contract or
                collaboration is established.
              </li>
            </ul>
            <p>
              When we have no ongoing legitimate business need to process your
              personal information, we will securely delete or anonymize it.
            </p>
          </section>

          <section aria-labelledby='sharing-heading'>
            <h2
              id='sharing-heading'
              className='mb-2 text-xl font-semibold text-dark-chocolate'
            >
              Do We Share Your Information?
            </h2>
            <p className='mb-2'>
              We may share your information in the following limited
              circumstances:
            </p>
            <ul className='pl-5 mb-2 space-y-2 list-disc text-dark-chocolate/80'>
              <li>
                <strong className='text-dark-chocolate'>
                  Sharing with Your Consent:
                </strong>{' '}
                When you give explicit consent, we may share information with
                designated third parties.
              </li>
              <li>
                <strong className='text-dark-chocolate'>
                  Legal Obligations:
                </strong>{' '}
                Where we are legally required to do so to comply with applicable
                law, governmental requests, court orders, or legal processes.
              </li>
              <li>
                <strong className='text-dark-chocolate'>
                  Business Transfers:
                </strong>{' '}
                In connection with, or during negotiations regarding, a merger,
                sale of business assets, financing, or acquisition of all or
                part of our business.
              </li>
            </ul>
            <p>
              We do not sell or trade personal information to third parties.
            </p>
          </section>

          <section aria-labelledby='gdpr-heading'>
            <h2
              id='gdpr-heading'
              className='mb-2 text-xl font-semibold text-dark-chocolate'
            >
              GDPR Disclosures
            </h2>
            <div className='space-y-3'>
              <div>
                <h3 className='font-medium text-dark-chocolate'>
                  Cross-Border Data Transfer
                </h3>
                <p>
                  Our website is hosted on modern cloud infrastructure (such as
                  Netlify/Vercel) whose content delivery networks and servers
                  may process data globally, including in the United States.
                  Where data is transferred outside the European Union to
                  regions without an adequacy decision, we ensure appropriate
                  legal safeguards are implemented in accordance with the GDPR,
                  such as Standard Contractual Clauses and reliance on the
                  EU-U.S. Data Privacy Framework.
                </p>
              </div>
              <div>
                <h3 className='font-medium text-dark-chocolate'>
                  Automatic Processing of Data
                </h3>
                <p>
                  We do not use any automated decision-making or profiling of
                  personal information that produces legal or similarly
                  significant effects on individuals.
                </p>
              </div>
              <div>
                <h3 className='font-medium text-dark-chocolate'>
                  Your Rights Under the GDPR
                </h3>
                <p className='mb-1'>
                  In accordance with Articles 12 to 23 of the GDPR, you have the
                  following rights:
                </p>
                <ul className='pl-5 space-y-1 list-disc text-dark-chocolate/80'>
                  <li>
                    <strong className='text-dark-chocolate'>
                      Right to Object:
                    </strong>{' '}
                    To object to the processing of your personal data in certain
                    circumstances.
                  </li>
                  <li>
                    <strong className='text-dark-chocolate'>
                      Right of Access:
                    </strong>{' '}
                    To request access to the data we hold about you and receive
                    a copy.
                  </li>
                  <li>
                    <strong className='text-dark-chocolate'>
                      Right to Restriction:
                    </strong>{' '}
                    To restrict the processing of your personal data under
                    certain conditions.
                  </li>
                  <li>
                    <strong className='text-dark-chocolate'>
                      Right to Rectification:
                    </strong>{' '}
                    To rectify or modify inaccurate or incomplete personal
                    information.
                  </li>
                  <li>
                    <strong className='text-dark-chocolate'>
                      Right to Erasure:
                    </strong>{' '}
                    To request the deletion of your personal information (the
                    right to be forgotten).
                  </li>
                </ul>
                <p className='mt-2'>
                  To exercise any of these rights, please contact us using the
                  details provided below.
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby='non-consent-heading'>
            <h2
              id='non-consent-heading'
              className='mb-2 text-xl font-semibold text-dark-chocolate'
            >
              Consequences of Non-Consent
            </h2>
            <p>
              Providing basic contact information is necessary to deliver our
              freelance services seamlessly. Refusing consent or failing to
              provide essential details may result in limited access to our
              services and reduced features on the website.
            </p>
          </section>

          <section aria-labelledby='children-heading'>
            <h2
              id='children-heading'
              className='mb-2 text-xl font-semibold text-dark-chocolate'
            >
              Privacy of Children
            </h2>
            <p>
              We do not knowingly provide services to or collect data from
              children. If you believe a child has provided us with personal
              information without parental consent, please contact us
              immediately so we can remove it.
            </p>
          </section>

          <section aria-labelledby='security-heading'>
            <h2
              id='security-heading'
              className='mb-2 text-xl font-semibold text-dark-chocolate'
            >
              Security of Your Personal Information
            </h2>
            <p>
              We take reasonable technical and organizational measures to
              protect the information we collect. However, no method of internet
              transmission or digital storage is 100% secure, and absolute
              security cannot be guaranteed.
            </p>
          </section>

          <section aria-labelledby='links-heading'>
            <h2
              id='links-heading'
              className='mb-2 text-xl font-semibold text-dark-chocolate'
            >
              Links to Other Websites or Apps
            </h2>
            <p>
              Our website may contain links to external sites not operated by
              us. We encourage you to review the privacy policies of any
              third-party websites you visit.
            </p>
          </section>

          <section aria-labelledby='changes-heading'>
            <h2
              id='changes-heading'
              className='mb-2 text-xl font-semibold text-dark-chocolate'
            >
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in legal requirements or our internal practices. The
              revised policy will be posted on this page with an updated
              effective date.
            </p>
          </section>

          <section
            aria-labelledby='contact-heading'
            className='pt-6 border-t border-dark-chocolate/10'
          >
            <h2
              id='contact-heading'
              className='mb-2 text-xl font-semibold text-dark-chocolate'
            >
              Contact Us
            </h2>
            <p className='mb-3'>
              For any questions, concerns, or requests regarding your privacy or
              data rights, you can reach us directly:
            </p>
            <ul className='p-4 space-y-1 border rounded-md border-warm-beige bg-surface text-dark-chocolate/80'>
              <li>
                <strong className='text-dark-chocolate'>
                  Data Controller / Representative:
                </strong>{' '}
                Fremtid Web (Independent Freelance Operation)
              </li>
              <li>
                <strong className='text-dark-chocolate'>
                  Data Protection Officer (DPO):
                </strong>{' '}
                As a small, independent freelance operation, we are not required
                to appoint a formal Data Protection Officer under the GDPR.
              </li>{' '}
            </ul>
          </section>
        </div>

        <div className='pt-6 mt-8 text-center border-t border-dark-chocolate/10'>
          <Link
            to='/'
            className='text-sm font-medium text-terra-cotta hover:underline'
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};
