import { BarWave } from "react-cssfx-loading";
import React, { Component, useState, useEffect } from 'react';
import './../Css/App.css';
import Firebase from "./fire";
import Article from './Article';
import Aside from './Aside';
import Header from './Header';
import Nav from './Nav';
import Lienhe from './Lienhe';
import Gioithieu from './Gioithieu';
import Dangky from './Dangky';
import Dangnhap from './Dangnhap';
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
import Dangxuat from './Dangxuat';
import Ntc1 from './Ntc1';
import Ntc2 from './Ntc2';
import Ntc3 from './Ntc3';
import Ntc4 from './Ntc4';
import Ntc5 from './Ntc5';
import Ntc6 from './Ntc6';
import Ntc7 from './Ntc7';
import Ntc8 from './Ntc8';
import Ntc9 from './Ntc9';
import Trangchulogin from './Trangchulogin';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    Firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    Firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  }

  const handleLogout = () => {
    Firebase.auth().signOut();
  };

  const authListener = () => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
      <div className="App">
        {user ? (
          <Trangchulogin
            handleLogout={handleLogout}/>
        ) : (
          <Dangnhap
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
          )}   
          {/* <Dangxuat   handleLogout={handleLogout}  /> */}
          {/* <Header handleLogout={handleLogout}></Header> */}
       <div>
         
        {/* {/* <Footer></Footer>  
         <Route ex path="/Article" component={Article} />
        <Route ex path="/Lienhe" component={Lienhe} />
        <Route ex path="/Gioithieu" component={Gioithieu} />
        <Route ex path="/Dangky" component={Dangky} /> 
         <Route ex path="/Dangnhap" component={Dangnhap}
        // email={email}
        // setEmail={setEmail}
        // password={password}
        // setPassword={setPassword}
        // handleLogin={handleLogin}
        // handleSignup={handleSignup}
        // hasAccount={hasAccount}
        // setHasAccount={setHasAccount}
        // emailError={emailError}
        // passwordError={passwordError}
        /> 
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
         <Demo></Demo> */}  
         </div> 
      </div>
  );
}

export default App;
