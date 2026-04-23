import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import type { HeroImgModalProps } from '@/types/popup';

const HeroImgModal = ({ piece, onNavigate }: HeroImgModalProps) => {
  const { t } = useTranslation();
  return (
    <div className="relative max-w-[360px] w-full md:max-w-[600px] p-[24px] md:p-[32px] rounded-lg bg-bg overflow-auto no-scrollbar text-center">
      {piece && (
        <>
          <img
            src={piece.full}
            alt={piece.alt}
            draggable={false}
            className="block w-[220px] h-[240px] rounded-xl object-cover mx-auto mb-[24px] lg:w-[300px] lg:h-[320px]"
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
