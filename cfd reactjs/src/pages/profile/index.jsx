import React from 'react';
import Info from './components/Info'
import Course from './components/Course';
import Coin from './components/Coin';
import Project from './components/Project';
import Payment from './components/Payment';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { useState, useContext } from 'react';
import {AuthContext} from '../../context/AuthContext'
const Profile = ({path}) => {
    const {user} = useContext(AuthContext);

    return (
        <>
            <main className="profile" id="main">
                <section>
                    <div className="top-info">
                        <div className="avatar">
                            {/* <span class="text">H</span> */}
                            <img src={user.avatar} alt />
                            <div className="camera" />
                        </div>
                        <div className="name">{user.name}</div>
                        <p className="des">Thành viên của team CFD1-OFFLINE</p>
                    </div>
                    <div className="container">
                        <div className="tab">
                            <div className="tab-title">
                                <NavLink to='/ca-nhan' end>Thông tin tài khoản</NavLink>
                                <NavLink to='/ca-nhan/khoa-hoc'>Khóa học của bạn</NavLink>
                                <NavLink to='/ca-nhan/du-an'>Dự án đã làm</NavLink>
                                <NavLink to='/ca-nhan/thanh-toan'>Lịch sử thanh toán</NavLink>
                                <NavLink to='/ca-nhan/coin'>Quản lý COIN của tôi</NavLink>
                            </div>
                            <div className="tab-content">
                              <Outlet/>
                              {/* {tabs === 0 && <Info/>}
                              {tabs === 1 && <Course/>}
                              {tabs === 2 && <Project/>}
                              {tabs === 3 && <Payment/>}
                              {tabs === 4 && <Coin/>} */}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    );
}

export default Profile;
