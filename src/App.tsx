import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { selectActiveModal } from '@/redux/popup/selectors';

import { MainLoyout as Layout } from '@/loyouts';
import { Loader } from '@/shared';

const Popup = lazy(() => import('./features/popup/Popup'));

const Home = lazy(() => import('@/pages/home/Home'));
const About = lazy(() => import('@/pages/about/About'));
const Events = lazy(() => import('@/pages/events/Events'));
const Scenery = lazy(() => import('@/pages/scenery/Scenery'));
const PlasterRelief = lazy(() => import('@/pages/plaster-relief/PlasterRelief'));
const Special = lazy(() => import('@/pages/special/Special'));
const NotFound = lazy(() => import('@/pages/notFound/NotFound'));
const Profile = lazy(() => import('@/pages/profile/Profile'));

const App = () => {
  const activeModal = useSelector(selectActiveModal);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services/events" element={<Events />} />
            <Route path="services/scenery" element={<Scenery />} />
            <Route path="services/plaster-relief" element={<PlasterRelief />} />
            <Route path="services/special" element={<Special />} />
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
