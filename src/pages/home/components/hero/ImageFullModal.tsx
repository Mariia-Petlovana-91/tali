import type { Piece } from '@/types/hero';

const ImageFullModel = (piece: Piece) => {
  return (
    <>
      <img
        src={piece.full}
        alt={piece.alt}
        draggable={false}
        className="block w-full h-[80vh]  rounded-xl object-contain"
      />
    </>
  );
};

export default ImageFullModel;
