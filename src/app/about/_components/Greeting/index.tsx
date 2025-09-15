import { GreetingOffer } from '../GreetingOffer';
import { GreetingName } from '../GreetingName';
import { GreetingText } from '../GreetingText';

import './greeting.css';

const GreetingComponent = () => {
  return (
    <div className='relative z-10 flex h-[calc(screen-100px)] flex-col items-center justify-between'>
      <GreetingText />
      <GreetingName />
      <GreetingOffer />
    </div>
  );
};

export default GreetingComponent;
