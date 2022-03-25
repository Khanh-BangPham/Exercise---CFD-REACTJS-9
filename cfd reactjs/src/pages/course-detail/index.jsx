import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Course from '../../components/course';
import { courseService } from '../../services/course';
import Banner from './components/banner';
import CourseIntroduced from './components/courseIntroduce';
import { HOME_PATH, REGISTER_PATH } from '../../contants/path';
import Accordion from './components/accordion';
import { generatePath } from 'react-router-dom';
const CourseDetail = () => {
    const [detail, setDetail] = useState({})
    const {slug, id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        courseService.getDetail(id)
        .then(res => {
            if(res.data){
                setDetail(res.data)
            } else {
                navigate(HOME_PATH);
            }
        })
    }, [id]);
    
    const registerPath = generatePath(REGISTER_PATH, {id})
    return (
        <>
            <main className="course-detail" id="main">
                <Banner path={registerPath} name = {detail.title} date = {detail.opening_time} time = {detail.count_video} price = {detail.money} />
                <CourseIntroduced path={registerPath} detail = {detail}/>
            
                <section className="section-3">
                    <div className="container">
                        <div className="textbox">
                            <h3 className="sub-title">DỰ ÁN</h3>
                            <h2 className="main-title">THÀNH VIÊN</h2>
                        </div>
                        <div className="list row">
                        <Course courseName='Front-end căn bản' courseImage='/img/img1.png' describe = 'One of the best corporate fashion brands in Sydney' teacherName = 'Trần Nghĩa' status = 'da-ket-thuc' slug = {slug} id = {id} />
                        <Course courseName='Front-end nâng cao' courseImage='/img/img1.png' describe = 'One of the best corporate fashion brands in Sydney' teacherName = 'Trần Nghĩa' status = 'dang-dien-ra' slug = {slug} id = {id}/>
                        <Course courseName='Laravel framework' courseImage='/img/img1.png' describe = 'One of the best corporate fashion brands in Sydney' teacherName = 'Trần Nghĩa' status = 'sap-khai-giang' slug = {slug} id = {id}/>
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
                        <Course courseName='Front-end căn bản' courseImage='/img/img1.png' describe = 'One of the best corporate fashion brands in Sydney' teacherName = 'Trần Nghĩa' status = 'da-ket-thuc' slug = {slug} id = {id} />
                        <Course courseName='Front-end nâng cao' courseImage='/img/img1.png' describe = 'One of the best corporate fashion brands in Sydney' teacherName = 'Trần Nghĩa' status = 'dang-dien-ra' slug = {slug} id = {id} />
                        <Course courseName='Laravel framework' courseImage='/img/img1.png' describe = 'One of the best corporate fashion brands in Sydney' teacherName = 'Trần Nghĩa' status = 'sap-khai-giang' slug = {slug} id = {id} />
                        </div>
                    </div>
                </section>
            </main >

        </>
    );
}

export default CourseDetail;
