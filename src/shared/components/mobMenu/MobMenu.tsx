import { useDispatch } from 'react-redux';

import { closePopup } from '@/redux/popup/slice';
import { Navigation } from '@/shared';

import logo from '@/img/logo/logoTaliaMob.webp';

const MobMenu = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="w-[280px] p-[24px] md:p-[32px] md:w-[400px] bg-bg
   h-[100vh] border-r border-accentLightGold"
    >
      <Navigation
        onNavigate={() => {
          dispatch(closePopup());
        }}
      />
    </div>
  );
};

export default MobMenu;
