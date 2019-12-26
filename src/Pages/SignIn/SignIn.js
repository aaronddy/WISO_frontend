import React, { Component } from "react";
import "./SignIn.css";
import LogoBtn from "./LogoBtn";
import InputForm from "./InputForm";

class SignIn extends Component {
  socialLogin = url => {
    window.location.href = url;
  };

  render() {
    return (
      <div className="container">
        <h1 className="head">로그인</h1>
        <div className="member_border">
          <h2 className="quickLogin">간편 로그인</h2>
          <LogoBtn />
          <p className="or">
            <span className="or_span">또는</span>
          </p>
          <InputForm />
          <p className="no_mem">
            아직 미소 회원이 아니신가요?
            <a
              className="signUp"
              href="https://www.youtube.com/watch?v=UoT2oava9ns"
            >
              회원가입
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default SignIn;
