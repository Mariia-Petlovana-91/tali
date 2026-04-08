import { useEffect, useRef } from 'react';
import type { ModelImgHeroProps } from './type';
import { useEscapeHook } from '@/hooks/useEscapeHook';
import { VscClose } from 'react-icons/vsc';

const ModelImgHero = ({ price, setActivePiece }: ModelImgHeroProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const closeModal: () => void = () => {
    setActivePiece(null);
  };
  useEscapeHook(closeModal, !!price);

  useEffect(() => {
    if (price) {
      lastFocusedRef.current = document.activeElement as HTMLElement;
      modalRef.current?.focus();
    } else {
      lastFocusedRef.current?.focus();
    }
  }, [price]);

  return (
    <>
      <div
        ref={modalRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="Modal with full-size image with photo works of Tali"
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-opacity duration-300 ${
          price ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeModal}
      >
        <div
          className={`border border-[#ffffff] relative  md:max-w-[600px] flex items-center justify-center transition-all duration-300 ${
            price ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={closeModal}
            className="text-[#ffffff] top-[-32px] right-0 absolute text-2xl
             hover:opacity-100 focus:outline-none"
            aria-label="Close modal button"
          >
            <VscClose />
          </button>
          {price && (
            <div>
              <p className="text-[#ffffff] ">{price.text}</p>
              <img
                src={price.full}
                alt={price.alt}
                draggable={false}
                className="block  w-[280px] md:max-w[600px] rounded-2xl object-contain shadow-[0_0_60px_rgba(0,0,0,0.35)] animate-in fade-in zoom-in-95 duration-300"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ModelImgHero;
