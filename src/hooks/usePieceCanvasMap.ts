// hooks/usePieceCanvasMap.ts
import { useEffect, useRef, useState } from 'react';
import { preparePieceCanvasMap } from '@/utils/workAnime/helpers';
import { PIECES, STAGE_HEIGHT, STAGE_WIDTH } from '@/constants/uiConst';

export const usePieceCanvasMap = () => {
  const pieceCanvasesRef = useRef<Map<number, HTMLCanvasElement>>(new Map());
  const [assetsReady, setAssetsReady] = useState(false);

  useEffect(() => {
    const cleanup = preparePieceCanvasMap(PIECES, STAGE_WIDTH, STAGE_HEIGHT, (map) => {
      pieceCanvasesRef.current = map;
      setAssetsReady(true);
    });

    return cleanup;
  }, []);

  return {
    assetsReady,
    pieceCanvasesRef,
  };
};
