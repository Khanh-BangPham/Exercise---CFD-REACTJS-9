import React from 'react';

const Course = ({ courseName , courseImage, describe, teacherName, teacherImage, status, slug}) => {
    return (
        <>
            <div className="col-md-4 course">
                <div className="wrap">
                    <a className="cover" href="#">
                        <img src={courseImage} alt />
                        <span className="badge b1">Đã kết thúc</span>
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
                    </a>
                    <div className="info">
                        <a className="name" href="#">
                           {courseName}
                        </a>
                        <p className="des">
                           {describe}
                        </p>
                    </div>
                    <div className="bottom">
                        <div className="teacher">
                            <div className="avatar">
                                <img src={teacherImage} alt />
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
