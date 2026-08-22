import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLanguage } from '../../context/LanguageContext';
import {
  Send,
  CheckCircle2,
  User,
  Mail,
  Phone,
  MessageSquareText,
  Package,
  ChevronDown,
} from 'lucide-react';

interface Web3FormsResponse {
  success: boolean;
  message: string;
}

export function ContactSection() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const contactSchema = z.object({
    name: z
      .string()
      .min(1, { message: t.home.contactSection.errors.nameRequired }),
    email: z.email({ message: t.home.contactSection.errors.emailInvalid }),
    phone: z
      .string()
      .min(1, { message: t.home.contactSection.errors.phoneRequired })
      .regex(/^\d+$/, { message: 'Please enter numbers only' }),
    selectedPackage: z
      .string()
      .min(1, { message: t.home.contactSection.errors.packageRequired }),
    message: z
      .string()
      .min(1, { message: t.home.contactSection.errors.messageRequired })
      .min(10, { message: t.home.contactSection.errors.messageMin }),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null);

    const formValues = {
      access_key: import.meta.env.VITE_WEB3FORMS_KEY,
      subject: `New Inquiry: ${data.selectedPackage} Package - Fremtid Web`,
      from_name: data.name,
      name: data.name,
      email: data.email,
      phone: data.phone,
      package: data.selectedPackage,
      message: data.message,
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      const responseData: Web3FormsResponse = await res.json();

      if (responseData.success) {
        setIsSubmitted(true);
        reset();
      } else {
        setServerError(
          responseData.message ||
            'Failed to send message. Please try again later.'
        );
      }
    } catch {
      setServerError(
        'Network error. Please check your connection and try again.'
      );
    }
  };

  return (
    <section
      aria-labelledby='contact-heading'
      className='px-4 py-16 bg-surface sm:px-6'
    >
      <div className='max-w-4xl mx-auto'>
        <div className='p-5 border shadow-sm rounded-3xl bg-warm-beige sm:p-12 border-dark-chocolate/5'>
          <div className='max-w-2xl mx-auto mb-10 text-center'>
            <span className='inline-block rounded-full bg-terra-cotta/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-terra-cotta mb-4'>
              {t.home.contactSection.tag}
            </span>
            <h2
              id='contact-heading'
              className='text-3xl font-extrabold tracking-tight text-dark-chocolate sm:text-4xl'
            >
              {t.home.contactSection.title}
            </h2>
            <p className='mt-3 text-base leading-relaxed text-dark-chocolate/80'>
              {t.home.contactSection.description}
            </p>
          </div>

          {isSubmitted ? (
            <div className='p-8 space-y-4 text-center border rounded-2xl bg-surface border-dark-chocolate/10 animate-fade-in'>
              <div className='flex items-center justify-center mx-auto text-green-600 bg-green-100 rounded-full h-14 w-14'>
                <CheckCircle2 className='w-8 h-8' />
              </div>
              <h3 className='text-xl font-bold text-dark-chocolate'>
                {t.home.contactSection.successTitle}
              </h3>
              <p className='max-w-md mx-auto text-sm text-dark-chocolate/80'>
                {t.home.contactSection.successMessage}
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className='mt-4 inline-block rounded-xl bg-dark-chocolate px-6 py-2.5 text-sm font-semibold text-surface transition-colors hover:bg-dark-chocolate/90 cursor-pointer'
              >
                {t.home.contactSection.sendAnother}
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='space-y-6'
              noValidate
            >
              <input
                type='checkbox'
                name='botcheck'
                className='hidden'
                style={{ display: 'none' }}
                aria-hidden='true'
                tabIndex={-1}
              />

              <div>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-semibold text-dark-chocolate'
                >
                  {t.home.contactSection.nameLabel}
                </label>
                <div className='relative'>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-dark-chocolate/40'>
                    <User className='w-4 h-4' />
                  </span>
                  <input
                    id='name'
                    type='text'
                    placeholder={t.home.contactSection.namePlaceholder}
                    {...register('name')}
                    className={`w-full rounded-xl bg-surface pl-11 pr-4 py-3 text-sm text-dark-chocolate border outline-none transition-all ${
                      errors.name
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                        : 'border-dark-chocolate/10 focus:border-terra-cotta focus:ring-2 focus:ring-terra-cotta/20'
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className='mt-1.5 text-xs text-red-600 font-medium'>
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-semibold text-dark-chocolate'
                >
                  {t.home.contactSection.emailLabel}
                </label>
                <div className='relative'>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-dark-chocolate/40'>
                    <Mail className='w-4 h-4' />
                  </span>
                  <input
                    id='email'
                    type='email'
                    placeholder={t.home.contactSection.emailPlaceholder}
                    {...register('email')}
                    className={`w-full rounded-xl bg-surface pl-11 pr-4 py-3 text-sm text-dark-chocolate border outline-none transition-all ${
                      errors.email
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                        : 'border-dark-chocolate/10 focus:border-terra-cotta focus:ring-2 focus:ring-terra-cotta/20'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className='mt-1.5 text-xs text-red-600 font-medium'>
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='phone'
                  className='block mb-2 text-sm font-semibold text-dark-chocolate'
                >
                  {t.home.contactSection.phoneLabel}
                </label>
                <div className='relative'>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-dark-chocolate/40'>
                    <Phone className='w-4 h-4' />
                  </span>
                  <input
                    id='phone'
                    type='tel'
                    placeholder={t.home.contactSection.phonePlaceholder}
                    {...register('phone')}
                    className={`w-full rounded-xl bg-surface pl-11 pr-4 py-3 text-sm text-dark-chocolate border outline-none transition-all ${
                      errors.phone
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                        : 'border-dark-chocolate/10 focus:border-terra-cotta focus:ring-2 focus:ring-terra-cotta/20'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className='mt-1.5 text-xs text-red-600 font-medium'>
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='selectedPackage'
                  className='block mb-2 text-sm font-semibold text-dark-chocolate'
                >
                  {t.home.contactSection.packageLabel}
                </label>
                <div className='relative'>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-dark-chocolate/40'>
                    <Package className='w-4 h-4' />
                  </span>
                  <select
                    id='selectedPackage'
                    defaultValue=''
                    {...register('selectedPackage')}
                    className={`w-full rounded-xl bg-surface pl-11 pr-10 py-3 text-sm text-dark-chocolate border outline-none transition-all appearance-none cursor-pointer ${
                      errors.selectedPackage
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                        : 'border-dark-chocolate/10 focus:border-terra-cotta focus:ring-2 focus:ring-terra-cotta/20'
                    }`}
                  >
                    <option value='' disabled>
                      {t.home.contactSection.packagePlaceholder}
                    </option>
                    <option value='starter'>
                      {t.home.contactSection.packageOptions.starter}
                    </option>
                    <option value='growth'>
                      {t.home.contactSection.packageOptions.growth}
                    </option>
                    <option value='complete'>
                      {t.home.contactSection.packageOptions.complete}
                    </option>
                  </select>
                  <span className='absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-dark-chocolate/40'>
                    <ChevronDown className='w-4 h-4' />
                  </span>
                </div>
                {errors.selectedPackage && (
                  <p className='mt-1.5 text-xs text-red-600 font-medium'>
                    {errors.selectedPackage.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block mb-2 text-sm font-semibold text-dark-chocolate'
                >
                  {t.home.contactSection.messageLabel}
                </label>
                <div className='relative'>
                  <span className='absolute top-3.5 left-0 flex items-start pl-4 text-dark-chocolate/40 pointer-events-none'>
                    <MessageSquareText className='w-4 h-4' />
                  </span>
                  <textarea
                    id='message'
                    rows={4}
                    placeholder={t.home.contactSection.messagePlaceholder}
                    {...register('message')}
                    className={`w-full rounded-xl bg-surface pl-11 pr-4 py-3 text-sm text-dark-chocolate border outline-none transition-all resize-y min-h-[120px] ${
                      // <-- Added min-h-[120px]
                      errors.message
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                        : 'border-dark-chocolate/10 focus:border-terra-cotta focus:ring-2 focus:ring-terra-cotta/20'
                    }`}
                  />
                </div>
                {errors.message && (
                  <p className='mt-1.5 text-xs text-red-600 font-medium'>
                    {errors.message.message}
                  </p>
                )}
              </div>

              {serverError && (
                <div
                  role='alert'
                  className='p-3 text-xs text-red-700 bg-red-100 border border-red-300 rounded-xl'
                >
                  {serverError}
                </div>
              )}

              <div className='text-center sm:text-right'>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-terra-cotta px-8 py-3.5 text-sm font-bold text-surface transition-all duration-300 hover:bg-terra-cotta/90 hover:shadow-md disabled:opacity-70 cursor-pointer'
                >
                  {isSubmitting ? (
                    <span>{t.home.contactSection.submittingButton}</span>
                  ) : (
                    <>
                      <span>{t.home.contactSection.submitButton}</span>
                      <Send className='w-4 h-4' />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
