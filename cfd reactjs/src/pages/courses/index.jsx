import React from 'react';
import CourseListOnline from './components/CourseListOnline';
import CourseListOffline from './components/CourseListOffline'
const Courses = () => {
    return (
        <>
            <main className="homepage" id="main">
                <CourseListOnline />
                <CourseListOffline />
            </main>

        </>
    );
}

export default Courses;
