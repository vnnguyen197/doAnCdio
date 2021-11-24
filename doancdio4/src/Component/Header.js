import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";
class Header extends Component {
    render() {
        return (
          <header>
          <img src="Picture/Logo.png" width="100%" height="450px" />
          <div className="menu">
            {/* <NavLink to="/Dangky" ><button> Đăng ký</button></NavLink> */}
            {/* <NavLink to="/Dangnhap"><button> Đăng nhập</button></NavLink> */}
          </div>
        </header>
        );
    }
}

export default Header;