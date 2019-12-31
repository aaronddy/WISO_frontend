import React, { Component } from "react";
import "./LogoBtn.css";

class LogoBtn extends Component {
  render() {
    return (
      <div className="loginBtn">
        <button
          className="socialLogin"
          onClick={ev => {
            this.socialLogin("#네이버");
          }}
        >
          <img
            className="loginIconNaver"
            src="/images/naver_login_official.png"
            alt="naver_logo"
          />
        </button>
        <button
          className="socialLogin"
          onClick={ev => {
            this.socialLogin("#구글");
          }}
        >
          <img
            className="loginIconGoogle"
            src="/images/btn_google_signin.png"
            alt="구글 로그인"
          />
        </button>
      </div>
    );
  }
}

export default LogoBtn;
