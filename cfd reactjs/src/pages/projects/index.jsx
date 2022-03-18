import React from 'react';
import Project from './components/Project';
const Projects = () => {
    return (
        <>
            <main className="projectpage" id="main">
                <section className="section-1">
                    <div className="container">
                        <h2 className="main-title">dự án</h2>
                        <p className="top-des">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum sem non
                            luctus
                        </p>
                        <div className="list row">
                            <Project image = '/img/project/project (1).jpg' name = 'furnitown' athor = 'Trần Nghĩa' />
                            <Project image = '/img/project/project (2).jpg' name = 'kymco' athor = 'Huỳnh Tiến Tài' />
                            <Project image = '/img/project/project (3).jpg' name = 'gboxmb' athor = 'Nguyễn Văn Tuấn' />
                            <Project image = '/img/project/project (5).jpg' name = 'wooder' athor = 'Nguyễn Đức Huy' />
                            <Project image = '/img/project/project (6).jpg' name = 'gboxmb' athor = 'Nguyễn Văn Tuấn' />
                            <Project image = '/img/project/project (6).jpg' name = 'wooder' athor = 'Nguyễn Đức Huy' />
                            <Project image = '/img/project/project (1).jpg' name = 'gboxmb' athor = 'Nguyễn Văn Tuấn' />
                            <Project image = '/img/project/project (2).jpg' name = 'wooder' athor = 'Nguyễn Đức Huy' />
                        </div>
                        <div className="bottom">
                            <div className="btn overlay round btn-more">
                                tải thêm
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    );
}

export default Projects;
