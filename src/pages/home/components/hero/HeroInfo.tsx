import { useTranslation } from 'react-i18next';

import nameDesk from '@/img/hero/nameDesk.png';
import nameMob from '@/img/hero/nameMob.png';

const HeroInfo = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full xl:w-1/2 px-4 flex flex-col items-center justify-center text-center gap-4 mb-4 md:gap-8 lg:gap-16 md:mb-0">
      <h1 className="hidden">TALIA 2.KO</h1>
      <picture>
        <source media="(max-width: 768px)" srcSet={nameMob} />
        <img
          className="block mx-auto rounded-tl-3xl rounded-br-3xl w-[200px] md:w-[300px] border border-kakao bg-[radial-gradient(circle_at_top,_#4f4238_0%,_#281914_38%,_#140d0a_84%)]"
          src={nameDesk}
          alt="TALIA 2.KO Main hero image"
          loading="eager"
          decoding="async"
        />
      </picture>
      <p className="text-center text-text-theme font-semibold text-xs  md:text-lg">{t('hero.description')}</p>
      <button type="button" className="btn font-semibold text-lg  w-[200px] md:w-[300px] py-3 lg:py-6">
        {t('btn.heroInfoBtn')}
      </button>
    </div>
  );
};
export default HeroInfo;
