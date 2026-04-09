import { useEffect } from 'react';

export const useScrollLooc = (active: boolean) => {
  useEffect(() => {
    if (!active) return;

    document.body.classList.add('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [active]);
};
