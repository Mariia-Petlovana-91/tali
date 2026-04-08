// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import gsap from "gsap";

// import piece1 from "@/img/Android1.webp";
// import piece2 from "@/img/Android2.webp";
// import piece3 from "@/img/Android3.webp";
// import piece4 from "@/img/Android4.webp";
// import piece5 from "@/img/Android5.webp";
// import piece6 from "@/img/Android6.webp";
// import piece7 from "@/img/Android7.webp";
// import piece8 from "@/img/Android8.webp";
// import piece9 from "@/img/Android9.webp";

// type Piece = {
//   id: number;
//   preview: string;
//   full: string;
//   depth: number;
// };

// const STAGE_WIDTH = 700;
// const STAGE_HEIGHT = 840;
// const ALPHA_THRESHOLD = 10;

// const PIECES: Piece[] = [
//   { id: 1, preview: piece1, full: "/imgFullAnime/full1.webp", depth: 0.35 },
//   { id: 2, preview: piece2, full: "/imgFullAnime/full2.webp", depth: 0.55 },
//   { id: 3, preview: piece3, full: "/imgFullAnime/full3.webp", depth: 0.75 },
//   { id: 4, preview: piece4, full: "/imgFullAnime/full4.webp", depth: 0.45 },
//   { id: 5, preview: piece5, full: "/imgFullAnime/full5.webp", depth: 0.95 },
//   { id: 6, preview: piece6, full: "/imgFullAnime/full6.webp", depth: 0.6 },
//   { id: 7, preview: piece7, full: "/imgFullAnime/full7.webp", depth: 0.4 },
//   { id: 8, preview: piece8, full: "/imgFullAnime/full8.webp", depth: 0.7 },
//   { id: 9, preview: piece9, full: "/imgFullAnime/full9.webp", depth: 0.5 },
// ];

// const createImage = (src: string) =>
//   new Promise<HTMLImageElement>((resolve, reject) => {
//     const img = new Image();
//     img.src = src;

//     const finish = async () => {
//       if (typeof img.decode === "function") {
//         await img.decode();
//       }
//       resolve(img);
//     };

//     if (img.complete) {
//       finish().catch(reject);
//       return;
//     }

//     img.onload = () => {
//       finish().catch(reject);
//     };

//     img.onerror = () => {
//       reject(new Error(`Failed to load: ${src}`));
//     };
//   });

// const preloadFullImage = async (src: string) => {
//   await createImage(src);
//   return src;
// };

// const buildPieceCanvasMap = async (pieces: Piece[]) => {
//   const entries = await Promise.all(
//     pieces.map(async (piece) => {
//       const img = await createImage(piece.preview);
//       const canvas = document.createElement("canvas");
//       canvas.width = STAGE_WIDTH;
//       canvas.height = STAGE_HEIGHT;

//       const ctx = canvas.getContext("2d");
//       if (!ctx) {
//         return { id: piece.id, canvas: null };
//       }

//       ctx.clearRect(0, 0, STAGE_WIDTH, STAGE_HEIGHT);
//       ctx.drawImage(img, 0, 0, STAGE_WIDTH, STAGE_HEIGHT);

//       return { id: piece.id, canvas };
//     })
//   );

//   const map = new Map<number, HTMLCanvasElement>();

//   entries.forEach((entry) => {
//     if (entry.canvas) {
//       map.set(entry.id, entry.canvas);
//     }
//   });

//   return map;
// };

// const getStagePoint = (
//   stage: HTMLDivElement,
//   clientX: number,
//   clientY: number
// ) => {
//   const rect = stage.getBoundingClientRect();

//   const x = ((clientX - rect.left) / rect.width) * STAGE_WIDTH;
//   const y = ((clientY - rect.top) / rect.height) * STAGE_HEIGHT;

//   return { x, y, rect };
// };

