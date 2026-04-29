import { Outlet } from 'react-router-dom';
import { Container, Header } from '@/shared';

const MainLoyout = () => {
  return (
    <Container>
      <Header />

      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </Container>
  );
};

export default MainLoyout;
