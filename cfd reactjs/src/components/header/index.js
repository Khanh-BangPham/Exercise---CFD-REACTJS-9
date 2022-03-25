import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Sidebar from '../sidebar';
import { AuthContext } from '../../context/AuthContext'
import { HOME_PATH } from '../../contants/path';

const Header = () => {
    const { user } = useContext(AuthContext);

    const toggleMenu = () => {
        document.body.classList.toggle('menu-is-show');
    }
    return (
        <>
            <header id="header">
                <div className="wrap">
                    <div className="menu-hambeger">
                        <div className="button">
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className="text">menu</span>
                    </div>
                    <Link to={HOME_PATH} className="logo">
                        <img src="/img/logo.svg" alt />
                        <h1>CFD</h1>
                    </Link>
                    <div className="right">
                        {
                            user? <div className="have-login">
                            <div className="account">
                                <a href="#" className="info">
                                    <div className="name">{user.name}</div>
                                    <div className="avatar">
                                        <img src={user.avatar} alt />
                                    </div>
                                </a>
                            </div>
                            <div className="hamberger">
                            </div>
                            <div className="sub">
                                <a href="#">Khóa học của tôi</a>
                                <a href="#">Thông tin tài khoản</a>
                                <a href="#">Đăng xuất</a>
                            </div>
                        </div> : <div class="not-login bg-none">
                            <Link to='/login' class="btn-register">Đăng nhập</Link>
                            <Link to='/login' class="btn main btn-open-login">Đăng ký</Link>
                        </div>
                        }
                        
                    </div>
                </div>
            </header>
            <Sidebar />
        </>
    );
}

export default Header;
