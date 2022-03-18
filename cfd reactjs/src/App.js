import logo from './logo.svg';
import './App.css';

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
import Demo from './pages/demo';
import MainLayout from './layouts/MainLayout';


function App() {
  return (
    <>
      <MainLayout >
        {/* <Error404 /> */}
        {/* <CourseDetail name = 'Thực chiến Front end căn bản' date = '29/12/2021' time = '18 buổi' price = '4.000.000' 
        describe={'Many Laravel apps don’t warrant the complexity of a full front-end framework like Vue or React. '
        + 'In this series, we’ll walk through a handful of simple ways to add dynamic functionality to your apps.'}/> */}
        {/* <Email /> */}
        {/* <Faq /> */}
        {/* <CoinIntroduced /> */}
        {/* <Cooperation /> */}
        <Home />
        {/* <Courses /> */}
        {/* <Profile />  */}
        {/* <Projects /> */}
        {/* <Register /> */}
        {/* <Payment /> */}
        {/* <Demo /> */}
        {/* <Team /> */}
        {/* <Register /> */}
      </MainLayout>
    </>
  );
}

export default App;
