import { WhyMe } from '../WhyMe';
import { GreetingTitle } from '../GreetingTitle';
import { GreetingCard } from '../GreetingCard';

export const GreetingInformation = () => {
  return (
    <div className='relative h-screen w-full bg-[url(/bubbles.svg)] bg-cover bg-center bg-no-repeat'>
      <div className='absolute inset-0 bg-gradient-to-br from-rose-200/40 to-pink-200/40'></div>
      <div className='absolute inset-0 bg-gradient-to-t from-white/5 to-transparent'></div>

      <div className='relative z-10 flex h-full items-center justify-center'>
        <div className='text-center'>
          <GreetingTitle />
          <div className='mx-auto max-w-4xl space-y-8'>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
              <GreetingCard
                icon='✨'
                title='Профессионализм'
                description='Более 10 лет опыта в индустрии красоты. Каждая процедура выполняется с любовью и вниманием к деталям.'
              />
              <GreetingCard
                icon='💝'
                title='Индивидуальный подход'
                description='Каждый клиент уникален. Подбираем процедуры и материалы специально под ваши особенности.'
              />
              <GreetingCard
                icon='🌟'
                title='Качественные материалы'
                description='Используем только премиальные материалы от проверенных производителей для вашей безопасности.'
              />
            </div>
            <WhyMe />
          </div>
        </div>
      </div>
    </div>
  );
};

