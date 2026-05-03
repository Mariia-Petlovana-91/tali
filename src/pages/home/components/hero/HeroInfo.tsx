import { useTranslation } from 'react-i18next';

import nameDesk from '@/img/hero/nameDesk.webp';
import nameMob from '@/img/hero/nameMob.webp';
import dekor from '@/img/dekor/decorLotos.webp';
import logoDesk from '@/img/logo/logoTaliaDesk.webp';
import logoMob from '@/img/logo/logoTaliaMob.webp';
import { HeroBtn } from '@/shared';

const HeroInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col justify-center items-center gap-[16px] mb-[24px] md:gap-[24px] lg:mb-0 lg:pr-[24px]">
      <h1 className="sr-only">Talia K2O</h1>

      <picture>
        <source media="(max-width: 768px)" srcSet={logoMob} />
        <img
          src={logoDesk}
          alt="Talia K2O logo"
          width={164}
          height={180}
          sizes="(max-width: 768px) 90px, 140px"
          className="w-[90px] md:w-[140px] h-auto"
        />
      </picture>

      <picture>
        <source media="(max-width: 768px)" srcSet={nameMob} />
        <img
          src={nameDesk}
          alt="Talia K2O"
          width={560}
          height={130}
          loading="eager"
          decoding="async"
          sizes="(max-width: 768px) 280px, 400px"
          className="w-[280px] md:w-[400px] h-auto"
        />
      </picture>

      <p className="text-center text-accent-light-gold font-bold text-sm md:text-base">{t('hero.slogan')}</p>

      <p className="text-center text-text-theme font-normal text-sm mb-[16px] md:text-base md:mb-[24px]">
        {t('hero.description')}
      </p>

      <HeroBtn nameClass="p-[16px] mb-[16px] md:p-[32px] md:mb-[24px]" />

      <img
        src={dekor}
        alt="Decorative lotus element"
        width={1000}
        height={188}
        loading="lazy"
        decoding="async"
        className="hidden lg:block w-[400px] h-auto"
      />
    </div>
  );
};

export default HeroInfo;
