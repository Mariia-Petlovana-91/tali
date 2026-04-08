export type Piece = {
  id: number;
  preview: string;
  full: string;
  depth: number;
  alt: string;
  text?: string;
};

export type ModelImgHeroProps = {
  price: Piece | null;
  setActivePiece: (piece: Piece | null) => void;
};
