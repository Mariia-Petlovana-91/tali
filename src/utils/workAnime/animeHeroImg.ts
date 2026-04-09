import gsap from 'gsap';

import type { Piece } from '@/types/hero';

import { getPointerProgress } from './helpers';

/**
 * Стартова анімація героя.
 *
 * Це саме та анімація, яка має запускатися один раз при mount.
 * Вона НЕ повинна повторно запускатися після закриття модалки.
 */

const animateIntro = (root: HTMLDivElement, stage: HTMLDivElement) => {
  const glow = root.querySelector<HTMLElement>('[data-glow]');
  const allPieces = gsap.utils.toArray<HTMLElement>(root.querySelectorAll('[data-piece]'));

  gsap.set(stage, {
    transformPerspective: 1200,
    transformStyle: 'preserve-3d',
    perspectiveOrigin: '50% 50%',
  });

  gsap.set(allPieces, {
    x: (i) => 64 + i * 10,
    y: (i) => 42 + i * 8,
    rotation: (i) => 4 - i * 0.45,
    scale: 0.94,
    opacity: 0,
    transformOrigin: 'center center',
    willChange: 'transform, opacity',
    force3D: true,
    z: 0.01,
    backfaceVisibility: 'hidden',
  });

  if (glow) {
    gsap.set(glow, {
      x: 18,
      y: 18,
      scale: 0.97,
      opacity: 0,
      transformOrigin: 'center center',
      willChange: 'transform, opacity',
      force3D: true,
      z: 0.01,
      backfaceVisibility: 'hidden',
    });
  }

  const intro = gsap.timeline({
    defaults: { ease: 'power3.out' },
  });

  if (glow) {
    intro.to(
      glow,
      {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 0.72,
        duration: 1.2,
      },
      0,
    );
  }

  intro.to(
    allPieces,
    {
      x: 0,
      y: 0,
      rotation: 0,
      scale: 0.985,
      opacity: 1,
      duration: 0.8,
      stagger: {
        each: 0.06,
        from: 'start',
      },
    },
    0.04,
  );

  intro.to(
    allPieces,
    {
      scale: 1,
      duration: 0.32,
      ease: 'power2.out',
      stagger: {
        each: 0.04,
        from: 'start',
      },
      clearProps: 'willChange',
    },
    0.72,
  );

  if (glow) {
    intro.set(glow, { clearProps: 'willChange' }, '>-0.2');
  }

  return intro;
};

/**
 * Hover/parallax-анімація.
 *
 * Це окрема анімація, яка реагує на рух миші.
 * Працює тільки коли модалка закрита.
 */
const animateParallax = (
  stage: HTMLDivElement,
  glow: HTMLElement | null,
  allPieces: HTMLImageElement[],
  pieces: Piece[],
  clientX: number,
  clientY: number,
) => {
  const { px, py } = getPointerProgress(stage, clientX, clientY);
  const rx = (0.5 - py) * 5;
  const ry = (px - 0.5) * 7;

  gsap.to(stage, {
    rotateX: rx,
    rotateY: ry,
    x: (px - 0.5) * 8,
    y: (py - 0.5) * 4,
    duration: 0.45,
    ease: 'power3.out',
    overwrite: 'auto',
  });

  allPieces.forEach((pieceEl, i) => {
    const depth = pieces[i]?.depth ?? 0.5;

    gsap.to(pieceEl, {
      x: (px - 0.5) * 16 * depth,
      y: (py - 0.5) * 10 * depth,
      rotate: (px - 0.5) * 3 * depth,
      duration: 0.5,
      ease: 'power3.out',
      overwrite: 'auto',
    });
  });

  if (glow) {
    gsap.to(glow, {
      x: (px - 0.5) * 10,
      y: (py - 0.5) * 8,
      opacity: 0.9,
      duration: 0.45,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  }
};

/**
 * Повертає сцену та шматки у спокійний стан,
 * коли курсор вийшов за межі hero.
 */
const resetParallax = (stage: HTMLDivElement, glow: HTMLElement | null, allPieces: HTMLImageElement[]) => {
  gsap.to(stage, {
    rotateX: 0,
    rotateY: 0,
    x: 0,
    y: 0,
    duration: 0.7,
    ease: 'power3.out',
  });

  allPieces.forEach((pieceEl) => {
    gsap.to(pieceEl, {
      x: 0,
      y: 0,
      rotate: 0,
      duration: 0.7,
      ease: 'power3.out',
    });
  });

  if (glow) {
    gsap.to(glow, {
      x: 0,
      y: 0,
      opacity: 0.75,
      duration: 0.7,
      ease: 'power2.out',
    });
  }
};

export { animateIntro, animateParallax, resetParallax };
