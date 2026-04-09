import type { Piece } from './hero';
export type HeroImgModalProps = {
  piece: Piece;
};

export type PopupItem = {
  type: 'HERO_IMAGE';
  props: HeroImgModalProps;
};

export type PopupState = {
  modalStack: PopupItem[];
};
