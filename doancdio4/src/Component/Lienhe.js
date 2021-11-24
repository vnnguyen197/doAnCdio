import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";
var username = document.getElementById('username');
var email = document.getElementById('email');
var topic = document.getElementById('topic');
var content = document.getElementById('content');
var name_error = document.getElementById('name_error');
var email_error = document.getElementById('email_error');
var topic_error = document.getElementById('topic_error');
var content_error = document.getElementById('content_error');
function validateForm() {
  if (username.value == "") {
    username.style.border = "2px solid red";
    name_error.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bạn cần nhập họ tên";
    username.focus();
    return false;
  }
  var acong = email.value.indexOf('@');
  var dot = email.value.lastIndexOf('.');

  if (email.value == "" || acong < 1 || dot < acong + 2 || dot + 2 >= email.value.length) {
    email.style.border = "2px solid red";
    email_error.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bạn cần nhập đúng email";
    email.focus();
    return false;
  }
  if (topic.value == "") {
    topic.style.border = "2px solid red";
    topic_error.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bạn cần nhập tiêu đề";
    topic.focus();
    return false;
  }
  if (content.value == "") {
    content.style.border = "2px solid red";
    content_error.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bạn cần nhập nội dung";
    content.focus();
    return false;
  }
}
class Lienhe extends Component {
  render() {
    return (
      <div>
        <article>
          <br />
          <img src="Picture/Lienhe.png" width="700px" />
          <br />
          <br />
          <form onsubmit="return validateForm()">
            <div>&nbsp;&nbsp;<a>Họ Tên*</a>&nbsp;&nbsp;
              <input className="h" type="text" id="username" placeholder="Mời bạn nhập tên" />
              <div className="val_error" id="name_error" />
            </div><br />
            <div>&nbsp;&nbsp;<a>Email*</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input className="h" type="text" id="email" placeholder="Mời bạn nhập email" />
              <div className="val_error" id="email_error" />
            </div><br />
            <div>&nbsp;&nbsp;<a>Tiêu Đề</a>&nbsp;&nbsp;&nbsp;
              <input className="ha" type="text" id="topic" placeholder="Mời bạn nhập tiêu đề" />
              <div className="val_error" id="topic_error" />
            </div><br />
            <div>&nbsp;&nbsp;<a>Nội Dung</a>
              <textarea className="hh" rows={10} cols={70} id="content" placeholder="Mời bạn nhập ý kiến phản hồi" defaultValue={""} />
              <div className="val_error" id="content_error" />
            </div><br />
            <div className="hu"><button type="submit" onClick={() => this.validateForm()} >Gửi Thông Tin</button></div>
          </form>
        </article>
        <footer className="mainfooter" style={{ bottom: -500, margin: 0, fontFamily: 'Arial, Helvetica, sans-serif', background: '#ffffff' }}>
          <br />
          <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-3">
                  <div className="footer-about">
                    <h3 style={{ color: 'black' }}>Liên kết hữu ích</h3>
                    <p>
                      <a href="gioithieu.html"> Giới Thiệu Về NTC </a> <br />
                      <a href="">Tuyển Dụng</a> <br />
                      <a href="">Điều Khoản NTC</a> <br />
                      <a href="">Chính Sách Bảo Mật</a> <br />
                      <a href=""> Chính Hãng</a> <br />
                      <a href="">Flash Sales</a> <br />
                      <a href="">Liên Hệ Với Truyền Thông</a>
                    </p>
                    <div className="footer-social">
                      <a href="https://www.facebook.com/v.nnguyen11/"><i className="fab fa-twitter" /></a>
                      <a href="https://www.facebook.com/v.nnguyen11/"><i className="fab fa-facebook-f" /></a>
                      <a href="https://www.facebook.com/v.nnguyen11/"><i className="fab fa-youtube" /></a>
                      <a href="https://www.facebook.com/v.nnguyen11/"><i className="fab fa-instagram" /></a>
                      <a href="https://www.facebook.com/v.nnguyen11/"><i className="fab fa-linkedin-in" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="footer-contact">
                    <h3 style={{ color: 'black' }}>Liên lạc</h3>
                    <p><i className="fa fa-map-marker-alt" />3 Đống Đa, Hải Châu, Đà Nẵng</p>
                    <p><i className="fa fa-phone-alt" />054 335 1256</p>
                    <p><i className="fa fa-envelope" />ntc@gmail.com</p>
                    <p><i className="far fa-clock" />Thứ 2 - Thứ 7, 08AM - 21PM</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="footer-contact">
                    <h3 style={{ color: 'black' }}>Về chúng tôi</h3>
                    <p style={{ color: '#999999' }}>
                      NTC - ứng dụng mua sắm trực tuyến thú vị, an toàn và miễn phí!
                      <br />
                      NTC là nền tảng giao dịch trực tuyến
                      hàng đầu ở Đông Nam Á. Với sự đảm bảo của NTC,
                      bạn sẽ mua hàng trực tuyến an tâm và nhanh chóng hơn bao giờ hết!
                    </p>
                  </div>
                </div>
                {/* <div class="col-md-6 col-lg-3">
      <div class="footer-project">
            <h3 style="color: black;">Sản phẩm mới nhất</h3>
            <a href="xiu1.html"><img src="./Picture/tudong.jpg" alt="Image">Văn Nguyện</a>
            <a href="xiu2.html"><img src="./Picture/quat.jpeg" alt="Image"></a>
            <a href="xiu3.html"><img src="./Picture/maygiat.jpg" alt="Image"></a>
            <a href="ntc1.html"><img src="./Picture/salon.jpeg" alt="Image"></a>
            <a href="ntc2.html"><img src="./Picture/banan.jpg" alt="Image"></a>
            <a href="ntc3.html"><img src="./Picture/ketivi.jpg" alt="Image"></a>
      </div>
</div> */}
                <div className="col-md-6 col-lg-3" align="center">
                  <div className="footer-contact">
                    <h3 style={{ color: 'black' }}>Hỗ trợ trực tuyến  </h3>
                    {/* <img src="./Picture/icon2.png" /> }
                    { <p>Nhân viên: Nhật Chinh </p>
                    <a href="https://www.facebook.com/hades2510"><img src="./Picture/ad1.jpg" width="110px" height="110px" /></a>
                    <br />
                    <br />
                    <p> Điện Thoại : 039 3944376</p> */}

                    <p>Nhân viên: Văn Nguyện</p>
                    <a href="https://www.facebook.com/v.nnguyen11"><img src="./Picture/ad1.jpg" width="180px" height="140px" /></a>
                    <br />
                    <br />
                    <p> Điện Thoại : 034 4465816</p>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="container footer-newsletter">
<p>
Lorem
</p>
<div class="row form">
<div class="col-sm-4">
      <input class="form-control" placeholder="Your Name">
</div>
<div class="col-sm-4">
      <input class="form-control" placeholder="Your Email">
</div>
<div class="col-sm-4">
      <button class="btn">Subscribe</button>
</div>
</div>
</div> */}
            <div className="copyright">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="copy-text">
                      <p>© <a href="#">2021</a>. Bản quyền thuộc về NTC
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="copy-menu">
                      <NavLink to="/Article">Trang chủ</NavLink>
                      {/* <NavLink to="/Lienhe">Liên hệ</NavLink> */}
                      <NavLink to="/Dangnhap">Đăng nhập</NavLink>
                      <NavLink to="/Dangky">Đăng ký</NavLink>
                    </div>
                  </div>
                  <a href="#" className="to-top">Back to top</a>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </div>
    );
  }
}

export default Lienhe;