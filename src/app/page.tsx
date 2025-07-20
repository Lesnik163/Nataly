import Greeting from './ui/components/Greeting';
import { GreetingInformation } from './ui/components/GreetingInformation';
import { FireWorkBottom, FireWorkTop } from './ui/components/Fireworks';

export default function Home() {
  return (
    <>
      <div
        className='fixed top-0 z-[-1] h-[calc(100vh+100px)] 
      w-full bg-[url(/home_page/home_page_md.jpg)] bg-cover bg-no-repeat
       md:bg-[url(/home_page/home_page_xl.jpg)] md:bg-center'
      ></div>
      <FireWorkTop />
      <Greeting />
      <FireWorkBottom />
      <GreetingInformation />
    </>
  );
}
