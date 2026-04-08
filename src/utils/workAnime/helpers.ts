import type { Piece } from "@/pages/home/components/hero/type";

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
  pieces: Piece[],stageWith: number,stageHeight: number,
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
      canvas.width = stageWith;
      canvas.height = stageHeight;

      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.clearRect(0, 0, stageWith, stageHeight);
        ctx.drawImage(img, 0, 0, stageWith, stageHeight);
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
  clientY: number,
  stageWidth: number,
  stageHeight: number
) => {
  const rect = stage.getBoundingClientRect();

  const x = ((clientX - rect.left) / rect.width) * stageWidth;
  const y = ((clientY - rect.top) / rect.height) * stageHeight;

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
  clientY: number,stageWidth: number,stageHeight: number,alphaThreshold: number
) => {
  const { x, y } = getStagePoint(stage, clientX, clientY, stageWidth, stageHeight);

  if (x < 0 || y < 0 || x > stageWidth || y > stageHeight) {
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

    if (alpha > alphaThreshold) {
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

export { preparePieceCanvasMap, getStagePoint, getPieceAtPoint, getPointerProgress };