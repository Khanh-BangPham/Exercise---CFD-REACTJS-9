import React from 'react';
import Course from '../../../components/course';

const CourseListOffline = () => {
    return (
        <>
            <section className="section-courseonline section-blue">
                <div className="container">
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Online</h2>
                    </div>
                    <div className="list row">
                        <Course courseName='Front-end căn bản' courseImage='/img/img1.png' describe = 'One of the best corporate fashion brands in Sydney' teacherName = 'Trần Nghĩa' status = 'da-ket-thuc' />
                        <Course courseName='Front-end nâng cao' courseImage='/img/img1.png' describe = 'One of the best corporate fashion brands in Sydney' teacherName = 'Trần Nghĩa' status = 'dang-dien-ra' />
                        <Course courseName='Laravel framework' courseImage='/img/img1.png' describe = 'One of the best corporate fashion brands in Sydney' teacherName = 'Trần Nghĩa' status = 'sap-khai-giang' />
                    </div>
                    <div className="text-deco">C</div>
                </div>
            </section>
        </>
    );
}

export default CourseListOffline;
