import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    NavLink
  } from "react-router-dom";
class Ntc1 extends Component {
    render() {
        return (
            <div>
                <article>
                    <br />
                    <div align="center" className="box1">
                        <img src="Picture/salon.jpeg" /><br />
                        <div align="center">
                            <NavLink to="/Ntc1">L101021 – Bộ salon gỗ</NavLink>
                            {/* <a href="/Ntc1.js">L101021 – Bộ salon gỗ</a> */}
                        </div>
                        <p><del>2.900.000 VNĐ</del></p>
                        <h4>1.500.000 VNĐ</h4>
                        <div align="center">
                            <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
                        </div>
                    </div>
                </article>
                <footer className="mainfooter" style={{ bottom: -700, margin: 0, fontFamily: 'Arial, Helvetica, sans-serif', background: '#ffffff' }}>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="copyright">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="copy-text">
                                            <p>© <a href="/">2021</a>. Bản quyền thuộc về NTC
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

export default Ntc1;