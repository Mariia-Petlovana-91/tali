import AnimationImg from './AnimationImg';
import HeroInfo from './HeroInfo';

const Hero = () => {
  return (
    <div className="xl:flex md:flex-row">
      <HeroInfo />
      <AnimationImg />
    </div>
  );
};

export default Hero;
