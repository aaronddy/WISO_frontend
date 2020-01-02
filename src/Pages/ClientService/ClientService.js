import React, { Component } from "react";
import "./ClientService.scss";

class ServiceClinet extends Component {
  render() {
    return (
      <div>
        <div className="serviceClientContainer">
          <div className="serviceCenter">고객센터</div>
          <div className="needHlep">
            도움이
            <br />
            필요하신가요?
          </div>
        </div>
        <div className="spaceBack" />
        <div className="categoriesContainer">
          <a href="#가사도우미" className="categoriesButton">
            가사도우미
          </a>
          <a href="#이사" className="categoriesButton">
            이사
          </a>
          <a href="#예약 및 결제" className="categoriesButton">
            예약 및 결제
          </a>
          <a href="#개인정보/환경설정" className="categoriesButton">
            개인정보/환경설정
          </a>
        </div>
        <div className="faqContainer">
          <div classNme="faqSectionTitle">서비스 이용</div>
          <div>
            <div>
              <button>Q. 이사 종류는 어떤 게 있나요?</button>
              <button className="clickArrow"></button>
            </div>
          </div>
        </div>
        <div className="spaceBack" />
        <div>
          <div>미소 고객센터</div>
        </div>
        <div>
          <img src="/images/cs_main.png" alt="고객센터 메인" />
        </div>
      </div>
    );
  }
}

export default ServiceClinet;
