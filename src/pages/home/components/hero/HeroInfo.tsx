import { useTranslation } from 'react-i18next';

import nameDesk from '@/img/hero/nameDesk.png';
import nameMob from '@/img/hero/nameMob.png';

const HeroInfo = () => {
  const { t } = useTranslation();
  return (
    <div
      className="border border-[2px] border-red w-full mb-[16px] lg:pr-[16px]
    xl:mb-[0px] xl:flex xl:flex-col item-center justify-center"
    >
      <h1 className="hidden">TALIA 2.KO</h1>
      <picture>
        <source media="(max-width: 768px)" srcSet={nameMob} />
        <img
          className="block mx-auto mb-[8px] md:mb-[16px]  max-w-[200px] h-auto lg:max-w-[400px]"
          src={nameDesk}
          alt="TALIA 2.KO Main hero image"
          loading="eager"
          decoding="async"
          width={400}
          height={80}
        />
      </picture>

      <p className="text-center text-text-theme font-semibold text-xs mb-[8px] md:text-base md:mb-[16px]">
        {t('hero.description')}
      </p>
      <button type="button" className="btnHero py-[16px] mx-auto md:min-w-[400px] md:py-[24px]">
        {t('btn.heroInfoBtn')}
      </button>
    </div>
  );
};
export default HeroInfo;
