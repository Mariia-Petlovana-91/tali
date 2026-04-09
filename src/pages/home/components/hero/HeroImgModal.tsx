import type { HeroImgModalProps } from '@/types/popup';

const HeroImgModal = ({ piece }: HeroImgModalProps) => {
  return (
    <div
      className="relative w-full md:max-w-[600px] max-h-[70vh] flex flex-col border border-white bg-black"
      onClick={(e) => e.stopPropagation()}
    >
      {piece && (
        <>
          <div className="shrink-0 p-4 max-h-[25vh] overflow-y-hidden">
            <p className="text-white">{piece.text}</p>
          </div>

          <div className="flex-1 min-h-0 flex items-center justify-center p-4 overflow-hidden">
            <img
              src={piece.full}
              alt={piece.alt}
              draggable={false}
              className="block max-w-full max-h-full w-auto h-auto rounded-xl object-contain"
            />
          </div>
          <button type="button" className="shrink-0 rounded-lg border border-white/30 px-3 py-1.5 text-sm text-white">
            Закрити
          </button>
        </>
      )}
    </div>
  );
};

export default HeroImgModal;
