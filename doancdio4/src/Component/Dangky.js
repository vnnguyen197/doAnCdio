import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";
class Dangky extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submitForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
        fields["username"] = "";
        fields["emailid"] = "";
        fields["password"] = "";
        fields["repassword"] = "";
        this.setState({fields:fields});
        alert("details saved successfully!!!!");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }


    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

  
    
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (!fields["repassword"]) {
      formIsValid = false;
      errors["repassword"] = "*Please enter correct password.";
    }


    this.setState({
      errors: errors
    });
    return formIsValid;


  }
  render() {
    return (
      <div>
        <article style={{ float: 'left' }}>
          <br />
          <img src="Picture/Lienhe.png" width="700px" />
          <br />
          <br />
          <div className="hi">
            <h1>ĐĂNG KÝ</h1>
            <form onSubmit= {this.submitForm} >
              <div><a>Họ Và Tên*</a><br />
              <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.username}</div>
              </div><br />
              <div><a>Email*</a><br />
              <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.emailid}</div>
              </div><br />
              <div><a>Mật Khẩu</a><br />
              <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>
              </div><br />
              <div><a>Nhập Lại Mật Khẩu</a><br />
              <input type="password" name="repassword" value={this.state.fields.repassword} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.repassword}</div>
              </div><br />
              <div className="ha"><input type="radio" id="gioi" defaultValue="Nam" />&nbsp;Nam
                <input type="radio" id="gioi" defaultValue="Nữ" />&nbsp;Nữ
                <div className="val_error" id="gioi_error" />
              </div>
              <div className="hu"><button type="submit" value="SignUp">Đăng ký</button></div>
              <br /><br />
            </form>
          </div>
          <br clear="both" />         
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
                    <h3 style={{ color: 'black' }}>HỖ TRỢ TRỰC TUYẾN</h3>
                    {/* <img src="./Picture/icon2.png" /> */}
                    <p>Nhân viên: Văn Nguyện</p>
                    <a href="https://www.facebook.com/v.nnguyen11"><img src="./Picture/ad1.jpg" width="180px" height="140px" /></a>
                    <br />
                    <br />
                    <p> Điện Thoại : 034 4465816</p>
                    <hr />
                    {/* <p> Văn Nguyện</p>
                <a href="https://www.facebook.com/v.nnguyen11"><img
                            src="./Picture/ad2.jpg" width="110px" height="150px" /></a>
                <p> Điện Thoại : 034 4465816</p> */}
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
                      <NavLink to="/Lienhe">Liên hệ</NavLink>
                      <NavLink to="/Dangnhap">Đăng nhập</NavLink>
                      {/* <NavLink to="/Dangky">Đăng ký</NavLink> */}
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

export default Dangky;