import React from 'react';
import { Link } from 'react-router-dom';
import { currency } from '../../../utils/number';
import Skeleton from '@mui/material/Skeleton';
const Banner = ({name, date, time, price, path}) => {
    return (
        <section className="banner style2" style={{ '--background': '#cde6fb' }}>
            <div className="container">
                <div className="info">
                    {
                        name?<h1>{name}</h1>:<Skeleton height={130} width={'100%'}/>
                    }
                    <div className="row">
                        <div className="date"><strong>Khai giảng:</strong> {date} </div>
                        <div className="time"><strong>Thời lượng:</strong> {time} Buổi</div>
                    </div>
                    <Link to={path} className="btn white round" style={{ '--color-btn': '#70b6f1' }}>đăng ký</Link>
                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <div className="video">
                        <div className="icon">
                            <img src="/img/play-icon-white.png" alt />
                        </div> <span>giới thiệu</span>
                    </div>
                    <div className="money">{currency(price)} VND</div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
