import AnimationImg from './AnimationImg';
import HeroInfo from './HeroInfo';
import { Section } from '@/shared';

import heroBg from '@/img/dekor/sectionHeroDecor.webp';

const Hero = () => {
  return (
    <Section>
      <div
        style={
          {
            '--decor-hero-bg': `url(${heroBg})`,
          } as React.CSSProperties
        }
        className="lg:flex flex-row before:content-[''] before:absolute before:inset-0
        before:bg-[image:var(--decor-hero-bg)]
        before:bg-no-repeat before:bg-center lg:before:bg-left before:bg-contain
        before:opacity-15 before:pointer-events-none"
      >
        <HeroInfo />
        <AnimationImg />
      </div>
    </Section>
  );
};

export default Hero;
