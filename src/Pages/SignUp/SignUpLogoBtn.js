import React from "react";
import "./SignUpLogoBtn.scss";
import naver from "../../Images/logoImages/naver.png";
import kakao from "../../Images/logoImages/kakao.png";

class LogoBtn extends React.Component {
  socialLogin = url => {
    window.location.href = url;
  };
  render() {
    return (
      <div className="container">
        <div className="loginBtn">
          <div className="runNaver">
            <button
              className="socialLogin"
              onClick={ev => {
                this.socialLogin(
                  "https://nid.naver.com/nidlogin.login?oauth_token=ND09jwva4nhLi9vtET&consumer_key=sZ5XSvE7Gy3C73cBvDW_&logintp=oauth2&nurl=https%3A%2F%2Fnid.naver.com%2Foauth2.0%2Fauthorize%3Fresponse_type%3Dtoken%26state%3Dabbfe3b4-e734-476b-91e1-fa736dfbceda%26client_id%3DsZ5XSvE7Gy3C73cBvDW_%26redirect_uri%3Dhttps%253A%252F%252Fwww.spacecloud.kr%252Fauth%252Fcallback%26locale%3Dko_KR%26inapp_view%3D%26oauth_os%3D&locale=ko_KR&inapp_view=&svctype=1"
                );
              }}
            >
              <img className="setLogin" src={naver} alt="naver_logo" />
              네이버로 시작하기
            </button>
          </div>
          <div className="runKakao">
            <button
              className="socialLogin"
              onClick={ev => {
                this.socialLogin(
                  "https://accounts.kakao.com/login?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fredirect_uri%3Dkakaojs%26response_type%3Dcode%26state%3D95jpz4vq913xr6afnwru%26proxy%3DeasyXDM_Kakao_wkqqz73fd8b_provider%26ka%3Dsdk%252F1.36.1%2520os%252Fjavascript%2520lang%252Fko-KR%2520device%252FLinux_x86_64%2520origin%252Fhttps%25253A%25252F%25252Fwww.spacecloud.kr%26origin%3Dhttps%253A%252F%252Fwww.spacecloud.kr%26client_id%3D5ac357ee7e43a11551504a15ebd80061"
                );
              }}
            >
              <img className="setLogin" src={kakao} alt="kakao_logo" />
              카카오로 시작하기
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LogoBtn;
