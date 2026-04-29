import AnimationImg from './AnimationImg';
import HeroInfo from './HeroInfo';
import { Section } from '@/shared';

const Hero = () => {
  return (
    <Section>
      <div className="lg:flex flex-row">
        <HeroInfo />
        <AnimationImg />
      </div>
    </Section>
  );
};

export default Hero;
