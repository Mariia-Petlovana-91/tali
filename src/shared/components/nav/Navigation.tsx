import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import type { MouseEventHandler } from 'react';

type NavigationProps = {
  onNavigate?: MouseEventHandler<HTMLAnchorElement>;
};

const Navigation = ({ onNavigate }: NavigationProps) => {
  const { t } = useTranslation();

  const baseStyle =
    'text-sm font-semibold text-center transition-colors duration-300 outline-none md:text-base lg:text-lg';
  const activeStyle = 'text-accent-light-gold';
  const inactiveStyle = 'text-text-theme hover:text-accent-dark-gold focus:text-accent-dark-gold';

  const navClass = ({ isActive }: { isActive: boolean }) => `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`;

  return (
    <nav>
      <ul className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-6">
        <li>
          <NavLink end to="/" onClick={onNavigate} className={navClass}>
            {t('nav.home')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={onNavigate} className={navClass}>
            {t('nav.about')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={onNavigate} className={navClass}>
            {t('nav.services')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
