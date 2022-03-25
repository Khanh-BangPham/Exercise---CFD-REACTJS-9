import React from 'react';
import Banner from './components/Banner';
import CourseListOffline from './components/CourseListOffline';
import CourseListOnline from './components/CourseListOnline';
import Different from './components/Different';
import Gallery from './components/Gallery';
import Testimonial from './components/Testimonial';
import Action from './components/Action';
import Popupvideo from './components/PopupVideo';
import { useState, useEffect } from 'react';
import { courseService } from '../../services/course';
import useQuery from '../../hooks/useQuery';
const Home = () => {
    // const [courses, setCourses] = useState()

    // useEffect(() => {
    //     courseService.getList()
    //     .then(res => {
    //         setCourses(res.data.data);
    //     })
    // }, []);
    const {data: courses} = useQuery(() => {return courseService.getList()}, [])
    return (
        <>
            <main className="homepage" id="main">
                <Banner />
                <CourseListOnline courses={courses}/>
                {/* <CourseListOffline /> */}
                <Different />
                {/* <section class="section-3">
                    <div class="container">
                        <div class="video">
                            <iframe id="video-intro"
                                src="https://www.youtube-nocookie.com/embed/6t-MjBazs3o?controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=ytplayer"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen allowscriptaccess="always"></iframe>

                            <div class="video-src" data-src="video/CFD-video-intro.mp4"></div>
                            <div class="play-btn btn-video-intro">
                                <img src="/img/play-video-btn.png" alt="">
                            </div>
                        </div>
                    </div>
                </section> */}
                <Testimonial />
                <Gallery />
                <Action />
            </main>
            {/* popup video homepage */}
            <Popupvideo />
        </>

    );
}

export default Home;
