import React, { Component } from "react";

class ClientServiceCategories extends Component {
  render() {
    // console.log(this.props.value);
    return (
      <div className="clientServiceCategories">
        <a href="#home_clean" className="clientServiceCategory">
          가사도우미
        </a>
        <a href="#moving" className="clientServiceCategory">
          이사
        </a>
        <a href="#reservation_and_pay" className="clientServiceCategory">
          예약 및 결제
        </a>
        <a href="#personal_info_and_setting" className="clientServiceCategory">
          개인정보/환경설정
        </a>
      </div>
    );
  }
}

export default ClientServiceCategories;