// const getPieceAtPoint = (
//   pieces: Piece[],
//   pieceCanvasMap: Map<number, HTMLCanvasElement>,
//   stage: HTMLDivElement,
//   clientX: number,
//   clientY: number
// ) => {
//   const { x, y } = getStagePoint(stage, clientX, clientY);

//   if (x < 0 || y < 0 || x > STAGE_WIDTH || y > STAGE_HEIGHT) {
//     return null;
//   }

//   for (let i = pieces.length - 1; i >= 0; i -= 1) {
//     const piece = pieces[i];
//     const canvas = pieceCanvasMap.get(piece.id);
//     if (!canvas) continue;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) continue;

//     const pixel = ctx.getImageData(Math.floor(x), Math.floor(y), 1, 1).data;
//     const alpha = pixel[3];

//     if (alpha > ALPHA_THRESHOLD) {
//       return piece;
//     }
//   }

//   return null;
// };

// const getPointerProgress = (
//   stage: HTMLDivElement,
//   clientX: number,
//   clientY: number
// ) => {
//   const rect = stage.getBoundingClientRect();

//   const px = (clientX - rect.left) / rect.width;
//   const py = (clientY - rect.top) / rect.height;

//   return { px, py };
// };

// const animateIntro = (
//   root: HTMLDivElement,
//   stage: HTMLDivElement,
// ) => {
//   const glow = root.querySelector<HTMLElement>("[data-glow]");
//   const allPieces = gsap.utils.toArray<HTMLImageElement>("[data-piece]");

//   gsap.set(stage, {
//     transformPerspective: 1200,
//     transformStyle: "preserve-3d",
//   });

//   gsap.set(allPieces, {
//     y: (i) => 20 + (i % 3) * 4,
//     x: (i) => (i % 2 === 0 ? 10 : -10),
//     rotation: (i) => (i % 2 === 0 ? -1.5 : 1.5),
//     scale: 0.985,
//     opacity: 0,
//     transformOrigin: "center center",
//     willChange: "transform, opacity",
//   });

//   if (glow) {
//     gsap.set(glow, {
//       opacity: 0,
//       scale: 0.96,
//     });
//   }

//   const intro = gsap.timeline({
//     defaults: { ease: "power3.out" },
//   });

//   if (glow) {
//     intro.to(
//       glow,
//       {
//         opacity: 0.75,
//         scale: 1,
//         duration: 1.1,
//         ease: "power2.out",
//       },
//       0
//     );
//   }

//   intro.to(
//     allPieces,
//     {
//       y: 0,
//       x: 0,
//       rotation: 0,
//       scale: 1,
//       opacity: 1,
//       duration: 1.15,
//       stagger: {
//         each: 0.04,
//         from: "center",
//       },
//       clearProps: "willChange",
//     },
//     0.06
//   );

//   return { glow, allPieces };
// };

// const animateParallax = (
//   stage: HTMLDivElement,
//   glow: HTMLElement | null,
//   allPieces: HTMLImageElement[],
//   pieces: Piece[],
//   clientX: number,
//   clientY: number
// ) => {
//   const { px, py } = getPointerProgress(stage, clientX, clientY);

//   const rx = (0.5 - py) * 5;
//   const ry = (px - 0.5) * 7;

//   gsap.to(stage, {
//     rotateX: rx,
//     rotateY: ry,
//     x: (px - 0.5) * 8,
//     y: (py - 0.5) * 4,
//     duration: 0.45,
//     ease: "power3.out",
//     overwrite: "auto",
//   });

//   allPieces.forEach((pieceEl, i) => {
//     const depth = pieces[i]?.depth ?? 0.5;

//     gsap.to(pieceEl, {
//       x: (px - 0.5) * 16 * depth,
//       y: (py - 0.5) * 10 * depth,
//       rotate: (px - 0.5) * 3 * depth,
//       duration: 0.5,
//       ease: "power3.out",
//       overwrite: "auto",
//     });
//   });

