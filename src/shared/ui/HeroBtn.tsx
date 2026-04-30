import { useTranslation } from 'react-i18next';

const HeroBtn = () => {
  const { t } = useTranslation();
  return (
    <a aria-label="Go to the phone and call Talia 2.KO" href="tel:+48730685755" className="btnHero text-center">
      {t('btn.heroInfoBtn')}
    </a>
  );
};

export default HeroBtn;
