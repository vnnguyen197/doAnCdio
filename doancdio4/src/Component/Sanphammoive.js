import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";
class Sanphammoive extends Component {
  render() {
    return (
      <div>
        <article>
          {/* <div class="slide">
                  
                  <a href="#" onMouseOver="document.myImage.src=image2.src;"
                        onMouseOut="document.myImage.src=image1.src;">
                        <img name="myImage" src="Picture/gt2.jpg" width="700px" height="357px" />
                  </a>
            </div> */}
          <br />
          <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'courier,arial,helvetica' }}>Hàng thanh lý mới về</h1>
          <hr />
          <img src="Picture/logo1.jpg" width="700px" />
          <div className="box">
            <a className="a" href="ntc1.html"><img src="Picture/salon.jpeg" width="225px" height="200px" /></a>
            <div align="center">
              <a href="ntc1.html">L101021 – Bộ salon gỗ</a>
            </div>
            <p><del>2.900.000 VNĐ</del></p>
            <h4>1.500.000 VNĐ</h4>
            <div align="center">
              <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
            </div>
          </div>
          <div className="box">
            <a className="a" href="ntc2.html"><img src="Picture/banan.jpg" width="225px" height="200px" /></a><br />
            <div align="center">
              <a href="ntc2.html">S121021 – Bộ bàn ăn 4 ghế</a>
            </div>
            <p><del>2.450.000 VNĐ</del></p>
            <h4>2.050.000 VNĐ</h4>
            <div align="center">
              <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
            </div>
          </div>
          <div className="box">
            <a className="a" href="ntc3.html"><img src="Picture/ketivi.jpg" width="225px" height="200px" /></a>
            <div align="center">
              <a href="ntc3.html">H121021 – Kệ tivi xoan 1m8</a>
            </div>
            <p><del>1.700.000 VNĐ</del></p>
            <h4>950.000 VNĐ</h4>
            <div align="center">
              <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
            </div>
          </div>
          <br />
          <img src="Picture/LOGO2.jpg" width="700px" />
          <div className="box">
            <a className="a" href="xiu1.html"><img src="Picture/tudong.jpg" width="225px" height="200px" /></a><br />
            <div align="center">
              <a href="xiu1.html">L111021 – Tủ đông Alaska</a>
            </div>
            <p><del>12.200.000 VNĐ</del></p>
            <h4>6.500.000 VNĐ</h4>
            <div align="center">
              <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
            </div>
          </div>
          <div className="box">
            <a className="a" href="xiu2.html"><img src="Picture/quat.jpeg" width="225px" height="200px" /></a><br />
            <div align="center">
              <a href="xiu2.html">L111021 – Quạt hơi nước</a>
            </div>
            <p><del>3.400.000 VNĐ</del></p>
            <h4>1.500.000 VNĐ</h4>
            <div align="center">
              <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
            </div>
          </div>
          <div className="box">
            <a className="a" href="xiu3.html"><img src="Picture/maygiat.jpg" width="225px" height="200px" /></a><br />
            <div align="center">
              <a href="xiu3.html">H121021 – Máy giặt Samsung </a>
            </div>
            <p><del>12.100.000 VNĐ</del></p>
            <h4>6.250.000 VNĐ</h4>
            <div align="center">
              <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
            </div>
          </div><br />
          <br />
          <hr />


        </article>

        <footer className="mainfooter" style={{ bottom: -800, margin: 0, fontFamily: 'Arial, Helvetica, sans-serif', background: '#ffffff' }}>
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

export default Sanphammoive;