//   if (glow) {
//     gsap.to(glow, {
//       x: (px - 0.5) * 10,
//       y: (py - 0.5) * 8,
//       opacity: 0.9,
//       duration: 0.45,
//       ease: "power2.out",
//       overwrite: "auto",
//     });
//   }
// };

// const resetParallax = (
//   stage: HTMLDivElement,
//   glow: HTMLElement | null,
//   allPieces: HTMLImageElement[]
// ) => {
//   gsap.to(stage, {
//     rotateX: 0,
//     rotateY: 0,
//     x: 0,
//     y: 0,
//     duration: 0.7,
//     ease: "power3.out",
//   });

//   allPieces.forEach((pieceEl) => {
//     gsap.to(pieceEl, {
//       x: 0,
//       y: 0,
//       rotate: 0,
//       duration: 0.7,
//       ease: "power3.out",
//     });
//   });

//   if (glow) {
//     gsap.to(glow, {
//       x: 0,
//       y: 0,
//       opacity: 0.75,
//       duration: 0.7,
//       ease: "power2.out",
//     });
//   }
// };

// const AnimationImg = () => {
//   const rootRef = useRef<HTMLDivElement | null>(null);
//   const stageRef = useRef<HTMLDivElement | null>(null);
//   const pieceCanvasesRef = useRef<Map<number, HTMLCanvasElement>>(new Map());

//   const [activePiece, setActivePiece] = useState<Piece | null>(null);
//   const [fullSrc, setFullSrc] = useState<string | null>(null);
//   const [isLoadingFull, setIsLoadingFull] = useState(false);
//   const [hoveredId, setHoveredId] = useState<number | null>(null);
//   const [assetsReady, setAssetsReady] = useState(false);

//   useEffect(() => {
//     let isMounted = true;

//     buildPieceCanvasMap(PIECES).then((map) => {
//       if (!isMounted) return;
//       pieceCanvasesRef.current = map;
//       setAssetsReady(true);
//     });

//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   useLayoutEffect(() => {
//     if (!rootRef.current || !stageRef.current) return;

//     const root = rootRef.current;
//     const stage = stageRef.current;

//     const ctx = gsap.context(() => {
//       animateIntro(root, stage, PIECES);
//     }, rootRef);

//     return () => ctx.revert();
//   }, []);

//   useLayoutEffect(() => {
//     if (!rootRef.current || !stageRef.current) return;

//     const root = rootRef.current;
//     const stage = stageRef.current;

//     const ctx = gsap.context(() => {
//       const glow = root.querySelector<HTMLElement>("[data-glow]");
//       const allPieces = gsap.utils.toArray<HTMLImageElement>("[data-piece]");

//       gsap.set(stage, {
//         transformPerspective: 1200,
//         transformStyle: "preserve-3d",
//       });

//       const onMouseMove = (e: MouseEvent) => {
//         if (activePiece) return;

//         animateParallax(stage, glow, allPieces, PIECES, e.clientX, e.clientY);
//       };

//       const onMouseLeave = () => {
//         setHoveredId(null);
//         resetParallax(stage, glow, allPieces);
//       };

//       stage.addEventListener("mousemove", onMouseMove);
//       stage.addEventListener("mouseleave", onMouseLeave);

//       return () => {
//         stage.removeEventListener("mousemove", onMouseMove);
//         stage.removeEventListener("mouseleave", onMouseLeave);
//       };
//     }, rootRef);

//     return () => ctx.revert();
//   }, [activePiece]);

//   const handleStageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!stageRef.current) return;

//     const piece = getPieceAtPoint(
//       PIECES,
//       pieceCanvasesRef.current,
//       stageRef.current,
//       e.clientX,
//       e.clientY
//     );

//     setHoveredId(piece?.id ?? null);
//   };

//   const handleStageClick = async (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!stageRef.current) return;

//     const piece = getPieceAtPoint(
//       PIECES,
//       pieceCanvasesRef.current,
//       stageRef.current,
//       e.clientX,
//       e.clientY
//     );

//     if (!piece) return;

//     setIsLoadingFull(true);

