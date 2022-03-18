import React from 'react';
import Course from '../../components/course';
import Banner from './components/banner';
import CourseIntroduced from './components/courseIntroduce';
const CourseDetail = ({name, date, time, price, describe, introduce}) => {
    return (
        <>
            <main className="course-detail" id="main">
                <Banner name = {name} date = {date} time = {time} price = {price} />
                <CourseIntroduced describe={describe}/>
                <section className="section-3">
                    <div className="container">
                        <div className="textbox">
                            <h3 className="sub-title">DỰ ÁN</h3>
                            <h2 className="main-title">THÀNH VIÊN</h2>
                        </div>
                        <div className="list row">
                        <Course courseName='Front-end căn bản' courseImage='/img/img1.png' describe = 'One of the best corporate fashion brands in Sydney' teacherName = 'Trần Nghĩa' status = 'da-ket-thuc' />
                        <Course courseName='Front-end nâng cao' courseImage='/img/img1.png' describe = 'One of the best corporate fashion brands in Sydney' teacherName = 'Trần Nghĩa' status = 'dang-dien-ra' />
                        <Course courseName='Laravel framework' courseImage='/img/img1.png' describe = 'One of the best corporate fashion brands in Sydney' teacherName = 'Trần Nghĩa' status = 'sap-khai-giang' />
                        </div>
                    </div>
                </section>
                <section className="section-4">
                    <div className="container">
                        <div className="textbox">
                            <h3 className="sub-title">Khóa học</h3>
                            <h2 className="main-title">Liên quan</h2>
                        </div>
                        <div className="list row">
                        <Course courseName='Front-end căn bản' courseImage='/img/img1.png' describe = 'One of the best corporate fashion brands in Sydney' teacherName = 'Trần Nghĩa' status = 'da-ket-thuc' />
                        <Course courseName='Front-end nâng cao' courseImage='/img/img1.png' describe = 'One of the best corporate fashion brands in Sydney' teacherName = 'Trần Nghĩa' status = 'dang-dien-ra' />
                        <Course courseName='Laravel framework' courseImage='/img/img1.png' describe = 'One of the best corporate fashion brands in Sydney' teacherName = 'Trần Nghĩa' status = 'sap-khai-giang' />
                        </div>
                    </div>
                </section>
            </main >

        </>
    );
}

export default CourseDetail;
