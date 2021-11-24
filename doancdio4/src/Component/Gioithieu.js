import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    NavLink
  } from "react-router-dom";


class Gioithieu extends Component {
    render() {
        return (
            <div>
                <article>
                    <br />
                    <div id="content">
                        <ul id="slider">
                            <li className="slide showing"><img src="Picture/gt3.jpg" width="620px" height="240px" /></li>
                            <li className="slide"><img src="Picture/gt2.jpg" width="620px" height="240px" /></li>
                            <li className="slide"><img src="Picture/gt4.jpeg" width="620px" height="240px" /></li>
                        </ul>
                    </div>
                    <br />


                    <img src="Picture/gioithieu.png" width="700px" />
                    <br />
                    <br />
                    <div align="justify">
                        <div style={{ marginLeft: '20px' }}> <a href="index.html" className="hd1">Shop Thanh Lý Thua Mua Đồ Dùng Cũ
                            NTC</a> gửi tới Quý khách hàng lời chúc sức khỏe và lời chào trân trọng nhất. Chúng tôi xin chân
                            thành cảm ơn Quý khách hàng đã tin tưởng sử dụng các sản phẩm của chúng tôi trong thời gian vừa qua.
                        </div>
                        <br />
                        <div style={{ marginLeft: '20px' }}> <a className="hd5">Với kinh nghiệm hơn 5 năm về lĩnh vực đồ cũ tại thành phố
                            Đà Nẵng, chúng tôi đêm đến cho khách hàng những sản phẩm tốt nhất và chất lượng nhất với nhiều
                            mẫu mã thuộc nhiều nghành nghề khác nhau. Ngoài ra cửa hàng còn thu mua đồ cũ qua sử dụng với
                            gia cao của quán ăn, nhà hàng, quán cafe, quán nhậu, đồ nội thất gia đình với giá cạnh tranh.
                            Bạn có thể tìm đến sản phẩm của chúng thông thông qua website thanhlydocuntc.com hoặc đến trực
                            tiếp kho đều được, mọi thông tin của bạn sẽ được tiếp nhận và phản hồi sớm nhất.
                            <br />
                            <br />
                        </a><div style={{ marginLeft: '20px' }}><a className="hd5"> </a><a className="hd4">Các Sản phẩm chúng tôi đang phân phối trên thị
                            trường hiện nay luôn đáp ứng các tiêu chí:</a></div><br />
                        </div>
                        <div style={{ marginLeft: '200px' }}> - Giá cả luôn rẻ nhất thị trường.<br />
                            - Sản phẩm luôn đảm bảo chất lượng chính hãng;<br />
                            - Thông tin sản phẩm rõ ràng, minh bạch, tư vấn cụ thể từng loại hàng;
                        </div>
                    </div></article>
                <footer className="mainfooter" style={{ margin: 0, fontFamily: 'Arial, Helvetica, sans-serif', background: '#ffffff' }}>
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

export default Gioithieu;