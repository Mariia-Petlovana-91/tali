import logo from '@/img/hero/nameMob.webp';
import { MobMenuBtn, Navigation, Language } from '@/shared';

const Header = () => {
  return (
    <header className="relative py-[24px] lg:py-[32px] flex items-center justify-between border-b border-b-accent-dark-gold">
      <a href="/" aria-label="Go Home">
        <img src={logo} alt="logo" className="w-[120px] md:w-[180px] h-auto " />
      </a>
      <div className="hidden lg:block">
        <Navigation />
      </div>

      <div className="flex items-center gap-[16px]">
        <Language />
        <MobMenuBtn />
      </div>
    </header>
  );
};
export default Header;
