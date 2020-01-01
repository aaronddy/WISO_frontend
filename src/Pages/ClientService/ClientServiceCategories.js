import React, { Component } from "react";

class ClientServiceCategories extends Component {
  render() {
    return (
      <div className="clientServiceCategories">
        <a href="#가사도우미" className="clientServiceCategory">
          가사도우미
        </a>
        <a href="#이사" className="clientServiceCategory">
          이사
        </a>
        <a href="#예약 및 결제" className="clientServiceCategory">
          예약 및 결제
        </a>
        <a href="#개인정보/환경설정" className="clientServiceCategory">
          개인정보/환경설정
        </a>
      </div>
    );
  }
}

export default ClientServiceCategories;
