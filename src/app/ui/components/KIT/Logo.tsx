import Image from 'next/image';

import { culpa } from '@/app/ui/fonts';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/' tabIndex={-1}>
      <div
        className={`animate-pulseGlow relative z-10 ml-[15px] mr-[50px] flex rounded-[44%] px-[44px] text-[50px] shadow-[0_0_25px_10px_rgba(255,255,255,0.5)] 
        ${culpa.className} antialiased`}
      >
        <div>Nataly</div>
        <div className='logoImageContainer'>
          <div className='logoGlow'></div>
          <Image src='/logo.svg' alt='Логотип' width={80} height={80} />
        </div>
        <div className='ml-[10px]'>Lash</div>
      </div>
    </Link>
  );
};

export default Logo;
