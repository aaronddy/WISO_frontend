import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Nav.scss";
import wisoLogo from "../../Images/logoImages/wiso_blue_1.png";
class WisoMenu extends Component {
  goToMovingBookingPage = () => {
    this.props.history.push("/MovingBooking");
  };

  goToMainPage = () => {
    this.props.history.push("/");
  };

  goToSignInPage = () => {
    this.props.history.push("/SignIn");
  };

  goToClientServie = () => {
    this.props.history.push("/ClientService");
  };
  render() {
    return (
      <div className="tightAll">
        <div className="navigationGroup tightTwo">
          <span onClick={this.goToMainPage}>
            <img src={wisoLogo} alt="wiso_logo" className={"wisoLogoBlue"} />
          </span>
          <span href="#가사도우미">가사도우미</span>
          <span onClick={this.goToMovingBookingPage} href="#이사">
            이사
          </span>
        </div>
        <div className="navigationGroup tightThree">
          <span href="#파트너">파트너</span>
          <span onClick={this.goToClientServie}>고객센터</span>
          <span onClick={this.goToSignInPage}>로그인</span>
        </div>
      </div>
    );
  }
}

export default withRouter(WisoMenu);
