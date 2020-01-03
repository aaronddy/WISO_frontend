import React, { Component } from "react";
import "./DateSelector.scss";
import DateModal from "../DateModal/DateModal";
// import axios from "axios";
class DateSelector extends Component {
  state = {
    OpenDate: false,
    defaultDateName: "날짜선택",
    changeName: false,
    sendingDate: {
      year: "",
      month: "",
      day: ""
    },
    isClicked: true
  };

  toParent = (date, month, year) => {
    this.setState({
      sendingDate: {
        year: year,
        month: month,
        day: date
      },
      isClicked: false
    });
  };

  openDateSelector = () => {
    this.setState({ OpenDate: !this.state.OpenDate });
  };
  closeDateSelector = () => {
    this.setState({ OpenDate: false });
  };

  render() {
    return (
      <>
        <div>
          <button className="daySelector" onClick={this.openDateSelector}>
            {this.state.isClicked
              ? this.state.defaultDateName
              : `${this.state.sendingDate.year}년 ${this.state.sendingDate.month}월 ${this.state.sendingDate.day}일`}
          </button>
          <DateModal
            toParent={this.toParent}
            // value={this.state.date}
            openSelector={this.state.OpenDate}
            closeSelector={this.closeDateSelector}
          />
        </div>
      </>
    );
  }
}

export default DateSelector;
