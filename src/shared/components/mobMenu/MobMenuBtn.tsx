import { useDispatch } from 'react-redux';

import { IoMenu } from 'react-icons/io5';
import { openPopup } from '@/redux/popup/slice';

const MobMenuBtn = () => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      aria-label="Open mobile menu"
      className="icon-btn group lg:hidden"
      onClick={() => {
        dispatch(openPopup({ type: 'MOBILE_MENU' }));
      }}
    >
      <IoMenu className="icon" />
    </button>
  );
};

export default MobMenuBtn;
