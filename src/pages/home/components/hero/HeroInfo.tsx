import { useTranslation } from 'react-i18next';

import nameDesk from '@/img/hero/nameDesk.png';
import nameMob from '@/img/hero/nameMob.png';

const HeroInfo = () => {
  const { t } = useTranslation();
  return (
    <div className=" w-full mb-4 md:mb-6 xl:w-1/2 xl:pr-6 xl:mb-0 flex flex-col items-center justify-between text-center gap-4  md:gap-8 lg:gap-16">
      <h1 className="hidden">TALIA 2.KO</h1>
      <div className="w-full rounded-tl-[90px] rounded-br-[90px] border border-kakao bg-[radial-gradient(circle_at_top,_#4f4238_0%,_#281914_38%,_#140d0a_84%)]">
        <picture>
          <source media="(max-width: 768px)" srcSet={nameMob} />
          <img
            className="block mx-auto w-[180px] h-auto lg:w-[250px] md:h-auto"
            src={nameDesk}
            alt="TALIA 2.KO Main hero image"
            loading="eager"
            decoding="async"
            width={250}
            height={80}
          />
        </picture>
      </div>

      <p className="text-center text-text-theme font-semibold text-xs  md:text-lg">{t('hero.description')}</p>
      <button type="button" className="btn font-semibold text-lg  w-full py-3 lg:py-6">
        {t('btn.heroInfoBtn')}
      </button>
    </div>
  );
};
export default HeroInfo;
