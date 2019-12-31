import React, { Component } from "react";
import "./LogoBtn.css";
import kakaoLogo from "../../Images/logoImages/kakao_logo copy.png";

class LogoBtn extends Component {
  render() {
    return (
      <div className="loginBtn">
        <button
          className="socialLogin"
          onClick={ev => {
            this.socialLogin("카카오");
          }}
        >
          <img className="loginIconKakao" src={kakaoLogo} alt="kakao_logo" />
        </button>
        {/* <button
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
        </button> */}
      </div>
    );
  }
}

export default LogoBtn;
