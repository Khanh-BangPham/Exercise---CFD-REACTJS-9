import React from 'react';
import { useRef } from 'react';
import Label from './components/Label';

const Cooperation = (props) => {
    return (
        <>
            <main className="register-course" id="main">
                <section className="section-1 wrap container">
                    {/* <div class="main-sub-title">liên hệ</div> */}
                    <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
                    <p className="top-des">
                        Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
                        việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
                    </p>
                    <div className="form">
                        <Label title='Họ và tên' placeholder='Họ và tên bạn' />
                        <Label title='Số điện thoại' placeholder='Số điện thoại' />
                        <Label title='Email' placeholder='Email của bạn' />
                        <Label title='Website' placeholder='Đường dẫn website http://' />
                        <Label title='Tiêu đề' placeholder='Tiêu đề liên hệ' />
                        <Label title='Nội dung' isTextarea = {true} col = {30} row = {10} />
                        <div className="btn main rect">đăng ký</div>
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

export default Cooperation;
