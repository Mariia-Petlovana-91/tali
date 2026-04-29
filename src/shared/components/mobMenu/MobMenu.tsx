import { useDispatch } from 'react-redux';

import { closePopup } from '@/redux/popup/slice';
import { Navigation, HeroBtn } from '@/shared';

import logo from '@/img/logo/logoTaliaMob.webp';
import decor from '@/img/dekor/decorLotos.webp';
import superDecor from '@/img/dekor/ippipi.png';

const MobMenu = () => {
  const dispatch = useDispatch();
  return (
    <div
      style={{ '--decor-bg': `url(${superDecor})` } as React.CSSProperties}
      className="w-[280px] h-full p-[24px] md:p-[32px] md:w-[400px] bg-bg before:content-[''] before:absolute before:inset-0
  before:bg-[image:var(--decor-bg)]
  before:bg-no-repeat before:bg-center before:bg-cover
  before:opacity-20 before:pointer-events-none
    border-r border-accent-light-gold flex flex-col justify-between items-center"
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
