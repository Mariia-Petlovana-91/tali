import { type RefObject } from 'react';

export type Piece = {
  id: number;
  preview: string;
  full: string;
  depth: number;
  alt: string;
  text?: string;
  link: string;
};

export type UseHeroParallaxParams = {
  rootRef: RefObject<HTMLDivElement | null>;
  stageRef: RefObject<HTMLDivElement | null>;
  disabled: boolean;
};

export type UseHeroIntroParams = {
  rootRef: RefObject<HTMLDivElement | null>;
  stageRef: RefObject<HTMLDivElement | null>;
};
