import React, { Component } from 'react';

const Hero = ({ handleLogout }) => {
        return (
          <header>
          <div className="menu">
            {/* <NavLink to="/Dangky" ><button> Đăng ký</button></NavLink> */}
            {/* <NavLink to="/Dangnhap"><button> Đăng nhập</button></NavLink> */}
            <button onClick={handleLogout} >Đăng xuất</button>
          </div>
        </header>
        );
        }

export default Hero;