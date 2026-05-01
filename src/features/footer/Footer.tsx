import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { SocialListLink, ContactsList, Logo, HeroBtn } from '@/shared';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative py-[24px] lg:py-[32px] border-t border-t-accent-dark-gold lg:flex lg:items-start lg:gap-16">
      <div className="flex flex-col md:flex-row md:justify-around lg:w-auto lg:justify-start lg:gap-16">
        <div>
          <div className="flex justify-center lg:justify-start mb-[16px] md:mb-[24px]">
            <Logo />
          </div>
          <ContactsList />
        </div>

        <div className="mb-[16px] lg:mb-0">
          <h3 className="text-[18px] md:text-[28px] text-accent-light-gold text-center lg:text-left font-semibold mb-[16px] md:mb-[24px]">
            {t('footer.socialHeader')}
          </h3>
          <SocialListLink />
        </div>
      </div>

      <div className="lg:flex-1">
        <h3 className="text-[18px] md:text-[28px] text-accent-light-gold text-center lg:text-left font-semibold mb-[16px] md:mb-[24px]">
          {t('footer.btnHeader')}
        </h3>

        <div className="flex flex-col gap-[16px] w-[300px] mx-auto lg:mx-0 lg:w-full xl:flex-row">
          <NavLink to="/special" className="btnSecondary lg:flex-1 text-center">
            {t('nav.special')}
          </NavLink>

          <HeroBtn nameClass="p-[12px] text-sm md:text-base lg:flex-1" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