//     const src = await preloadFullImage(piece.full);

//     setFullSrc(src);
//     setActivePiece(piece);
//     setIsLoadingFull(false);
//   };

//   const closeModal = () => {
//     setActivePiece(null);
//     setFullSrc(null);
//   };

//   return (
//     <>
//       <div ref={rootRef} className="inset-0 p-2 md:p-4 lg:p-6">
//         <div
//           ref={stageRef}
//           data-stage
//           onClick={handleStageClick}
//           onMouseMove={handleStageMouseMove}
//           className="relative w-full max-w-[700px] aspect-[700/840] justify-self-end overflow-visible cursor-pointer"
//         >
//           <div
//             data-glow
//             className="absolute inset-0 pointer-events-none rounded-[32px] shadow-[0_0_80px_rgba(255,210,110,0.08),0_0_180px_rgba(255,190,80,0.06),inset_0_0_60px_rgba(255,220,140,0.04)]"
//           />

//           {PIECES.map((piece) => (
//             <img
//               key={piece.id}
//               data-piece
//               src={piece.preview}
//               alt=""
//               loading="eager"
//               decoding="async"
//               draggable={false}
//               width={700}
//               height={840}
//               className={`absolute inset-0 h-full w-full object-contain select-none pointer-events-none transition-opacity duration-200 ${
//                 hoveredId && hoveredId !== piece.id ? "opacity-75" : "opacity-100"
//               } [filter:drop-shadow(0_0_14px_rgba(255,220,140,0.04))_drop-shadow(0_0_36px_rgba(255,200,90,0.05))]`}
//             />
//           ))}
//         </div>
//       </div>

//       <div
//         className={`fixed inset-0 z-50 flex items-center justify-center bg-black/72 p-4 transition-opacity duration-300 ${
//           activePiece
//             ? "pointer-events-auto opacity-100"
//             : "pointer-events-none opacity-0"
//         }`}
//         onClick={closeModal}
//       >
//         <div
//           className={`relative w-full max-w-5xl transition-all duration-300 ${
//             activePiece ? "scale-100 opacity-100" : "scale-95 opacity-0"
//           }`}
//           onClick={(e) => e.stopPropagation()}
//         >
//           <button
//             type="button"
//             onClick={closeModal}
//             className="absolute right-3 top-3 z-10 rounded-full bg-black/55 px-3 py-2 text-sm text-white"
//           >
//             Close
//           </button>

//           {fullSrc && (
//             <img
//               src={fullSrc}
//               alt=""
//               draggable={false}
//               className="block max-h-[90vh] w-full rounded-2xl object-contain shadow-[0_0_60px_rgba(0,0,0,0.35)]"
//             />
//           )}
//         </div>
//       </div>

//       {isLoadingFull && (
//         <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/20">
//           <div className="rounded-full bg-black/60 px-4 py-2 text-sm text-white">
//             Loading…
//           </div>
//         </div>
//       )}

//       {!assetsReady && (
//         <div className="pointer-events-none absolute opacity-0" aria-hidden="true" />
//       )}
//     </>
//   );
// };

// export default AnimationImg;





import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

import piece1 from "@/img/Android1.webp";
import piece2 from "@/img/Android2.webp";
import piece3 from "@/img/Android3.webp";
import piece4 from "@/img/Android4.webp";
import piece5 from "@/img/Android5.webp";
import piece6 from "@/img/Android6.webp";
import piece7 from "@/img/Android7.webp";
import piece8 from "@/img/Android8.webp";
import piece9 from "@/img/Android9.webp";

/**
 * Тип одного шматка.
 * preview — маленька картинка, яка вже лежить у hero
 * full — повна картинка, яка має підвантажитися тільки коли відкриється модалка
 * depth — коефіцієнт глибини для parallax-анімації
 */
type Piece = {
  id: number;
  preview: string;
  full: string;
  depth: number;
};

