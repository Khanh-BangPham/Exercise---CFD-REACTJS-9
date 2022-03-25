import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from './accordion';
const CourseIntroduced = ({ detail, path }) => {
    return (
        <section className="section-2">
            <div className="container">
                <p className="des"> {detail.long_description} </p>
                <h2 className="title">giới thiệu về khóa học</h2>
                <div className="cover">
                    <img src="/img/course-detail-img.png" alt />
                </div>
                <h3 className="title">nội dung khóa học</h3>
                {detail.content?.map((e, i)=>
                    <Accordion key={i} index={i + 1} title={e.title} content={e.content} />)
                }
                <h3 className="title">yêu cầu cần có</h3>
                <div className="row row-check">
                    {
                    detail.required?.map(e => <div className="col-md-6">{e.content}</div>)
                    }
                </div>
                <h3 className="title">hình thức học</h3>
                <div className="row row-check">
                {
                    detail.benefits?.map(e => <div className="col-md-6">{e.content}</div>)
                }
                </div>
                <h3 className="title">
                    <div className="date-start">lịch học</div>
                    <div className="sub">*Lịch học và thời gian có thể thống nhất lại theo số đông học viên.</div>
                </h3>
                <p>
                    <strong>Ngày bắt đầu: </strong> {detail.opening_time} <br />
                    <strong>Thời gian học: </strong> {detail.schedule}
                </p>
                <h3 className="title">Người dạy</h3>
                <div className="teaches">
                    <div className="teacher">
                        <div className="avatar">
                            <img src={detail.teacher?.avatar?.link} alt />
                        </div>
                        <div className="info">
                            <div className="name">{detail.teacher?.title}</div>
                            <div className="title">{detail.teacher?.position}</div>
                            <p className="intro">
                               {detail.teacher?.description}
                            </p>
                            {detail.website && <p><strong>Website:</strong> {detail.website}</p>}    
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="user">
                        <img src="/img/user-group-icon.png" alt /> {detail.number_student_default} bạn đã đăng ký
                    </div>
                    <Link to={path} className="btn main btn-register round">đăng ký</Link>
                    <div className="btn-share btn overlay round btn-icon">
                        <img src="/img/facebook.svg" alt />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CourseIntroduced;
