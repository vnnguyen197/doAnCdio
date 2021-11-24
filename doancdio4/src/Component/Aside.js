import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";

class Aside extends Component {
    render() {
        return (
            <aside>
                <div className="menu1">
                    <div class="loader">
                        <div class="outer"></div>
                        <div class="middle"></div>
                        <div class="inner"></div>
                    </div>
                    <h3>DANH MỤC SẢN PHẨM</h3>
                    <img src="Picture/icon2.png" />
                    <div align="justify">
                        <ul style={{ listStyleImage: 'url(Picture/1.png)' }}>
                           <li> <span><NavLink to="/NoithatGD">Thanh lý nội thất gia đình</NavLink></span></li>
                            <li><span><NavLink to="/BanGhe">Thanh lý bàn ghế</NavLink></span></li>
                            <li><span><NavLink to="/Giuongngu">Thanh lý giường ngủ</NavLink></span></li>
                            <li><span><NavLink to="/Salon">Thanh lý Salon gỗ</NavLink></span></li>
                            <li><span><NavLink to="/Tulanh">Thanh lý tủ lạnh cũ</NavLink></span></li>
                            <li><span><NavLink to="/Dogiadung">Thanh lý đồ gia dụng</NavLink></span></li>
                            <li><span><NavLink to="/Tuquanao">Thanh lý tủ quần áo</NavLink></span></li>
                            <li><span><NavLink to="/Quancafe">Thanh lý nội thất ở quán cafe</NavLink></span></li>
                        </ul>
                    </div>
                </div>
            </aside>
        );
    }
}

export default Aside;