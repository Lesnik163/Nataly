import { HeaderSection } from './_components/HeaderSection';
import { BenefitsSection } from './_components/BenefitsSection';
import { OrderSection } from './_components/OrderSection';
import { HomeBG } from './_components/HomeBG';

export default function Home() {
  return (
    <main>
      <HomeBG />
      <div className='space-y-0'>
        <HeaderSection />
        <div className='relative z-10 -mt-8 bg-rose-50/95 pt-12'>
          <div className='pointer-events-none absolute inset-x-0 -top-16 h-16  bg-rose-50/95 shadow-[0_-8px_24px_rgba(0,0,0,0.15)]' />
          <BenefitsSection />
          <OrderSection />
        </div>
      </div>
    </main>
  );
}
