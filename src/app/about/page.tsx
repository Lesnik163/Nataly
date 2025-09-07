import { FireWorkBottom, FireWorkTop } from './_components/Fireworks';
import Greeting from './_components/Greeting';
import { GreetingInformation } from './_components/GreetingInformation';
import { AboutBG } from './_components/AboutBG';

export default function About() {
  return (
    <main>
      <AboutBG />
      <FireWorkTop />
      <Greeting />
      <FireWorkBottom />
      <GreetingInformation />
    </main>
  );
}
