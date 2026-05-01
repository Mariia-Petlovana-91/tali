import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { selectActiveModal } from '@/redux/popup/selectors';

import { MainLoyout as Layout } from '@/loyouts';
import { Loader } from '@/shared';

const Popup = lazy(() => import('./features/popup/Popup'));

const Home = lazy(() => import('@/pages/home/Home'));
const About = lazy(() => import('@/pages/about/About'));
const Services = lazy(() => import('@/pages/services/Services'));
const Profile = lazy(() => import('@/pages/profile/Profile'));
const NotFound = lazy(() => import('@/pages/notFound/NotFound'));
const Special = lazy(() => import('@/pages/special/Special'));

const App = () => {
  const activeModal = useSelector(selectActiveModal);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="special" element={<Special />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

        {activeModal && <Popup />}
      </Suspense>
    </>
  );
};

export default App;
