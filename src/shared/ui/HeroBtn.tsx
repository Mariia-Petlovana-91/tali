import { useTranslation } from 'react-i18next';

import type { BtnHeroProps } from '@/types/hero';

const HeroBtn = ({ nameClass }: BtnHeroProps) => {
  const { t } = useTranslation();
  return (
    <a aria-label="Go to the phone and call Talia 2.KO" href="tel:+48730685755" className={`${nameClass} btnHero `}>
      {t('btn.heroInfoBtn')}
    </a>
  );
};

export default HeroBtn;