/**
 * Базові розміри сцени.
 * Це координатна система, в якій ми перевіряємо кліки по alpha-каналу.
 * Всі шматки зведені до цього розміру.
 */
const STAGE_WIDTH = 700;
const STAGE_HEIGHT = 840;

/**
 * Поріг прозорості.
 * Якщо alpha пікселя більше цього значення — вважаємо, що клік був по шматку.
 */
const ALPHA_THRESHOLD = 10;

/**
 * Усі шматки, які показуються в hero.
 * Тут потім легко винести в окремий файл типу `animation-img.data.ts`
 */
const PIECES: Piece[] = [
  { id: 1, preview: piece1, full: "/imgFullAnime/full1.webp", depth: 0.35 },
  { id: 2, preview: piece2, full: "/imgFullAnime/full2.webp", depth: 0.55 },
  { id: 3, preview: piece3, full: "/imgFullAnime/full3.webp", depth: 0.75 },
  { id: 4, preview: piece4, full: "/imgFullAnime/full4.webp", depth: 0.45 },
  { id: 5, preview: piece5, full: "/imgFullAnime/full5.webp", depth: 0.95 },
  { id: 6, preview: piece6, full: "/imgFullAnime/full6.webp", depth: 0.6 },
  { id: 7, preview: piece7, full: "/imgFullAnime/full7.webp", depth: 0.4 },
  { id: 8, preview: piece8, full: "/imgFullAnime/full8.webp", depth: 0.7 },
  { id: 9, preview: piece9, full: "/imgFullAnime/full9.webp", depth: 0.5 },
];

/**
 * Готує canvas-мапу для кожного шматка.
 *
 * Навіщо це потрібно:
 * ми не можемо точно клікати по PNG/WebP лише по видимій формі шматка,
 * бо DOM-елемент все одно прямокутний.
 *
 * Тому ми:
 * - беремо кожен preview-шматок
 * - малюємо його в прихований canvas
 * - при кліку читаємо alpha пікселя в точці
 * - так визначаємо, по якому саме шматку клікнули
 *
 * Важливо:
 * тут немає preload повних картинок для модалки.
 * тут тільки технічна підготовка preview-зображень для hit-test.
 */
const preparePieceCanvasMap = (
  pieces: Piece[],
  onReady: (map: Map<number, HTMLCanvasElement>) => void
) => {
  const map = new Map<number, HTMLCanvasElement>();
  let loadedCount = 0;
  let cancelled = false;

  const finishIfDone = () => {
    loadedCount += 1;

    if (!cancelled && loadedCount === pieces.length) {
      onReady(map);
    }
  };

  pieces.forEach((piece) => {
    const img = new Image();
    img.src = piece.preview;

    img.onload = () => {
      if (cancelled) return;

      const canvas = document.createElement("canvas");
      canvas.width = STAGE_WIDTH;
      canvas.height = STAGE_HEIGHT;

      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.clearRect(0, 0, STAGE_WIDTH, STAGE_HEIGHT);
        ctx.drawImage(img, 0, 0, STAGE_WIDTH, STAGE_HEIGHT);
        map.set(piece.id, canvas);
      }

      finishIfDone();
    };

    img.onerror = () => {
      /**
       * Якщо якийсь preview не завантажився —
       * просто не додаємо його в map, але не блокуємо решту.
       */
      finishIfDone();
    };
  });

  return () => {
    cancelled = true;
  };
};

/**
 * Перетворює реальні координати курсора на координати нашої сцени 700x840.
 * Це потрібно і для hit-test, і для parallax-руху.
 */
const getStagePoint = (
  stage: HTMLDivElement,
  clientX: number,
  clientY: number
) => {
  const rect = stage.getBoundingClientRect();

  const x = ((clientX - rect.left) / rect.width) * STAGE_WIDTH;
  const y = ((clientY - rect.top) / rect.height) * STAGE_HEIGHT;

  return { x, y };
};

