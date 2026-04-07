import { useLayoutEffect, useRef } from "react";
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

const pieces = [
  { id: 1, src: piece1 },
  { id: 2, src: piece2 },
  { id: 3, src: piece3 },
  { id: 4, src: piece4 },
  { id: 5, src: piece5 },
  { id: 6, src: piece6 },
  { id: 7, src: piece7 },
  { id: 8, src: piece8 },
  { id: 9, src: piece9 },
];

const AnimationImg = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const root = rootRef.current;
    const images = Array.from(
      root.querySelectorAll<HTMLImageElement>("[data-piece]")
    );

    if (!images.length) return;

    let cancelled = false;
    let ctx: gsap.Context | null = null;

    const waitForImages = async () => {
      await Promise.all(
        images.map(async (img) => {
          if (img.complete) {
            try {
              await img.decode();
            } catch {}
            return;
          }

          await new Promise<void>((resolve) => {
            const done = async () => {
              img.removeEventListener("load", done);
              img.removeEventListener("error", done);

              try {
                await img.decode();
              } catch {}

              resolve();
            };

            img.addEventListener("load", done, { once: true });
            img.addEventListener("error", done, { once: true });
          });
        })
      );

      if (cancelled || !rootRef.current) return;

      ctx = gsap.context(() => {
        const allPieces = gsap.utils.toArray<HTMLImageElement>("[data-piece]");
        const glow = root.querySelector("[data-glow]");

        gsap.set(root, { autoAlpha: 1 });

        gsap.set(allPieces, {
          y: (i) => 18 + (i % 3) * 3,
          x: (i) => (i % 2 === 0 ? 10 : -10),
          rotation: (i) => (i % 2 === 0 ? -1.4 : 1.4),
          scale: 0.985,
          opacity: 0,
          transformOrigin: "center center",
          willChange: "transform, opacity",
        });

        if (glow) {
          gsap.set(glow, {
            opacity: 0,
            scale: 0.96,
          });
        }

        const tl = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

        if (glow) {
          tl.to(
            glow,
            {
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: "power2.out",
            },
            0
          );
        }

        tl.to(
          allPieces,
          {
            y: 0,
            x: 0,
            rotation: 0,
            scale: 1,
            opacity: 1,
            duration: 1.15,
            stagger: {
              each: 0.04,
              from: "center",
            },
            clearProps: "willChange",
          },
          0.06
        );
      }, rootRef);
    };

    waitForImages();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="inset-0 p-2 md:p-4 lg:p-6"
      style={{ visibility: "hidden" }}
    >
      <div className="relative w-full max-w-[700px] aspect-[700/840] justify-self-end overflow-visible">
        <div
          data-glow
          className="absolute inset-0 pointer-events-none rounded-[32px] shadow-[0_0_80px_rgba(255,210,110,0.06),0_0_180px_rgba(255,190,80,0.04),inset_0_0_60px_rgba(255,220,140,0.03)]"
        />

        {pieces.map((piece, index) => (
          <img
            key={piece.id}
            data-piece
            src={piece.src}
            alt=""
            {...(index < 3 ? { fetchpriority: "high" } : {})}
            loading="eager"
            decoding="async"
            draggable={false}
            width={700}
            height={840}
            className="absolute inset-0 h-full w-full object-contain select-none pointer-events-none [filter:drop-shadow(0_0_14px_rgba(255,220,140,0.04))_drop-shadow(0_0_36px_rgba(255,200,90,0.05))]"
          />
        ))}
      </div>
    </div>
  );
};

export default AnimationImg;