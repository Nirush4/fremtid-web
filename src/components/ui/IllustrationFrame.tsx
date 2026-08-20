import type { ReactNode } from 'react';

interface IllustrationFrameProps {
  readonly children?: ReactNode;
  readonly svgUrl?: string;
  readonly label?: string;
  readonly className?: string;
}

export function IllustrationFrame({
  children,
  svgUrl,
  label,
  className = '',
}: IllustrationFrameProps) {
  return (
    <figure
      className={`mx-auto w-full max-w-md lg:max-w-none ${className}`}
      aria-hidden={label ? undefined : true}
      aria-label={label}
    >
      <div className='aspect-[4/3] w-full'>
        <div className='flex items-center justify-center w-full h-full'>
          {svgUrl ? (
            <img
              src={svgUrl}
              alt={label || ''}
              className='object-contain w-full h-full'
            />
          ) : (
            children
          )}
        </div>
      </div>
    </figure>
  );
}

interface PageIntroProps {
  readonly title: string;
  readonly titleId: string;
  readonly description: string;
  readonly illustration?: ReactNode;
  readonly svgUrl?: string;
  readonly illustrationLabel?: string;
  readonly children?: ReactNode;
  readonly align?: 'center' | 'start';
}

/** Split hero / page intro with text and illustration side-by-side on desktop. */
export function PageIntro({
  title,
  titleId,
  description,
  illustration,
  svgUrl,
  illustrationLabel,
  children,
  align = 'start',
}: PageIntroProps) {
  const textAlign =
    align === 'center'
      ? 'mx-auto max-w-4xl text-center lg:mx-0 lg:max-w-none lg:text-left'
      : '';

  return (
    <div className='grid items-center max-w-6xl gap-10 mx-auto lg:grid-cols-2 lg:gap-16'>
      <div className={textAlign}>
        <h1
          id={titleId}
          className='text-3xl font-bold leading-tight text-dark-chocolate sm:text-4xl lg:text-5xl'
        >
          {title}
        </h1>
        <p className='max-w-xl mt-4 text-base leading-relaxed text-dark-chocolate sm:text-lg'>
          {description}
        </p>
        {children && <div className='mt-8'>{children}</div>}
      </div>
      <IllustrationFrame label={illustrationLabel} svgUrl={svgUrl}>
        {illustration}
      </IllustrationFrame>
    </div>
  );
}

interface SectionWithIllustrationProps {
  readonly heading: string;
  readonly headingId: string;
  readonly subheading?: string;
  readonly illustration?: ReactNode;
  readonly svgUrl?: string;
  readonly illustrationLabel?: string;
  readonly children: ReactNode;
  readonly reverse?: boolean;
}

/** Two-column section pairing content with an illustration. */
export function SectionWithIllustration({
  heading,
  headingId,
  subheading,

  children,
}: SectionWithIllustrationProps) {
  return (
    <div className={`mx-auto grid max-w-6xl items-center gap-10  `}>
      <div>
        <h2
          id={headingId}
          className='text-2xl font-bold text-dark-chocolate sm:text-3xl'
        >
          {heading}
        </h2>
        {subheading && (
          <p className='mt-3 text-base leading-relaxed text-dark-chocolate'>
            {subheading}
          </p>
        )}
        <div className='mt-8'>{children}</div>
      </div>
    </div>
  );
}
