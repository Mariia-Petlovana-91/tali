import logo from '@/img/hero/nameMob.webp';
import { MobMenuBtn, Navigation } from '@/shared';

const Header = () => {
  return (
    <header className="relative pt-[24px] pb-[48px] lg:pt-[48px] lg:pb-[68px] flex items-center justify-between">
      <a href="/" aria-label="Go Home">
        <img src={logo} alt="logo" className="w-[120px] md:w-[180px] h-auto" />
      </a>
      <div className="hidden lg:block">
        <Navigation />
      </div>

      <div className="flex">
        <MobMenuBtn />
      </div>
    </header>
  );
};
export default Header;
