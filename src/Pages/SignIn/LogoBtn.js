import React, { Component } from "react";
import "./LogoBtn.scss";
import kakaoLogo from "../../Images/logoImages/kakao_logo copy.png";
import axios from "axios";
import { withRouter } from "react-router-dom";

class LogoBtn extends Component {
  loginWithKakao = e => {
    // e.preventDefault();
    // 로그인 창을 띄웁니다

    window.Kakao.init("0d465847605791705f3e366dd476a77e");
    window.Kakao.Auth.login({
      success: function(authObj) {
        const kakaoToken = authObj.access_token;
        axios({
          url: "http://10.58.7.197:8000/user/social_kakao_login",
          method: "post",
          headers: { Authorization: kakaoToken },
          data: {}
        }).then(res => {
          if (res.data) {
            localStorage.setItem("access_token", res.data.access_token);
          }
          // 연결이 됐을 시, then
          alert("로그인에 성공하였습니다");
          this.props.history.push("/");
          console.log(res.data);
        });
      },
      fail: function(err) {
        console.log(JSON.stringify(err));
      }
    });
  };

  render() {
    return (
      <div className="loginBtn">
        <button className="socialLogin" onClick={this.loginWithKakao}>
          <img className="loginIconKakao" src={kakaoLogo} alt="kakao_logo" />
        </button>
      </div>
    );
  }
}

export default withRouter(LogoBtn);
