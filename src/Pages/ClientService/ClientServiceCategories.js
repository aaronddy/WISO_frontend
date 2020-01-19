import React, { Component } from "react";

class ClientServiceCategories extends Component {
  state = {
    active: 1
  };
  clickHandler = id => {
    this.setState({ active: id });
    console.log(id);
  };
  render() {
    // console.log(this.props.value);
    return (
      <div className="clientServiceCategories">
        <a
          href="#home_clean"
          className={
            this.state.active === 1
              ? "clientServiceCategory active"
              : "clientServiceCategory"
          }
          onClick={() => {
            this.clickHandler(1);
            this.props.takeState(1);
          }}
        >
          가사도우미
        </a>
        <a
          href="#moving"
          className={
            this.state.active === 2
              ? "clientServiceCategory active"
              : "clientServiceCategory"
          }
          onClick={() => {
            this.clickHandler(2);
            this.props.takeState(2);
          }}
        >
          이사
        </a>
        <a
          href="#reservation_and_pay"
          className={
            this.state.active === 3
              ? "clientServiceCategory active"
              : "clientServiceCategory"
          }
          onClick={() => {
            this.clickHandler(3);
            this.props.takeState(3);
          }}
        >
          예약 및 결제
        </a>
        <a
          href="#personal_info_and_setting"
          className={
            this.state.active === 4
              ? "clientServiceCategory active"
              : "clientServiceCategory"
          }
          onClick={() => {
            this.clickHandler(4);
            this.props.takeState(4);
          }}
        >
          개인정보/환경설정
        </a>
      </div>
    );
  }
}

export default ClientServiceCategories;
