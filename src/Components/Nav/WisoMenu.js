import React, { Component } from "react";
import "./Nav.scss";

class WisoMenu extends Component {
  render() {
    return (
      <div className="tightAll">
        <div className="tightTwo">
          <a className="menuList" href="#가사도우미">
            가사도우미
          </a>
          <a className="menuList" href="#이사">
            이사
          </a>
        </div>
        <div className="tightThree">
          <a className="menuList" href="#파트너">
            파트너
          </a>
          <a className="menuList" href="#고객센터">
            고객센터
          </a>
          <a className="menuList" href="#로그인">
            로그인
          </a>
        </div>
      </div>
    );
  }
}

export default WisoMenu;
