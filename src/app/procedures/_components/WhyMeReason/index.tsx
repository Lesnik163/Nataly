import React from 'react';

type WhyMeReasonProps = {
  icon: string;
  title: string;
  description: string;
};

export const WhyMeReason = ({ icon, title, description }: WhyMeReasonProps) => {
  return (
    <div className='text-center'>
      <div className='mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-gradient-to-r from-rose-400 to-pink-400'>
        <span className='text-xl text-white'>{icon}</span>
      </div>
      <h4 className='mb-2 font-semibold text-rose-800'>{title}</h4>
      <p className='text-sm text-gray-600'>{description}</p>
    </div>
  );
};
