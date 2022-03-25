import React from 'react';
import { generatePath } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {COURSE_DETAIL_PATH} from '../../contants/path'
const Course = ({ courseName , courseImage, describe, teacherName, teacherImage, status, slug, id}) => {
    const detailPath = generatePath(COURSE_DETAIL_PATH, {slug, id})

    return (
        <>
            <div className="col-md-4 course">
                <div className="wrap">
                    <Link className="cover" to={detailPath}>
                        <img src={courseImage} alt />
                        {
                            status == 'da-ket-thuc' ?  <span className="badge b1">Đã kết thúc</span> : (
                                status == 'dang-dien-ra' ? <span className="badge b2">Đang diễn ra</span> 
                                : <span className="badge b3">Sắp khai giảng</span>
                            )
                        }
                        <div className="hover">
                            <div className="top">
                                <div className="user">
                                    <img src="/img/icon-user-white.svg" alt />
                                    12</div>
                                <div className="heart">
                                    <img src="/img/icon-heart.svg" alt /> 100
                                </div>
                            </div>
                            <div className="share">
                                <img src="/img/icon-viewmore.svg" alt />
                            </div>
                        </div>
                    </Link>
                    <div className="info">
                        <Link className="name" to={detailPath}>
                           {courseName}
                        </Link>
                        <p className="des">
                           {describe}
                        </p>
                    </div>
                    <div className="bottom">
                        <div className="teacher">
                            <div className="avatar" style={{height: '36px', minWidth: '36px'}}>
                                <img src={teacherImage} style={{objectFit:'cover', height:'100%'}} />
                            </div>
                            <div className="name">{teacherName}</div>
                        </div>
                        <div className="register-btn">Đăng Ký</div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Course;
