import type { HeroImgModalProps } from '@/types/popup';

const HeroImgModal = ({ piece }: HeroImgModalProps) => {
  return (
    <div
      className="relative w-full md:max-w-[800px] max-h-[90vh] p-4 md:p-8 rounded-lg bg-bg overflow-auto no-scrollbar"
      onClick={(e) => e.stopPropagation()}
    >
      {piece && (
        <>
          <img
            src={piece.full}
            alt={piece.alt}
            draggable={false}
            className="block w-[30%] h-[20%] block rounded-xl object-cover mx-auto mb-4"
          />
          <p className="text-text-theme text-xs mb-4 md:text-sm max-h-[100px] md:max-h-[200px] overflow-auto no-scrollbar">
            {piece.text}
          </p>
          <button type="button" className="btn  w-full">
            Закрити
          </button>
        </>
      )}
    </div>
  );
};

export default HeroImgModal;
