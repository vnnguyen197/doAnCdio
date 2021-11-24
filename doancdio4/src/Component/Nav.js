import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";
class Nav extends Component {
    render() {
        return (
            <nav>
            <ul className="bang">
              <li><NavLink to="/Article">TRANG CHỦ</NavLink></li>
              <li><NavLink to="/Gioithieu">GIỚI THIỆU</NavLink></li>
              <li><NavLink to="/Sanphammoive">HÀNG THANH LÝ MỚI VỀ</NavLink></li>
              <li><NavLink to="/Huongdanmuahang">HƯỚNG DẪN MUA HÀNG</NavLink></li>
              <li><NavLink to="/Lienhe">LIÊN HỆ</NavLink></li>
            </ul>
          </nav>
          
        );
    }
}

export default Nav;