import logo from '@/img/hero/nameMob.webp';

const Logo = () => {
  return (
    <a href="/" aria-label="Go Home">
      <img src={logo} alt="logo" className=" w-[120px] md:w-[180px] h-auto " />
    </a>
  );
};

export default Logo;
