import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import type { HeroImgModalProps } from '@/types/popup';
import superDecor from '@/img/dekor/ippipi.png';

const HeroImgModal = ({ piece, onNavigate }: HeroImgModalProps) => {
  const { t } = useTranslation();
  return (
    <div
      style={{ '--decor-bg': `url(${superDecor})` } as React.CSSProperties}
      className="relative w-[calc(100vw-32px)] max-w-[360px] md:max-w-[600px] p-[24px] md:p-[32px] rounded-lg bg-bg  before:content-[''] before:absolute before:inset-0
  before:bg-[image:var(--decor-bg)]
  before:bg-no-repeat before:bg-center before:bg-cover
  before:opacity-20 before:pointer-events-none overflow-auto  text-center"
    >
      {piece && (
        <>
          <img
            src={piece.full}
            alt={piece.alt}
            draggable={false}
            className="block w-[100px] h-[100px]  rounded-xl object-cover mx-auto mb-[24px] md:w-[220px] md:h-[220px] lg:w-[300px] lg:h-[300px]"
          />
          <p className="text-text-theme text-sm mb-[24px] max-h-[180px] overflow-auto no-scrollbar md:text-lg">
            {t(piece?.text ?? '')}
          </p>
          <NavLink to={piece?.link ?? ''} onClick={onNavigate} className="btn text-center">
            {t('btn.heroImgModal')}
          </NavLink>
        </>
      )}
    </div>
  );
};

export default HeroImgModal;
