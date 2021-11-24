import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";
class Huongdanmuahang extends Component {
  render() {
    return (
      <div>
        <article>
          <br />
          <img src="Picture/Huongdan.png" width="700px" />
          <br />
          <a className="hd6">Các hình thức đặt hàng:</a> <br /><br />
          <div align="justify">
            <div style={{ marginLeft: '20px' }}> 1. Quý khách có thể mua hàng tại cửa hàng hoặc đặt hàng online qua giỏ
              hàng của website và nhân viên giao hàng sẽ check lại đơn hàng và chuyển hàng theo yêu cầu của quý
              khách hàng.<br /><br /></div>
            <div style={{ marginLeft: '20px' }}> 2. Call Hotline 24/24h: Quý khách gọi điện (kể cả trong và ngoài giờ
              hành chính, ngày lễ, chủ nhật....) đến số 039 3944376 ~ 034 4465816 để được tư vấn về sản phẩm, giá
              cả và đặt hàng<br /><br /></div>
            <div style={{ marginLeft: '20px' }}> 3. Đặt hàng qua facebook: <a style={{ color: '#00F' }} href="https://www.facebook.com/hades2510">https://www.facebook.com/hades2510</a>
              .Quý khách có thể để lại thông tin qua tin nhắn, nhân viên kinh doanh, kho hoặc nhân viên giao hàng
              sẽ liên lạc lại với quý khách để chốt đơn hàng và giao hàng theo yêu cầu.<br /><br /></div>
          </div>
          <a className="hd6">Thủ tục giao hàng</a> <br /><br />
          <div align="justify">
            <div style={{ marginLeft: '20px' }}> 1. Đối với khách hàng trong khu vực nội thành Đà Nẵng: Chúng tôi sẽ
              chuyển hàng miễn phí theo yêu cầu đặt hàng, quý khách chỉ phải trả tiền khi đã nhận được
              hàng.<br /><br /></div>
            <div style={{ marginLeft: '20px' }}> 2. Đối với khách hàng các tình ngoại thành và các tỉnh, thành phố trong
              cả nước, chúng tôi áp dụng hình thức chuyển hàng như sau:<br /><br /></div>
            <div style={{ marginLeft: '20px' }}> * Vận chuyển COD theo đường bưu điện: (thanh toán tiền sau khi nhân viên
              bưu điện giao hàng)
              Chúng tôi chuyển hàng theo yêu cầu đơn hàng đến bất cứ địa chỉ nào của khách hàng, nhân viên bưu
              điện sẽ chuyển hàng đến tận nơi quý khách yêu cầu và thu hộ giá trị đơn hàng khi quý khách nhận được
              hàng.(Quí khách hàng không cần đến bưu điện nhận hàng)
              <br /><br />
            </div>
          </div>
        </article>
        <footer className="mainfooter" style={{ bottom: -550, margin: 0, fontFamily: 'Arial, Helvetica, sans-serif', background: '#ffffff' }}>
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

export default Huongdanmuahang;