import { Outlet } from 'react-router-dom';
import { Container } from '@/shared';
import { Header, Footer } from '@/features';

const MainLoyout = () => {
  return (
    <Container>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </Container>
  );
};

export default MainLoyout;
