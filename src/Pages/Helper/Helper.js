import React, { Component } from "react";
import "./Helper.scss";
import DateSelector from "../../Components/DateSelector/DateSelector";
class Helper extends Component {
  render() {
    return (
      <div className="helpercontainer">
        <nav className="helperNavBar"></nav>
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
