import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'

export default function Login() {
    const {handleLogin} = useContext(AuthContext)
    const [form, setForm] = useState({})
    const [erorrs, setErorrs] = useState({})

    const _btnSubmit = (e) => {
        e.preventDefault();
        const errorObj = {}
        if(!form.username){
            errorObj.username = 'User name không được bỏ trống';
        } 
        if(!form.password){
            errorObj.password = 'Mật khẩu không được bỏ trống';
        } 
        
        setErorrs(errorObj);
        if(Object.keys(errorObj).length === 0){
            console.log('done')
            handleLogin(form)
        }
    }

    return (
        <div className="popup-form popup-login" style={{ position: 'initial', marginTop: '25px', background: 'none' }}>
            <div className="wrap">
                {/* login-form */}
                <div className="ct_login" style={{ display: 'block' }}>
                    <h2 className="title">Đăng nhập</h2>
                    <input type="text" placeholder="Email / Số điện thoại" onChange={e => form.username = e.target.value}  />
                    {erorrs.username && <span className='text-erorr' style={{color:'red'}}>{erorrs.username}</span>}
                    <input type="password" placeholder="Mật khẩu" onChange={e => form.password = e.target.value}/>
                    {erorrs.password && <span className='text-erorr' style={{color:'red'}}>{erorrs.password}</span>}
                    <div className="remember">
                        <label className="btn-remember">
                            <div>
                                <input type="checkbox" />
                            </div>
                            <p>Nhớ mật khẩu</p>
                        </label>
                        <a href="#" className="forget">Quên mật khẩu?</a>
                    </div>
                    <button onClick={(e) => _btnSubmit(e)} className="btn rect main btn-login">đăng nhập</button>
                    <div className="text-register" style={{}}>
                        <strong>hoặc đăng ký bằng</strong>
                    </div>
                    <div>
                        <div className="btn btn-icon rect white btn-google">
                            <img src="/img/google.svg" alt />
                            Google
                        </div>
                    </div>
                    <div className="close">
                        <img src="/img/close-icon.png" alt />
                    </div>
                </div>
                {/* email form */}
                <div className="ct_email">
                    <h2 className="title">Đặt lại mật khẩu</h2>
                    <input type="text" placeholder="Email" />
                    <div className="btn rect main btn-next">Tiếp theo</div>
                    <div className="back" />
                    <div className="close">
                        <img src="/img/close-icon.png" alt />
                    </div>
                </div>
            </div>
        </div>
    )
}
