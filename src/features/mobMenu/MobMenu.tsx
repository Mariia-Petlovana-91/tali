import { useDispatch } from 'react-redux';

import { closePopup } from '@/redux/popup/slice';
import { HeroBtn } from '@/shared';
import { Navigation } from '@/features';

import logo from '@/img/logo/logoTaliaMob.webp';
import lotos from '@/img/dekor/decorLotos.webp';
import modal from '@/img/dekor/modalDecor.webp';

const MobMenu = () => {
  const dispatch = useDispatch();
  return (
    <div
      style={{ '--decor-bg': `url(${modal})` } as React.CSSProperties}
      className="relative w-[300px] h-full p-[24px] md:p-[32px] md:w-[400px] bg-bg before:content-[''] before:absolute before:inset-0
  before:bg-[image:var(--decor-bg)]
  before:bg-no-repeat before:bg-center before:bg-cover
  before:opacity-30 before:pointer-events-none
    border-r border-accent-light-gold flex flex-col justify-between items-center"
    >
      <div>
        <a href="/" aria-label="Go Home " className="block mx-auto mb-[56px]">
          <img src={logo} width={164} height={180} alt="logo" className="w-[80px] h-auto" />
        </a>

        <Navigation
          onNavigate={() => {
            dispatch(closePopup());
          }}
        />
      </div>

      <div>
        <HeroBtn nameClass="p-[16px] text-sm" />
        <img src={lotos} alt="decor lotos" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default MobMenu;
