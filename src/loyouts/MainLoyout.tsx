import { Outlet } from 'react-router-dom';
import { Container, Header } from '@/shared';

import superDecor from '@/img/dekor/ьтльдльольодльодл.png';

const MainLoyout = () => {
  return (
    <Container>
      <Header />

      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
      <div className="pointer-events-none absolute left-0 top-0 z-10 lg:block">
        <img src={superDecor} alt="" className="h-full  opacity-20" />
      </div>
    </Container>
  );
};

export default MainLoyout;
