import Image from 'next/image';
import Link from 'next/link';

import { culpa } from '@/app/ui/fonts';

import './logo.css';

const Logo = () => {
  return (
    <Link href='/' tabIndex={-1} scroll={false}>
      <div
        className={`animate-pulseGlow relative ml-[15px] mr-[50px] flex rounded-[44%] px-[44px] 
          text-[50px] shadow-[0_0_25px_10px_rgba(255,255,255,0.5)] ${culpa.className} antialiased
          max-xl:mx-[5px]`}
      >
        <div className='hidden xl:block'>Nataly</div>
        <div className='logoImageContainer'>
          <div className='logoGlow'></div>
          <Image
            src='/logo.svg'
            alt='Логотип'
            width={80}
            height={80}
            priority={true}
          />
        </div>
        <div className='ml-[10px] hidden xl:block'>Lash</div>
      </div>
    </Link>
  );
};

export default Logo;
