import { Outlet } from 'react-router-dom';
import { Container } from '@/shared/ui';

const MainLoyout = () => {
  return (
    <Container>
      <header className="font-normal">Header</header>

      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </Container>
  );
};

export default MainLoyout;
