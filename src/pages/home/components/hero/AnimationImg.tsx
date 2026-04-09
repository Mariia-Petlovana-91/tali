import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import gsap from 'gsap';

import { preparePieceCanvasMap, getPieceAtPoint } from '@/utils/workAnime/helpers';
import { animateIntro, animateParallax, resetParallax } from '@/utils/workAnime/animeHeroImg';
import { STAGE_WIDTH, STAGE_HEIGHT, ALPHA_THRESHOLD, PIECES } from '@/constants/uiConst';

import { openPopup } from '@/redux/popup/slice';
import { selectActiveModal } from '@/redux/popup/selectors';

const AnimationImg = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const pieceCanvasesRef = useRef<Map<number, HTMLCanvasElement>>(new Map());
  const dispatch = useDispatch();
  const activeModal = useSelector(selectActiveModal);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [assetsReady, setAssetsReady] = useState(false);

  useEffect(() => {
    const cleanup = preparePieceCanvasMap(PIECES, STAGE_WIDTH, STAGE_HEIGHT, (map) => {
      pieceCanvasesRef.current = map;
      setAssetsReady(true);
    });

    return cleanup;
  }, []);

  useLayoutEffect(() => {
    if (!rootRef.current || !stageRef.current) return;

    const root = rootRef.current;
    const stage = stageRef.current;

    const ctx = gsap.context(() => {
      animateIntro(root, stage);
    }, rootRef);

    return () => ctx.revert();
  }, []);

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
        if (activeModal) return;

        animateParallax(stage, glow, allPieces, PIECES, e.clientX, e.clientY);
      };

      const onMouseLeave = () => {
        setHoveredId(null);
        resetParallax(stage, glow, allPieces);
      };

      stage.addEventListener('mousemove', onMouseMove);
      stage.addEventListener('mouseleave', onMouseLeave);

      return () => {
        stage.removeEventListener('mousemove', onMouseMove);
        stage.removeEventListener('mouseleave', onMouseLeave);
      };
    }, rootRef);

    return () => ctx.revert();
  }, [activeModal]);
  const hoveredIdRef = useRef<number | null>(null);
  const handleStageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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

    const nextId = piece?.id ?? null;

    if (hoveredIdRef.current !== nextId) {
      hoveredIdRef.current = nextId;
      setHoveredId(nextId);
    }
  };

  const handleStageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!assetsReady || activeModal) return;

    if (!stageRef.current) return;

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
    console.log('clicked');
    dispatch(
      openPopup({
        type: 'HERO_IMAGE',
        props: { piece },
      }),
    );
    console.log('dispatched');
  };

  return (
    <>
      <div ref={rootRef} className="inset-0 p-2 md:p-4 lg:p-6">
        <div
          ref={stageRef}
          data-stage
          onClick={handleStageClick}
          onMouseMove={handleStageMouseMove}
          className={`relative w-full max-w-[700px] aspect-[700/840] justify-self-end overflow-visible transition-opacity duration-500 ${
            assetsReady ? 'opacity-100' : 'opacity-0'
          } ${activeModal ? 'pointer-events-none' : 'cursor-pointer'}`}
        >
          <div
            data-glow
            className="absolute inset-0 pointer-events-none rounded-[32px] shadow-[0_0_80px_rgba(255,210,110,0.08),0_0_180px_rgba(255,190,80,0.06),inset_0_0_60px_rgba(255,220,140,0.04)]"
          />

          {PIECES.map((piece) => (
            <img
              key={piece.id}
              data-piece
              src={piece.preview}
              alt="any piece"
              loading="eager"
              decoding="async"
              draggable={false}
              width={700}
              height={840}
              className={`absolute inset-0 h-full w-full object-contain select-none pointer-events-none transition-opacity duration-200 ${
                hoveredId && hoveredId !== piece.id ? 'opacity-75' : 'opacity-100'
              } [filter:drop-shadow(0_0_14px_rgba(255,220,140,0.04))_drop-shadow(0_0_36px_rgba(255,200,90,0.05))]`}
            />
          ))}
        </div>
      </div>

      {!assetsReady && <div className="pointer-events-none absolute opacity-0" aria-hidden="true" />}
    </>
  );
};

export default AnimationImg;
