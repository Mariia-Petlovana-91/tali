import { Outlet } from 'react-router-dom';

const MainLoyout = () => {
  return (
    <div>
      <header>Header</header>

      <Outlet />

      <footer>Footer</footer>
    </div>
  );
};

export default MainLoyout;