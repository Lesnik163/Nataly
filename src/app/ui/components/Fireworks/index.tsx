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
          priority={true}
          className='ml-[50px] mt-[50px] block -scale-x-100'
          style={{ width: 'auto', height: 'auto' }}
        />
        <Image
          src={'/firework.svg'}
          alt='firework'
          width={80}
          height={80}
          priority={true}
          className='mr-[50px] mt-[50px] block'
          style={{ width: 'auto', height: 'auto' }}
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
          priority={true}
          className='mb-[50px] ml-[50px] block rotate-180'
          style={{ width: 'auto', height: 'auto' }}
        />
        <Image
          src={'/firework.svg'}
          alt='firework'
          width={80}
          height={80}
          priority={true}
          className='mb-[50px] mr-[50px] block rotate-180 -scale-x-100'
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>
    </div>
  );
};
