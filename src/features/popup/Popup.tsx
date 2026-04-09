import { useDispatch, useSelector } from 'react-redux';
import { VscClose } from 'react-icons/vsc';

import { closePopup } from '@/redux/popup/slice';
import { selectActiveModal, selectIsOpen } from '@/redux/popup/selectors';

import { useEscapeHook } from '@/hooks/useEscapeHook';
import { useScrollLock } from '@/hooks/useScrollLookHook';
import HeroImgModal from '@/pages/home/components/hero/HeroImgModal';

const Popap = () => {
  const isOpen = useSelector(selectIsOpen);
  const activeModal = useSelector(selectActiveModal);
  const dispatch = useDispatch();
  useEscapeHook(() => dispatch(closePopup()));
  useScrollLock(isOpen);

  if (!isOpen || !activeModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={() => dispatch(closePopup())}
    >
      <button
        aria-label="Close popup"
        onClick={() => dispatch(closePopup())}
        className="absolute top-2 right-3 cursor-pointer text-[#f3f3f3] transition-colors duration-300 hover:text-secondary-cyan focus:text-secondary-cyan focus:outline-none"
      >
        <VscClose />
      </button>

      {activeModal.type === 'HERO_IMAGE' && <HeroImgModal {...activeModal.props} />}
    </div>
  );
};

export default Popap;
