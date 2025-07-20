import React from 'react';

type WhyMePointProps = {
  text: string;
};

export const WhyMePoint = ({ text }: WhyMePointProps) => {
  return (
    <div className='flex items-center gap-3'>
      <div className='flex size-8 items-center justify-center rounded-full bg-rose-200 text-rose-700'>
        ✓
      </div>
      <span className='text-rose-700'>{text}</span>
    </div>
  );
};
