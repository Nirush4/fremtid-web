import type { ReactNode } from 'react';

interface IllustrationFrameProps {
  readonly children: ReactNode;
  readonly label?: string;
  readonly className?: string;
}

/** Responsive container for decorative SVG illustrations. */
export function IllustrationFrame({
  children,
  label,
  className = '',
}: IllustrationFrameProps) {
  return (
    <figure
      className={`mx-auto w-full max-w-md lg:max-w-none ${className}`}
      aria-hidden={label ? undefined : true}
      aria-label={label}
    >
      <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-cappuccino/30 bg-surface p-4 sm:p-6">
        <div className="flex h-full w-full items-center justify-center">{children}</div>
      </div>
    </figure>
  );
}

interface PageIntroProps {
  readonly title: string;
  readonly titleId: string;
  readonly description: string;
  readonly illustration: ReactNode;
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
  illustrationLabel,
  children,
  align = 'start',
}: PageIntroProps) {
  const textAlign =
    align === 'center'
      ? 'mx-auto max-w-4xl text-center lg:mx-0 lg:max-w-none lg:text-left'
      : '';

  return (
    <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={textAlign}>
        <h1
          id={titleId}
          className="text-3xl font-bold leading-tight text-dark-chocolate sm:text-4xl lg:text-5xl"
        >
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-dark-chocolate sm:text-lg">
          {description}
        </p>
        {children && <div className="mt-8">{children}</div>}
      </div>
      <IllustrationFrame label={illustrationLabel}>{illustration}</IllustrationFrame>
    </div>
  );
}

interface SectionWithIllustrationProps {
  readonly heading: string;
  readonly headingId: string;
  readonly subheading?: string;
  readonly illustration: ReactNode;
  readonly illustrationLabel?: string;
  readonly children: ReactNode;
  readonly reverse?: boolean;
}

/** Two-column section pairing content with an illustration. */
export function SectionWithIllustration({
  heading,
  headingId,
  subheading,
  illustration,
  illustrationLabel,
  children,
  reverse = false,
}: SectionWithIllustrationProps) {
  return (
    <div
      className={`mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
        reverse ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      <div>
        <h2
          id={headingId}
          className="text-2xl font-bold text-dark-chocolate sm:text-3xl"
        >
          {heading}
        </h2>
        {subheading && (
          <p className="mt-3 text-base leading-relaxed text-dark-chocolate">
            {subheading}
          </p>
        )}
        <div className="mt-8">{children}</div>
      </div>
      <IllustrationFrame label={illustrationLabel} className="lg:justify-self-center">
        {illustration}
      </IllustrationFrame>
    </div>
  );
}
