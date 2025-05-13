import React from 'react';

import Image from 'next/image';

export const FireWorkTop = () => {
  return (
    <div className='max-[1100px]:mt-[50px]'>
      <div className='flex justify-between max-[1100px]:hidden'>
        <Image
          src={'/firework.svg'}
          alt='firework'
          width={80}
          height={80}
          className='ml-[50px] mt-[50px] block scale-[2] scale-x-[-2]'
        />
        <Image
          src={'/firework.svg'}
          alt='firework'
          width={80}
          height={80}
          className='mr-[50px] mt-[50px] block scale-[2]'
        />
      </div>
    </div>
  );
};

export const FireWorkBottom = () => {
  return (
    <div className='max-[1100px]:mb-[50px]'>
      <div className='flex justify-between max-[1100px]:mb-[50px] max-[1100px]:hidden'>
        <Image
          src={'/firework.svg'}
          alt='firework'
          width={80}
          height={80}
          className='mb-[50px] ml-[50px] block rotate-180 scale-[2]'
        />
        <Image
          src={'/firework.svg'}
          alt='firework'
          width={80}
          height={80}
          className='mb-[50px] mr-[50px] block rotate-180 scale-[2] scale-x-[-2]'
        />
      </div>
    </div>
  );
};
