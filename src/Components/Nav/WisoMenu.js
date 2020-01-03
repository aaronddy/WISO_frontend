import React, { Component } from "react";
import "./Nav.scss";
import wisoLogo from "../../Images/logoImages/wiso_blue_1.png";
class WisoMenu extends Component {
  render() {
    return (
      <div className="tightAll">
        <div className="navigationGroup tightTwo">
          <a href="/">
            <img src={wisoLogo} alt="wiso_logo" className={"wisoLogoBlue"} />
          </a>
          <a href="#가사도우미">가사도우미</a>
          <a href="#이사">이사</a>
        </div>
        <div className="navigationGroup tightThree">
          <a href="#파트너">파트너</a>
          <a href="#고객센터">고객센터</a>
          <a href="#로그인">로그인</a>
        </div>
      </div>
    );
  }
}

export default WisoMenu;
