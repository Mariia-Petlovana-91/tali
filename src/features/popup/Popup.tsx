import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VscClose } from 'react-icons/vsc';
import { AnimatePresence, motion } from 'framer-motion';

import { closePopup } from '@/redux/popup/slice';
import { selectActiveModal, selectIsOpen } from '@/redux/popup/selectors';

import { useEscapeHook } from '@/hooks/useEscapeHook';
import { useScrollLock } from '@/hooks/useScrollLockHook';
import { HeroImgModal } from '@/pages/home/components/hero';
import { MobMenu } from '@/shared';

const Popup = () => {
  const isOpen = useSelector(selectIsOpen);
  const activeModal = useSelector(selectActiveModal);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closePopup());
  const isMobMenu = activeModal?.type === 'MOBILE_MENU';

  useEscapeHook(() => {
    if (isOpen) handleClose();
  });

  useScrollLock(isOpen);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1020px)');

    const handleChange = () => {
      if (media.matches && isMobMenu) {
        dispatch(closePopup());
      }
    };

    media.addEventListener('change', handleChange);

    return () => {
      media.removeEventListener('change', handleChange);
    };
  }, [isMobMenu, dispatch]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && activeModal && (
        <motion.div
          key={activeModal.type}
          className={`fixed inset-0 z-50 flex ${
            isMobMenu ? 'justify-start items-start' : 'items-center justify-center'
          } bg-black/80 backdrop-blur-md
 `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className={isMobMenu ? 'h-full' : ''}
            initial={isMobMenu ? { x: -100, opacity: 0 } : { opacity: 0, y: 20, scale: 0.96 }}
            animate={isMobMenu ? { x: 0, opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={isMobMenu ? { x: -100, opacity: 0 } : { opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.35 }}
          >
            {!isMobMenu && (
              <button
                aria-label="Close popup"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose();
                }}
                className="block ml-auto mb-4 icon-btn group "
              >
                <VscClose className="icon" />
              </button>
            )}

            {activeModal.type === 'HERO_IMAGE' && <HeroImgModal {...activeModal.props} onNavigate={handleClose} />}
            {activeModal.type === 'MOBILE_MENU' && <MobMenu />}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
