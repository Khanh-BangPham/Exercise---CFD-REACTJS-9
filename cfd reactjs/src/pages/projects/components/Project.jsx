import React from 'react';

const Project = ({image, name, athor}) => {
    return (
        <>
            <a href="#" className="item col-md-6">
                <div className="wrap">
                    <div className="cover">
                        <img src={image} alt />
                    </div>
                    <div className="info">
                        <div className="name">{name}</div>
                        <div className="makeby">Hoàn thành với {athor} </div>
                    </div>
                </div>
            </a>
        </>
    );
}

export default Project;
