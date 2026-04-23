import { useTranslation } from 'react-i18next';

import nameDesk from '@/img/hero/nameDesk.webp';
import nameMob from '@/img/hero/nameMob.webp';
import dekor from '@/img/dekor/decorLotos.webp';
import logoDesk from '@/img/logo/logoTaliaDesk.webp';
import logoMob from '@/img/logo/logoTaliaMob.webp';

const HeroInfo = () => {
  const { t } = useTranslation();
  return (
    <div className=" flex flex-col justify-center items-center gap-[16px] mb-[24px] md:gap-[24px] lg:mb-[0px] lg:pr-[24px] ">
      <h1 className="sr-only">TALIA 2.KO</h1>
      <picture>
        <source media="(max-width: 768px)" srcSet={logoMob} />
        <img
          src={logoDesk}
          alt="TALIA 2.KO logo"
          loading="eager"
          decoding="async"
          className="w-[90px] h-[90px] md:w-[140px] md:h-[150px]"
        />
      </picture>
      <picture>
        <source media="(max-width: 768px)" srcSet={nameMob} />
        <img
          src={nameDesk}
          alt="TALIA 2.KO Main hero image"
          loading="eager"
          decoding="async"
          className="w-[280px] md:w-[400px] h-auto"
          width={400}
          height={80}
        />
      </picture>
      <p className="text-accentLightGold font-bold text-base md:text">{t('hero.slogan')}</p>
      <p className="text-center text-text-theme font-normal text-sm mb-[16px] md:text-base md:mb-[24px]">
        {t('hero.description')}
      </p>
      <button type="button" className="btnHero ">
        {t('btn.heroInfoBtn')}
      </button>
      <img src={dekor} alt="dekor element lotos" className="hidden lg:block" width={400} />
    </div>
  );
};
export default HeroInfo;
