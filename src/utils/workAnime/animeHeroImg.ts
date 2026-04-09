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
    y: 8,
    scale: 0.988,
    rotation: (i) => (i % 2 === 0 ? 0.8 : -0.8),
    transformOrigin: 'center center',
    force3D: true,

    backfaceVisibility: 'hidden',
    willChange: 'transform',
  });

  if (glow) {
    gsap.set(glow, {
      scale: 0.992,
      y: 4,
      transformOrigin: 'center center',
      force3D: true,

      backfaceVisibility: 'hidden',
      willChange: 'transform',
    });
  }

  const intro = gsap.timeline({
    defaults: {
      ease: 'expo.out',
    },
  });

  if (glow) {
    intro.to(
      glow,
      {
        y: 0,
        scale: 1,
        duration: 0.9,
      },
      0,
    );
  }

  intro.to(
    allPieces,
    {
      y: 0,
      scale: 1,
      rotation: 0,
      duration: 0.95,
      stagger: {
        each: 0.025,
        from: 'start',
      },
      clearProps: 'willChange',
    },
    0.02,
  );

  if (glow) {
    intro.set(glow, { clearProps: 'willChange' }, '>-0.1');
  }

  return intro;
};

/**
 * Hover/parallax-анімація.
 *
 * Це окрема анімація, яка реагує на рух миші.
 * Працює тільки коли модалка закрита.
 */
let hasEnteredStage = false;

const animateParallax = (
  stage: HTMLDivElement,
  glow: HTMLElement | null,
  allPieces: HTMLImageElement[],
  pieces: Piece[],
  clientX: number,
  clientY: number,
) => {
  const { px, py } = getPointerProgress(stage, clientX, clientY);

  gsap.to(stage, {
    rotateX: (0.5 - py) * 2,
    rotateY: (px - 0.5) * 2.4,
    x: (px - 0.5) * 3,
    y: (py - 0.5) * 2,
    duration: hasEnteredStage ? 0.3 : 0.45,
    ease: 'power2.out',
    overwrite: true,
    transformPerspective: 1000,
    transformOrigin: 'center center',
  });

  let activeIndex = -1;
  let minDistance = Infinity;

  allPieces.forEach((pieceEl, i) => {
    const rect = pieceEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = clientX - cx;
    const dy = clientY - cy;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < minDistance) {
      minDistance = distance;
      activeIndex = i;
    }
  });

  allPieces.forEach((pieceEl, i) => {
    const depth = pieces[i]?.depth ?? 0.5;
    const isActive = i === activeIndex;

    let extraX = 0;
    let extraY = 0;

    if (isActive) {
      const rect = pieceEl.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      extraX = (clientX - cx) * 0.015;
      extraY = (clientY - cy) * 0.015;
    }

    gsap.to(pieceEl, {
      x: (px - 0.5) * 6 * depth + extraX,
      y: (py - 0.5) * 4 * depth + extraY,
      rotate: (px - 0.5) * 0.6 * depth,
      scale: 1,
      duration: hasEnteredStage ? 0.28 : 0.4,
      ease: 'power2.out',
      overwrite: true,
      transformOrigin: 'center center',
    });
  });

  if (glow) {
    gsap.to(glow, {
      x: (px - 0.5) * 5,
      y: (py - 0.5) * 4,
      duration: hasEnteredStage ? 0.3 : 0.45,
      ease: 'power2.out',
      overwrite: true,
    });
  }

  hasEnteredStage = true;
};

const resetParallax = (stage: HTMLDivElement, glow: HTMLElement | null, allPieces: HTMLImageElement[]) => {
  hasEnteredStage = false;

  gsap.to(stage, {
    rotateX: 0,
    rotateY: 0,
    x: 0,
    y: 0,
    duration: 0.55,
    ease: 'power2.out',
    overwrite: true,
  });

  allPieces.forEach((pieceEl) => {
    gsap.to(pieceEl, {
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      duration: 0.45,
      ease: 'power2.out',
      overwrite: true,
    });
  });

  if (glow) {
    gsap.to(glow, {
      x: 0,
      y: 0,
      duration: 0.45,
      ease: 'power2.out',
      overwrite: true,
    });
  }
};

export { animateIntro, animateParallax, resetParallax };
