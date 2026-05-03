import { useTranslation } from 'react-i18next';
import { useState, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import type { NavigationProps } from '@/types/nav';

import { useClickOutside } from '@/hooks/useClickOutside';
import { useEscapeHook } from '@/hooks/useEscapeHook';

const Navigation = ({ onNavigate }: NavigationProps) => {
  const { t } = useTranslation();
  const ref = useRef<HTMLLIElement>(null);
  const [isOpen, setOpen] = useState(false);

  const location = useLocation();

  const isServicesActive = location.pathname.startsWith('/services');

  useClickOutside(ref, () => setOpen(false), isOpen);
  useEscapeHook(() => setOpen(false), isOpen);

  return (
    <nav>
      <ul className="text-center flex flex-col space-y-[16px] md:flex-row md:space-y-0 md:space-x-[24px]">
        <li>
          <NavLink
            end
            to="/"
            onClick={onNavigate}
            className={({ isActive }: { isActive: boolean }) =>
              ` baseStyle ${isActive ? 'activeStyle' : 'inactiveStyle'}`
            }
          >
            {t('nav.home')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={onNavigate}
            className={({ isActive }: { isActive: boolean }) =>
              ` baseStyle ${isActive ? 'activeStyle' : 'inactiveStyle'}`
            }
          >
            {t('nav.about')}
          </NavLink>
        </li>
        <li ref={ref} className="relative">
          <button
            type="button"
            className={`baseStyle ${isServicesActive ? 'activeStyle' : 'inactiveStyle'}`}
            onClick={() => setOpen((prev) => !prev)}
          >
            {t('nav.services')}
          </button>

          <ul
            className={`
    absolute left-1/2 top-full z-50
    min-w-[220px]  p-[24px] space-y-[8px] -translate-x-1/2
    overflow-hidden rounded-lg  bg-black/40 backdrop-blur-md
    transition-all duration-300 ease-in-out
    ${
      isOpen
        ? 'max-h-96 opacity-100 translate-y-3 pointer-events-auto'
        : 'max-h-0 opacity-0 translate-y-0 pointer-events-none'
    }
  `}
          >
            <li>
              {' '}
              <NavLink
                to="/services/events"
                onClick={onNavigate}
                className={({ isActive }: { isActive: boolean }) =>
                  `baseStyle text-xs md:text-sm ${isActive ? 'activeStyle' : 'inactiveStyle'}`
                }
              >
                {t('nav.events')}
              </NavLink>
            </li>
            <li>
              {' '}
              <NavLink
                to="/services/scenery"
                onClick={onNavigate}
                className={({ isActive }: { isActive: boolean }) =>
                  ` baseStyle text-xs md:text-sm ${isActive ? 'activeStyle' : 'inactiveStyle'}`
                }
              >
                {t('nav.scenery')}
              </NavLink>
            </li>
            <li>
              {' '}
              <NavLink
                to="/services/plaster-relief"
                onClick={onNavigate}
                className={({ isActive }: { isActive: boolean }) =>
                  ` baseStyle text-xs md:text-sm ${isActive ? 'activeStyle' : 'inactiveStyle'}`
                }
              >
                {t('nav.plaster-relief')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services/special"
                onClick={onNavigate}
                className={({ isActive }: { isActive: boolean }) =>
                  ` baseStyle text-xs md:text-sm ${isActive ? 'activeStyle' : 'inactiveStyle'}`
                }
              >
                {t('nav.special')}
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
