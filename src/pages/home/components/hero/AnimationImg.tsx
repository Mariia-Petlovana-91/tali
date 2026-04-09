import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPieceAtPoint } from '@/utils/workAnime/helpers';
import { STAGE_WIDTH, STAGE_HEIGHT, ALPHA_THRESHOLD, PIECES } from '@/constants/uiConst';
import { openPopup } from '@/redux/popup/slice';
import { selectActiveModal } from '@/redux/popup/selectors';

import { useHeroIntro } from '@/hooks/useHeroIntro';
import { useHeroParallax } from '@/hooks/useHeroParallax';
import { usePieceCanvasMap } from '@/hooks/usePieceCanvasMap';

const AnimationImg = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const dispatch = useDispatch();
  const activeModal = useSelector(selectActiveModal);

  const { assetsReady, pieceCanvasesRef } = usePieceCanvasMap();

  useHeroIntro({ rootRef, stageRef });
  useHeroParallax({
    rootRef,
    stageRef,
    disabled: Boolean(activeModal),
  });

  const handleStageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!assetsReady || activeModal || !stageRef.current) return;

    const piece = getPieceAtPoint(
      PIECES,
      pieceCanvasesRef.current,
      stageRef.current,
      e.clientX,
      e.clientY,
      STAGE_WIDTH,
      STAGE_HEIGHT,
      ALPHA_THRESHOLD,
    );

    if (!piece) return;

    dispatch(
      openPopup({
        type: 'HERO_IMAGE',
        props: { piece },
      }),
    );
  };

  return (
    <div ref={rootRef} className="inset-0 p-2 md:p-4 lg:p-6">
      <div
        ref={stageRef}
        onClick={handleStageClick}
        className={`relative w-full max-w-[700px] aspect-[700/840] justify-self-end overflow-visible transition-opacity duration-500 ${
          assetsReady ? 'opacity-100' : 'opacity-0'
        } ${activeModal ? 'pointer-events-none' : 'cursor-pointer'}`}
      >
        <div data-glow className="absolute inset-0 pointer-events-none rounded-[32px]" />

        {PIECES.map((piece) => (
          <img
            key={piece.id}
            data-piece
            src={piece.preview}
            alt=""
            draggable={false}
            width={700}
            height={840}
            className="absolute inset-0 h-full w-full object-contain select-none pointer-events-none"
          />
        ))}
      </div>
    </div>
  );
};

export default AnimationImg;
