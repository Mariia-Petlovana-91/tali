import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { MainLoyout as Layout } from '@/loyouts';
import { Loader } from '@/shared';
import Popup from '@/features/popup/Popup';

const Home = lazy(() => import('@/pages/home/Home'));
const About = lazy(() => import('@/pages/about/About'));
const Services = lazy(() => import('@/pages/services/Services'));
const Profile = lazy(() => import('@/pages/profile/Profile'));
const NotFound = lazy(() => import('@/pages/notFound/NotFound'));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-me" element={<About />} />
            <Route path="services" element={<Services />} />

            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Popup />
    </>
  );
};

export default App;