/**
 * Визначає, по якому шматку клікнули або навелися.
 *
 * Логіка:
 * - беремо координати в межах сцени
 * - ідемо по шматках зверху вниз
 * - читаємо alpha піксель у canvas
 * - якщо alpha > ALPHA_THRESHOLD — це потрібний шматок
 */
const getPieceAtPoint = (
  pieces: Piece[],
  pieceCanvasMap: Map<number, HTMLCanvasElement>,
  stage: HTMLDivElement,
  clientX: number,
  clientY: number
) => {
  const { x, y } = getStagePoint(stage, clientX, clientY);

  if (x < 0 || y < 0 || x > STAGE_WIDTH || y > STAGE_HEIGHT) {
    return null;
  }

  for (let i = pieces.length - 1; i >= 0; i -= 1) {
    const piece = pieces[i];
    const canvas = pieceCanvasMap.get(piece.id);

    if (!canvas) continue;

    const ctx = canvas.getContext("2d");
    if (!ctx) continue;

    const pixel = ctx.getImageData(Math.floor(x), Math.floor(y), 1, 1).data;
    const alpha = pixel[3];

    if (alpha > ALPHA_THRESHOLD) {
      return piece;
    }
  }

  return null;
};

/**
 * Обчислює відносне положення курсора в межах сцени.
 *
 * px = позиція по X від 0 до 1
 * py = позиція по Y від 0 до 1
 *
 * Це потрібно для hover/parallax-анімації.
 */
const getPointerProgress = (
  stage: HTMLDivElement,
  clientX: number,
  clientY: number
) => {
  const rect = stage.getBoundingClientRect();

  const px = (clientX - rect.left) / rect.width;
  const py = (clientY - rect.top) / rect.height;

  return { px, py };
};

/**
 * Стартова анімація героя.
 *
 * Це саме та анімація, яка має запускатися один раз при mount.
 * Вона НЕ повинна повторно запускатися після закриття модалки.
 */
const animateIntro = (root: HTMLDivElement, stage: HTMLDivElement) => {
  const glow = root.querySelector<HTMLElement>("[data-glow]");
  const allPieces = gsap.utils.toArray<HTMLElement>(
    root.querySelectorAll("[data-piece]")
  );

  gsap.set(stage, {
    transformPerspective: 1200,
    transformStyle: "preserve-3d",
    perspectiveOrigin: "50% 50%",
  });

  gsap.set(allPieces, {
    x: (i) => [-260, 220, -180, 300, -240, 160, -140, 260][i % 8],
    y: (i) => [-180, -260, 220, 140, -120, 280, 180, -160][i % 8],
    rotation: (i) => [-16, 12, -10, 18, -14, 9, -7, 14][i % 8],
    scale: 0.9,
    opacity: 0.08,
    transformOrigin: "center center",
    willChange: "transform, opacity",
    force3D: true,
    z: 0,
  });

  if (glow) {
    gsap.set(glow, {
      scale: 0.94,
      opacity: 0,
      x: 0,
      y: 0,
      transformOrigin: "center center",
      willChange: "transform, opacity",
      force3D: true,
      z: 0,
    });
  }

  const intro = gsap.timeline({
    defaults: { ease: "power3.out" },
  });

  if (glow) {
    intro.to(
      glow,
      {
        opacity: 0.72,
        scale: 1,
        duration: 1.1,
        clearProps: "willChange",
      },
      0
    );
  }

  intro.to(
    allPieces,
    {
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      opacity: 1,
      duration: 1.15,
      ease: "power3.out",
      stagger: {
        each: 0.07,
        from: "start",
      },
      clearProps: "willChange",
    },
    0.05
  );
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
  clientY: number
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
    ease: "power3.out",
    overwrite: "auto",
  });

  allPieces.forEach((pieceEl, i) => {
    const depth = pieces[i]?.depth ?? 0.5;

    gsap.to(pieceEl, {
      x: (px - 0.5) * 16 * depth,
      y: (py - 0.5) * 10 * depth,
      rotate: (px - 0.5) * 3 * depth,
      duration: 0.5,
      ease: "power3.out",
      overwrite: "auto",
    });
  });

  if (glow) {
    gsap.to(glow, {
      x: (px - 0.5) * 10,
      y: (py - 0.5) * 8,
      opacity: 0.9,
      duration: 0.45,
      ease: "power2.out",
      overwrite: "auto",
    });
  }
};

