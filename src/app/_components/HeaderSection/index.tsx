import { ArrowPointer } from '../ArrowPointer';
import { AttractiveHeader } from '../AttractiveHeader';
import { AttractiveHashTags } from '../AttractiveHashTags';
import { ShowButton } from '../ShowButton';

export const HeaderSection = () => {
  return (
    <section className='-mt-auto relative mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center gap-10 px-4 md:flex-row'>
      <div className='min-w-0 flex-1 shrink text-center md:text-left'>
        <AttractiveHeader />
        <AttractiveHashTags />
        <ShowButton />
      </div>
      <ArrowPointer />
    </section>
  );
};
