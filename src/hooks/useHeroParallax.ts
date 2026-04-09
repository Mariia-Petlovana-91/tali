import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import type { UseHeroParallaxParams } from '@/types/hero';

import { animateParallax, resetParallax } from '@/utils/workAnime/animeHeroImg';
import { PIECES } from '@/constants/uiConst';

export const useHeroParallax = ({ rootRef, stageRef, disabled }: UseHeroParallaxParams) => {
  useLayoutEffect(() => {
    if (!rootRef.current || !stageRef.current) return;

    const root = rootRef.current;
    const stage = stageRef.current;

    const ctx = gsap.context(() => {
      const glow = root.querySelector<HTMLElement>('[data-glow]');
      const allPieces = gsap.utils.toArray<HTMLImageElement>('[data-piece]');

      gsap.set(stage, {
        transformPerspective: 1200,
        transformStyle: 'preserve-3d',
      });

      const onMouseMove = (e: MouseEvent) => {
        if (disabled) return;
        animateParallax(stage, glow, allPieces, PIECES, e.clientX, e.clientY);
      };

      const onMouseLeave = () => {
        resetParallax(stage, glow, allPieces);
      };

      stage.addEventListener('mousemove', onMouseMove);
      stage.addEventListener('mouseleave', onMouseLeave);

      return () => {
        stage.removeEventListener('mousemove', onMouseMove);
        stage.removeEventListener('mouseleave', onMouseLeave);
      };
    }, root);

    return () => ctx.revert();
  }, [rootRef, stageRef, disabled]);
};