/**
 * Повертає сцену та шматки у спокійний стан,
 * коли курсор вийшов за межі hero.
 */
const resetParallax = (
  stage: HTMLDivElement,
  glow: HTMLElement | null,
  allPieces: HTMLImageElement[]
) => {
  gsap.to(stage, {
    rotateX: 0,
    rotateY: 0,
    x: 0,
    y: 0,
    duration: 0.7,
    ease: "power3.out",
  });

  allPieces.forEach((pieceEl) => {
    gsap.to(pieceEl, {
      x: 0,
      y: 0,
      rotate: 0,
      duration: 0.7,
      ease: "power3.out",
    });
  });

  if (glow) {
    gsap.to(glow, {
      x: 0,
      y: 0,
      opacity: 0.75,
      duration: 0.7,
      ease: "power2.out",
    });
  }
};

/**
 * =========================
 * Тут починається компонент
 * =========================
 */
const AnimationImg = () => {
  /**
   * rootRef — корінь усього блоку з hero-анімацією
   * stageRef — внутрішня сцена 700x840, в якій лежать шматки
   * pieceCanvasesRef — технічна мапа canvas для hit-test по alpha-каналу
   */
  const rootRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const pieceCanvasesRef = useRef<Map<number, HTMLCanvasElement>>(new Map());

  /**
   * activePiece — який шматок відкритий у модалці
   * hoveredId — який шматок зараз під курсором
   * assetsReady — чи готові canvas-мапи для точного кліку по шматках
   */
  const [activePiece, setActivePiece] = useState<Piece | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [assetsReady, setAssetsReady] = useState(false);

  /**
   * Підготовка canvas-мап для hit-test.
   * Це запускається один раз після mount.
   */
  useEffect(() => {
    const cleanup = preparePieceCanvasMap(PIECES, (map) => {
      pieceCanvasesRef.current = map;
      setAssetsReady(true);
    });

    return cleanup;
  }, []);

  /**
   * 1) Стартова анімація героя.
   * Вона спрацьовує тільки один раз.
   */
  useLayoutEffect(() => {
    if (!rootRef.current || !stageRef.current) return;

    const root = rootRef.current;
    const stage = stageRef.current;

    const ctx = gsap.context(() => {
      animateIntro(root, stage);
    }, rootRef);

    return () => ctx.revert();
  }, []);

  /**
   * 2) Hover/parallax.
   *
   * Цей ефект окремий, щоб intro не перезапускався після закриття модалки.
   * Коли модалка відкрита — hover тут блокується.
   */
  useLayoutEffect(() => {
    if (!rootRef.current || !stageRef.current) return;

    const root = rootRef.current;
    const stage = stageRef.current;

    const ctx = gsap.context(() => {
      const glow = root.querySelector<HTMLElement>("[data-glow]");
      const allPieces = gsap.utils.toArray<HTMLImageElement>("[data-piece]");

      gsap.set(stage, {
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      });

      const onMouseMove = (e: MouseEvent) => {
        /**
         * Якщо модалка відкрита — hero під нею взагалі не реагує.
         */
        if (activePiece) return;

        animateParallax(stage, glow, allPieces, PIECES, e.clientX, e.clientY);
      };

      const onMouseLeave = () => {
        setHoveredId(null);
        resetParallax(stage, glow, allPieces);
      };

      stage.addEventListener("mousemove", onMouseMove);
      stage.addEventListener("mouseleave", onMouseLeave);

      return () => {
        stage.removeEventListener("mousemove", onMouseMove);
        stage.removeEventListener("mouseleave", onMouseLeave);
      };
    }, rootRef);

    return () => ctx.revert();
  }, [activePiece]);

  /**
   * React-обробник наведенння для визначення hoveredId.
   * Потрібен для візуального підсвічування/приглушення шматків.
   */
  const handleStageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    /**
     * Якщо модалка відкрита — під нею нічого не ховеримо.
     */
    if (activePiece) return;

    if (!stageRef.current) return;

    const piece = getPieceAtPoint(
      PIECES,
      pieceCanvasesRef.current,
      stageRef.current,
      e.clientX,
      e.clientY
    );

    setHoveredId(piece?.id ?? null);
  };

  /**
   * Клік по hero.
   * При кліку визначаємо, по якому шматку клікнули.
   * Якщо шматок знайдений — відкриваємо модалку.
   *
   * Важливо:
   * тут немає preload full image, немає async/await.
   * Повна картинка підвантажиться браузером тільки тоді,
   * коли <img src={activePiece.full}> з'явиться в DOM модалки.
   */
  const handleStageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    /**
     * Якщо модалка відкрита — hero під нею вже не клікається.
     */
    if (activePiece) return;

    if (!stageRef.current) return;

    const piece = getPieceAtPoint(
      PIECES,
      pieceCanvasesRef.current,
      stageRef.current,
      e.clientX,
      e.clientY
    );

    if (!piece) return;

    setActivePiece(piece);
  };

  /**
   * Закриття модалки.
   * Закриваємо по кліку на backdrop.
   */
  const closeModal = () => {
    setActivePiece(null);
  };

  return (
    <>
      {/* Основний блок hero-анімації */}
      <div ref={rootRef} className="inset-0 p-2 md:p-4 lg:p-6">
        <div
          ref={stageRef}
          data-stage
          onClick={handleStageClick}
          onMouseMove={handleStageMouseMove}
          className={`relative w-full max-w-[700px] aspect-[700/840] justify-self-end overflow-visible ${
            activePiece ? "pointer-events-none" : "cursor-pointer"
          }`}
        >
          {/* М’який glow під усією сценою */}
          <div
            data-glow
            className="absolute inset-0 pointer-events-none rounded-[32px] shadow-[0_0_80px_rgba(255,210,110,0.08),0_0_180px_rgba(255,190,80,0.06),inset_0_0_60px_rgba(255,220,140,0.04)]"
          />

          {/* Усі preview-шматки */}
          {PIECES.map((piece) => (
            <img
              key={piece.id}
              data-piece
              src={piece.preview}
              alt=""
              loading="eager"
              decoding="async"
              draggable={false}
              width={700}
              height={840}
              className={`absolute inset-0 h-full w-full object-contain select-none pointer-events-none transition-opacity duration-200 ${
                hoveredId && hoveredId !== piece.id ? "opacity-75" : "opacity-100"
              } [filter:drop-shadow(0_0_14px_rgba(255,220,140,0.04))_drop-shadow(0_0_36px_rgba(255,200,90,0.05))]`}
            />
          ))}
        </div>
      </div>

      {/* Модалка. Закривається тільки по кліку на backdrop. */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/72 p-4 transition-opacity duration-300 ${
          activePiece
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeModal}
      >
        {/* Внутрішній контейнер модалки не закриває її при кліку по самій картинці */}
        <div
          className={`relative flex max-h-[90vh] max-w-5xl items-center justify-center transition-all duration-300 ${
            activePiece ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {activePiece && (
            <img
              src={activePiece.full}
              alt=""
              draggable={false}
              className="block max-h-[90vh] max-w-full rounded-2xl object-contain shadow-[0_0_60px_rgba(0,0,0,0.35)]"
            />
          )}
        </div>
      </div>

      {/* Технічний state, що canvas-мапи вже підготовлені */}
      {!assetsReady && (
        <div className="pointer-events-none absolute opacity-0" aria-hidden="true" />
      )}
    </>
  );
};

export default AnimationImg;