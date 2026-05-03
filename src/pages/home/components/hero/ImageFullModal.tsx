import type { Piece } from '@/types/hero';

const ImageFullModel = (piece: Piece) => {
  return (
    <>
      <img
        width={600}
        height={600}
        src={piece.full}
        alt={piece.alt}
        draggable={false}
        className="block w-full h-[80vh]  rounded-xl object-contain"
      />
    </>
  );
};

export default ImageFullModel;
