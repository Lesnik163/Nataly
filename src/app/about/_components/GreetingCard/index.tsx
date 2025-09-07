import React from 'react';

type GreetingCardProps = {
  icon: string;
  title: string;
  description: string;
};

export const GreetingCard = ({
  icon,
  title,
  description,
}: GreetingCardProps) => {
  return (
    <div className='mx-4 rounded-2xl border border-rose-200/50 bg-white/80 p-6 shadow-lg backdrop-blur-sm md:mx-0'>
      <div className='mb-4 text-3xl'>{icon}</div>
      <h3 className='mb-2 text-xl font-semibold text-rose-800'>{title}</h3>
      <p className='text-rose-700'>{description}</p>
    </div>
  );
};
