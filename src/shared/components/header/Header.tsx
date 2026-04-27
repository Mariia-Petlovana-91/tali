import logo from '@/img/hero/nameMob.webp';
import { MobMenuBtn } from '@/shared';
import { Navigation } from '@/shared/components';

const Header = () => {
  return (
    <header className="pt-[24px] pb-[48px] lg:pt-[48px] lg:pb-[68px] flex items-center justify-between">
      <a href="/" aria-label="Go Home">
        <img src={logo} alt="logo" className="w-[120px] md:w-[180px] h-auto" />
      </a>
      <Navigation />
      <div className="flex">
        <MobMenuBtn />
      </div>
    </header>
  );
};
export default Header;
