import React from "react";
import { BarWave } from "react-cssfx-loading";
// import React, { Component, useState, useEffect } from 'react';
import './../Css/App.css';
import Firebase from "./fire";
import Article from './Article';
import Aside from './Aside';
import Header from './Header';
import Nav from './Nav';
import Lienhe from './Lienhe';
import Gioithieu from './Gioithieu';
import Dangky from './Dangky';
import Huongdanmuahang from './Huongdanmuahang';
import Sanphammoive from './Sanphammoive';
import NoithatGD from './NoithatGD';
import BanGhe from './BanGhe';
import Giuongngu from './Giuongngu';
import Salon from './Salon';
import Tulanh from './Tulanh';
import Dogiadung from './Dogiadung';
import Tuquanao from './Tuquanao';
import Quancafe from './Quancafe';
import Ntc1 from './Ntc1';
import Ntc2 from './Ntc2';
import Ntc3 from './Ntc3';
import Ntc4 from './Ntc4';
import Ntc5 from './Ntc5';
import Ntc6 from './Ntc6';
import Ntc7 from './Ntc7';
import Ntc8 from './Ntc8';
import Ntc9 from './Ntc9';
// import Trangchulogin from './Trangchulogin';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";


const Hero = ({ handleLogout }) => {
    return (
        <Router>
             <section className="hero">
                <header className="menu">
                    <button onClick={handleLogout} >Đăng xuất</button>
                </header>
            </section> 
            <Header></Header>
            <Nav></Nav>
            <Aside></Aside>
            <Route ex path="/Article" component={Article} />
            <Route ex path="/Lienhe" component={Lienhe} />
            <Route ex path="/Gioithieu" component={Gioithieu} />
            <Router ex path="/Dangky" component={Dangky} />
            <Route ex path="/Huongdanmuahang" component={Huongdanmuahang} />
            <Route ex path="/Sanphammoive" component={Sanphammoive} />
            <Route ex path="/NoithatGD" component={NoithatGD} />
            <Route ex path="/BanGhe" component={BanGhe} />
            <Route ex path="/Giuongngu" component={Giuongngu} />
            <Route ex path="/Salon" component={Salon} />
            <Route ex path="/Dogiadung" component={Dogiadung} />
            <Route ex path="/Tuquanao" component={Tuquanao} />
            <Route ex path="/Tulanh" component={Tulanh} />
            <Route ex path="/Quancafe" component={Quancafe} />
            <Route ex path="/Ntc1" component={Ntc1} />
            <Route ex path="/Ntc2" component={Ntc2} />
            <Route ex path="/Ntc3" component={Ntc3} />
            <Route ex path="/Ntc4" component={Ntc4} />
            <Route ex path="/Ntc5" component={Ntc5} />
            <Route ex path="/Ntc6" component={Ntc6} />
            <Route ex path="/Ntc7" component={Ntc7} />
            <Route ex path="/Ntc8" component={Ntc8} />
            <Route ex path="/Ntc9" component={Ntc9} />
        </Router>
    );
};
export default Hero;