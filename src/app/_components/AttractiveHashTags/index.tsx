import './attractiveHashTags.css';

const baseBox =
  'group relative mt-[40px] h-[120px] w-full max-w-full min-w-0 shrink overflow-hidden rounded-2xl border border-rose-200 bg-white/10 px-4 text-white/90 shadow-lg backdrop-blur-sm transition-all duration-300 md:hover:-translate-y-2 md:hover:shadow-2xl animate-slide-in-right box-border max-[576px]:h-[100px] max-[576px]:px-3 md:h-[150px] md:max-w-xl md:px-6';

const messages = [
  'Студия красоты у метро Саларьево — подчеркните свою естественную красоту уже сегодня',
  'Никогда не поздно стать неотразимой! Ваше время сиять пришло! Преобразитесь и удивите всех!',
  'Откройте новые грани своего обаяния!',
];

export const AttractiveHashTags = () => {
  return (
    <>
      {messages.map((text, idx) => (
        <div
          key={idx}
          className={baseBox}
          style={{ animationDelay: `${idx * 0.5}s` }}
        >
          <div className='absolute inset-0 bg-gradient-to-br from-rose-50/30 to-pink-100/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
          <div className='flex h-full items-center justify-center text-center'>
            <p className='break-words text-base max-[576px]:text-sm md:text-xl'>
              {text}
            </p>
          </div>
          <div className='absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-pink-300 to-rose-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
        </div>
      ))}
    </>
  );
};