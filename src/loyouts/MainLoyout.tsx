import { Outlet } from 'react-router-dom';
import { Container } from '@/shared/ui';

const MainLoyout = () => {
  return (
    <div>
      <header>Header</header>
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
      <footer>Footer</footer>
    </div>
  );
};

export default MainLoyout;
