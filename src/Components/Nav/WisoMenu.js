import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Nav.scss";
import wisoLogo from "../../Images/logoImages/wiso_blue_1.png";
class WisoMenu extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }
  goToMovingBookingPage = () => {
    this.props.history.push("/MovingBooking");
  };

  goToMainPage = () => {
    this.props.history.push("/");
  };

  goToMain = () => {
    localStorage.clear();
    this.setState({ active: false });
    this.props.history.push("/");
    // console.log(localStorage.getItem());
  };
  goToSignInPage = () => {
    this.props.history.push("/SignIn");
  };

  goToClientServie = () => {
    this.props.history.push("/ClientService");
  };

  componentDidMount() {
    const tokenState = () => {
      if (localStorage.getItem("access_token")) {
        this.setState({ active: !this.state.active });
      }
    };
    tokenState();
  }
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
          <span
            onClick={this.goToSignInPage}
            style={{ display: this.state.active ? "none" : null }}
          >
            로그인
          </span>
          <span
            onClick={this.goToMain}
            style={{ display: this.state.active ? null : "none" }}
          >
            로그아웃
          </span>
        </div>
      </div>
    );
  }
}

export default withRouter(WisoMenu);
