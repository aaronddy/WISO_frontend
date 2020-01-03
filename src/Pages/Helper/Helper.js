import React, { Component } from "react";
import "./Helper.scss";
import DateSelector from "../../Components/DateSelector/DateSelector";
import HelperLogo from "../../Images/logoImages/wiso_blue.png";
class Helper extends Component {
  render() {
    return (
      <div className="helpercontainer">
        <nav className="helperNavBarwrap">
          <div className="helperNavBar">
            <img
              className="helperNavBarImg"
              src={HelperLogo}
              alt="wisoLogo"
            ></img>
          </div>
        </nav>
        <main className="helperInnerContainer">
          <div className="contentTitle">
            <h2>1회 청소 예약</h2>
          </div>
          <div className="contentPara">
            <p>청소를 언제하고 싶으신가요?</p>
          </div>
        </main>
        <div className="helperBtn">
          <DateSelector />
        </div>
      </div>
    );
  }
}

export default Helper;
