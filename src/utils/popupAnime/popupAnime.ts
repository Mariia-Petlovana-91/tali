import gsap from 'gsap';
import type { RefObject, Dispatch, SetStateAction } from 'react';

type AnimateRefs = {
  overlayRef: RefObject<HTMLDivElement | null>;
  contentRef: RefObject<HTMLDivElement | null>;
};

type AnimateCloseParams = AnimateRefs & {
  setIsClosing: Dispatch<SetStateAction<boolean>>;
  onComplete: () => void;
};

export const animateOpen = ({ overlayRef, contentRef }: AnimateRefs) => {
  if (!overlayRef.current || !contentRef.current) return;

  gsap.killTweensOf([overlayRef.current, contentRef.current]);

  const tl = gsap.timeline();

  tl.set(overlayRef.current, { opacity: 0 });
  tl.set(contentRef.current, { opacity: 0, scale: 0.96, y: 20 });

  tl.to(overlayRef.current, {
    opacity: 1,
    duration: 0.35,
    ease: 'power2.out',
  });

  tl.to(
    contentRef.current,
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.45,
      ease: 'power3.out',
    },
    '-=0.2',
  );

  return tl;
};

export const animateClose = ({ overlayRef, contentRef, setIsClosing, onComplete }: AnimateCloseParams) => {
  if (!overlayRef.current || !contentRef.current) return;

  setIsClosing(true);

  gsap.killTweensOf([overlayRef.current, contentRef.current]);

  const tl = gsap.timeline({
    onComplete: () => {
      setIsClosing(false);
      onComplete();
    },
  });

  tl.to(contentRef.current, {
    opacity: 0,
    scale: 0.96,
    y: 20,
    duration: 0.25,
    ease: 'power2.in',
  });

  tl.to(
    overlayRef.current,
    {
      opacity: 0,
      duration: 0.25,
      ease: 'power2.in',
    },
    0,
  );

  return tl;
};
