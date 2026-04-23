import AnimationImg from './AnimationImg';
import HeroInfo from './HeroInfo';

const Hero = () => {
  return (
    <div className="lg:flex flex-row">
      <HeroInfo />
      <AnimationImg />
    </div>
  );
};

export default Hero;
