import { useDispatch } from 'react-redux';

import { closePopup } from '@/redux/popup/slice';
import { Navigation, HeroBtn } from '@/shared';

import logo from '@/img/logo/logoTaliaMob.webp';
import decor from '@/img/dekor/decorLotos.webp';

const MobMenu = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="w-[280px] p-[24px] md:p-[32px] md:w-[400px] bg-bg
   h-[100vh] border-r border-accent-light-gold flex flex-col justify-between items-center"
    >
      <div>
        <a href="/" className="block mx-auto mb-[56px]">
          <img src={logo} alt="logo" className="w-[80px] h-auto" aria-label="Go Home" />
        </a>

        <Navigation
          onNavigate={() => {
            dispatch(closePopup());
          }}
        />
      </div>

      <div>
        <HeroBtn />
        <img src={decor} alt="decor lotos" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default MobMenu;
