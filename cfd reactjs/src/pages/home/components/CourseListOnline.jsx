import React from 'react';
import Course from '../../../components/course';

const CourseListOnline = () => {
    return (
        <>
            <section className="section-courseoffline">
                <div className="container">
                    <p className="top-des">
                        The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                        has
                        a more-or-less normal
                    </p>
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Offline</h2>
                    </div>
                    <div className="list row">
                        <Course courseName='Front-end căn bản' courseImage='/img/img1.png' describe = 'One of the best corporate fashion brands in Sydney' teacherName = 'Trần Nghĩa' status = 'da-ket-thuc' />
                        <Course courseName='Front-end nâng cao' courseImage='/img/img1.png' describe = 'One of the best corporate fashion brands in Sydney' teacherName = 'Trần Nghĩa' status = 'dang-dien-ra' />
                        <Course courseName='Laravel framework' courseImage='/img/img1.png' describe = 'One of the best corporate fashion brands in Sydney' teacherName = 'Trần Nghĩa' status = 'sap-khai-giang' />
                        <Course courseName='Front-end căn bản' courseImage='/img/img1.png' describe = 'One of the best corporate fashion brands in Sydney' teacherName = 'Trần Nghĩa' status = 'da-ket-thuc' />
                        <Course courseName='Front-end căn bản' courseImage='/img/img1.png' describe = 'One of the best corporate fashion brands in Sydney' teacherName = 'Trần Nghĩa' status = 'da-ket-thuc' />
                        <Course courseName='Front-end căn bản' courseImage='/img/img1.png' describe = 'One of the best corporate fashion brands in Sydney' teacherName = 'Trần Nghĩa' status = 'da-ket-thuc' />
                    </div>
                </div>
            </section>
        </>
    );
}

export default CourseListOnline;

