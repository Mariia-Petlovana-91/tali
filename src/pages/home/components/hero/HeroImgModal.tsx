import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import type { HeroImgModalProps } from '@/types/popup';

const HeroImgModal = ({ piece, onNavigate }: HeroImgModalProps) => {
  const { t } = useTranslation();
  return (
    <div
      className="relative w-full md:max-w-[800px] p-4 md:p-8 rounded-lg bg-bg overflow-auto no-scrollbar flex flex-col text-center justify-around "
      onClick={(e) => e.stopPropagation()}
    >
      {piece && (
        <>
          <img
            src={piece.full}
            alt={piece.alt}
            draggable={false}
            className="block w-[50%] h-auto md:h-[500px] block rounded-xl object-cover mx-auto mb-4"
          />
          <p className="text-text-theme text-xs mb-4 md:text-sm  overflow-auto no-scrollbar">{t(piece?.text ?? '')}</p>
          <NavLink to={piece?.link ?? ''} onClick={onNavigate} className="btn text-center">
            {t('btn.heroImgModal')}
          </NavLink>
        </>
      )}
    </div>
  );
};

export default HeroImgModal;
