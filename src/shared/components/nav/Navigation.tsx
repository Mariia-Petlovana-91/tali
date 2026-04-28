import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import type { MouseEventHandler } from 'react';

type NavigationProps = {
  onNavigate?: MouseEventHandler<HTMLAnchorElement>;
};

const Navigation = ({ onNavigate }: NavigationProps) => {
  const baseStyle =
    'text-sm font-semibold text-center text-text-theme transition-colors duration-300 outlile-none md:text-base ';
  const activStyle = 'text-accent-light-gold';
  const hoverFocusStyle = 'hover:text-accent-dark-gold focus:text-accent-dark-gold';
  const { t } = useTranslation();
  const navClass = ({ isActive }: { isActive: boolean }) => `${baseStyle} ${isActive ? activStyle : hoverFocusStyle}`;

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" onClick={onNavigate} className={navClass}>
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
