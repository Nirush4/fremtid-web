import React from 'react';

export function HeroIllustration(): React.JSX.Element {
  return (
    <div className='flex items-center justify-center w-full h-full overflow-hidden max-h-96'>
      <img
        src='/image/hero.svg'
        alt='UI/UX Design Illustration'
        className='object-contain w-full h-auto mix-blend-multiply'
      />
    </div>
  );
}
