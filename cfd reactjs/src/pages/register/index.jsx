import React, {useState} from 'react';
import Label from './components/Label';
const Register = () => {
    const [form, setForm] = useState({})
    const [erorrs, setErorrs] = useState({})

    const _btnSubmit = (e) => {
        e.preventDefault();
        const errorObj = {}
        if(!form.username){
            errorObj.username = 'Họ và tên không được bỏ trống';
        } 
        if(!form.email){
            errorObj.email = 'Email không được bỏ trống';
        } else {
            if(!/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/.test(form.email)){
                errorObj.email = 'Email không đúng định dạng'
            }
        }
        if(!form.fbUrl){
            errorObj.fbUrl = 'URL Facebook không được bỏ trống';
        } 
        if(!form.tel){
            errorObj.tel = 'Số điện thoại không được bỏ trống';
        } else {
            if(!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.tel)){
                errorObj.tel = 'Số điện thoại không đúng định dạng'
            }
        }
        
        setErorrs(errorObj);
        if(Object.keys(errorObj).length === 0){
            console.log('done')
        }
    }

    return (
        <>
            <main className="register-course" id="main">
                <section>
                    <div className="container">
                        <div className="wrap container">
                            <div className="main-sub-title">ĐĂNG KÝ</div>
                            <h1 className="main-title">Thực chiến front-end căn bản </h1>
                            <div className="main-info">
                                <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
                                <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                                <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
                            </div>
                            <form className="form">
                                <Label 
                                    title='Họ và tên' 
                                    placeholder='Họ và tên bạn' 
                                    onChange={e => form.username = e.target.value} 
                                    erorr={erorrs.username}
                                    mustHave={true}/>
                                <Label 
                                    title='Số điện thoại' 
                                    placeholder='Số điện thoại' 
                                    onChange={e => form.tel = e.target.value} 
                                    erorr={erorrs.tel}
                                    mustHave={true}/>
                                <Label 
                                    title='Email' 
                                    placeholder='Email của bạn' 
                                    onChange={e => form.email = e.target.value} 
                                    erorr={erorrs.email}
                                    mustHave={true}/>
                                <Label 
                                    title='URL Facebook' 
                                    placeholder='https://facebook.com' 
                                    onChange={e => form.fbUrl = e.target.value} 
                                    erorr={erorrs.fbUrl}
                                    mustHave={true}/>
                                <label className="disable">
                                    <p>Sử dụng COIN</p>
                                    <div className="checkcontainer">
                                        Hiện có <strong>300 COIN</strong>
                                        {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                                        {/* Cần ít nhất 200 COIN để giảm giá */}
                                        <input type="checkbox" defaultChecked="checked" />
                                        <span className="checkmark" />
                                    </div>
                                </label>
                                <label>
                                    <p>Hình thức thanh toán</p>
                                    <div className="select">
                                        <div className="head">Chuyển khoản</div>
                                        <div className="sub">
                                            <a href="#">Chuyển khoản</a>
                                            <a href="#">Thanh toán tiền mặt</a>
                                        </div>
                                    </div>
                                </label>
                                <Label 
                                    title='Ý kiến cá nhân' 
                                    placeholder='Mong muốn cá nhân và lịch bạn có thể học.' 
                                    onChange={e => form.note = e.target.value} 
                                    mustHave={false}/>
                                <button className="btn main rect" onClick={(e) => _btnSubmit(e)}>đăng ký</button>
                            </form>
                        </div>
                    </div>
                </section>
                {/* <div class="register-success">
      <div class="contain">
          <div class="main-title">đăng ký thành công</div>
          <p>
              <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
              Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
              hoặc số điện thoại của bạn.
          </p>
      </div>
      <a href="/" class="btn main rect">về trang chủ</a>
  </div> */}
            </main>

        </>
    );
}

export default Register;
