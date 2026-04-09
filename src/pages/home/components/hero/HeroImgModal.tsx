import type { HeroImgModalProps } from '@/types/popup';
const HeroImgModal = ({ piece }: HeroImgModalProps) => {
  return (
    <div
      className={`border border-[#ffffff] relative  md:max-w-[600px] flex items-center justify-center transition-all duration-300 ${
        piece ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      {piece && (
        <div>
          <p className="text-[#ffffff] ">{piece.text}</p>
          <img
            src={piece.full}
            alt={piece.alt}
            draggable={false}
            className="block  w-[280px] md:max-w[600px] rounded-2xl object-contain shadow-[0_0_60px_rgba(0,0,0,0.35)] animate-in fade-in zoom-in-95 duration-300"
          />
        </div>
      )}
    </div>
  );
};

export default HeroImgModal;
