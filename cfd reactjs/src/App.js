import './App.css';
import { render } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Team from './pages/team';
import Error404 from './pages/404';
import CourseDetail from './pages/course-detail';
import Email from './pages/email';
import Faq from './pages/faq';
import CoinIntroduced from './pages/coin-introduced';
import Cooperation from './pages/cooperation';
import Courses from './pages/courses';
import Profile from './pages/profile';
import Projects from './pages/projects';
import Register from './pages/register';
import Payment from './pages/payment';
import MainLayout from './layouts/MainLayout';
import ProfileInfo from './pages/profile/components/Info';
import ProfileCourse from './pages/profile/components/Course';
import ProfileProject from './pages/profile/components/Project';
import ProfilePayment from './pages/profile/components/Payment';
import ProfileCoin from './pages/profile/components/Coin';
import Login from './pages/login'
import { COURSE_DETAIL_PATH, REGISTER_PATH, HOME_PATH } from './contants/path';

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={HOME_PATH} element={<Home />} />
          <Route path='/khoa-hoc' element={<Courses />} />
          <Route path={COURSE_DETAIL_PATH} element={<CourseDetail />} />
          <Route path={REGISTER_PATH} element={<Register />} />
          <Route path='/lien-he' element={<Cooperation />} />
          <Route path='/ca-nhan' element={<Profile />}>
            <Route index element={<ProfileInfo />}/>
            <Route path='khoa-hoc' element={<ProfileCourse />}/>
            <Route path='du-an' element={<ProfileProject />}/>
            <Route path='thanh-toan' element={<ProfilePayment />}/>
            <Route path='coin' element={<ProfileCoin />}/>
          </Route>
          <Route path='/thanh-vien' element={<Team />} />
          <Route path='/huong-dan-thanh-toan' element={<Payment />} />
          <Route path='/du-an' element={<Projects />} />
          <Route path='/gioi-thieu-coin' element={<CoinIntroduced />} />
          <Route path='/email' element={<Email />} />
          <Route path='/cau-hoi-thuong-gap' element={<Faq />} />
          <Route path='/email' element={<Email />} />
          <Route path='/login'element={<Login/>}/>
          <Route path='/*' element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
