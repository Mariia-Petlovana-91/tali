// hooks/useHeroIntro.ts
import { useLayoutEffect } from 'react';
import gsap from 'gsap';

import type { UseHeroIntroParams } from '@/types/hero';
import { animateIntro } from '@/utils/workAnime/animeHeroImg';

export const useHeroIntro = ({ rootRef, stageRef }: UseHeroIntroParams) => {
  useLayoutEffect(() => {
    if (!rootRef.current || !stageRef.current) return;

    const root = rootRef.current;
    const stage = stageRef.current;

    const ctx = gsap.context(() => {
      animateIntro(root, stage);
    }, root);

    return () => ctx.revert();
  }, [rootRef, stageRef]);
};
