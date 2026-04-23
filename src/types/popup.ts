import type { Piece } from './hero';
export type HeroImgModalProps = {
  piece: Piece;
  onNavigate?: () => void;
};

export type PopupItem =
  | {
      type: 'HERO_IMAGE';
      props: HeroImgModalProps;
    }
  | { type: 'MOBILE_MENU' };

export type PopupState = {
  modalStack: PopupItem[];
};
