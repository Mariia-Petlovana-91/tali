import { MobMenuBtn, Navigation, Language, Logo } from '@/shared';

const Header = () => {
  return (
    <header className="relative py-[24px] lg:py-[32px] flex items-center justify-between border-b border-b-accent-dark-gold">
      <Logo />
      <div className="hidden md:block">
        <Navigation />
      </div>

      <div className="flex items-center gap-[24px]">
        <Language />
        <MobMenuBtn />
      </div>
    </header>
  );
};
export default Header;
