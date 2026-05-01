import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import type { NavigationProps } from '@/types/nav';

const Navigation = ({ onNavigate }: NavigationProps) => {
  const { t } = useTranslation();

  return (
    <nav>
      <ul className="text-center flex flex-col space-y-[16px] md:flex-row md:space-y-0 md:space-x-[24px]">
        <li>
          <NavLink
            end
            to="/"
            onClick={onNavigate}
            className={({ isActive }: { isActive: boolean }) => ` baseStyle ${isActive} ? activeStyle : inactiveStyle`}
          >
            {t('nav.home')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={onNavigate}
            className={({ isActive }: { isActive: boolean }) => ` baseStyle ${isActive} ? activeStyle : inactiveStyle`}
          >
            {t('nav.about')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            onClick={onNavigate}
            className={({ isActive }: { isActive: boolean }) => ` baseStyle ${isActive} ? activeStyle : inactiveStyle`}
          >
            {t('nav.services')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/special"
            onClick={onNavigate}
            className={({ isActive }: { isActive: boolean }) => ` baseStyle ${isActive} ? activeStyle : inactiveStyle`}
          >
            {t('nav.special')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
