import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Sidebar() {
    const toggleMenu = () => {
        document.body.classList.toggle('menu-is-show');
    }
    return (
        <>
            <nav className="nav">
                <ul>
                    <li className="li_login">
                        <NavLink to='/dang-nhap'>Đăng ký / Đăng nhập</NavLink>
                    </li>
                    <li className="active">
                        <NavLink to='/'>Trang chủ</NavLink>
                    </li>
                    <li>
                        <NavLink to='/thanh-vien'>CFD Team</NavLink>
                    </li>
                    <li>
                        <NavLink to='/khoa-hoc'>Khóa Học</NavLink>
                    </li>
                    <li>
                        <NavLink to='/lien-he'>Liên Hệ</NavLink>
                    </li>
                </ul>
            </nav>
            <div onClick={toggleMenu} className="overlay_nav" />
        </>
    )
}
