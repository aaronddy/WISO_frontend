import React, { Component } from "react";
import "./LogoBtn.scss";
import kakaoLogo from "../../Images/logoImages/kakaolink_medium.png";
import naverLogo from "../../Images/logoImages/naver_logo.png";
import googleLogo from "../../Images/logoImages/g-logo.png";
import axios from "axios";
import { withRouter } from "react-router-dom";

class LogoBtn extends Component {
  abc = () => {
    console.log(this.props);
  };

  loginWithKakao = e => {
    window.Kakao.init("0d465847605791705f3e366dd476a77e");
    window.Kakao.Auth.login({
      success: authObj => {
        // console.log(this.props.history);
        // this.props.history.push("/");
        const kakaoToken = authObj.access_token;
        axios({
          url: "http://54.180.158.181:8000/user/kakaologin",
          method: "post",
          headers: { Authorization: kakaoToken },
          data: {}
        }).then(res => {
          if (res.data) {
            localStorage.setItem("access_token", res.data.access_token);
            console.log(res.data.access_token);
          }
          // 연결이 됐을 시, then
          alert("로그인에 성공하였습니다");
          // this.goToMainPage;
          console.log(this.props);
          this.props.history.push("/");
        });
      },
      fail: function(err) {
        console.log(JSON.stringify(err));
        alert("로그인에 실패하였습니다");
      }
    });
  };

  // goToMainPage = () => {
  //   this.props.history.push("/");
  // };
  render() {
    this.abc();
    return (
      <div className="loginBtn">
        <button className="socialLogin" onClick={this.loginWithKakao}>
          <img className="loginIcon" src={kakaoLogo} alt="kakao_logo" />
          <img className="loginIcon" src={naverLogo} alt="naver_logo" />
          <img className="loginIcon" src={googleLogo} alt="google_logo" />
        </button>
      </div>
    );
  }
}

export default withRouter(LogoBtn);
