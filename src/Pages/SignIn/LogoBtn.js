import React, { Component } from "react";
import "./LogoBtn.scss";
import kakaoLogo from "../../Images/logoImages/kakao_logo copy.png";
import axios from "axios";

// const ipAddress;

class LogoBtn extends Component {
  loginWithKakao = e => {
    // e.preventDefault();
    // 로그인 창을 띄웁니다
    window.Kakao.init("0d465847605791705f3e366dd476a77e");
    window.Kakao.Auth.login({
      success: function(authObj) {
        console.log(JSON.stringify(authObj));
        axios
          .post("/", {
            access_token: JSON.stringify(authObj)
          })
          .then(res => {
            if (res.data) {
              localStorage.setItem("access_token", res.data.access_token);
            }
            // 연결이 됐을 시, then
            this.props.history.push("/");
            alert("로그인에 성공하였습니다");
            console.log(res.data);
          })
          .catch(err => {
            // 연결이 안 됐을 시, catch
            console.log(err.response);
            alert("카카오 로그인에 실패하였습니다.");
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

export default LogoBtn;
