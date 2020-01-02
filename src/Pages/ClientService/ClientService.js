import React, { Component } from "react";
import "./ClientService.scss";
import faqImg from "../../Images/faq@2x.png";
import clientServiceCallIcon from "../../Images/phone.png";
import ClientServiceCategories from "./ClientServiceCategories";
import ClientFaq from "./ClientFaq";
import faqSections from "./FaqSectionsData";

class ServiceClinet extends Component {
  constructor() {
    super();
    this.state = {
      answerOpened: false
    };
  }

  render() {
    return (
      <div className="clientServiceContainer">
        <div className="helpBorder">
          <div className="clientService">고객센터</div>
          <div className="needHelp">
            도움이
            <br />
            필요하신가요?
          </div>
        </div>
        <div className="spaceBack" />
        <ClientServiceCategories />
        {faqSections.section.map((curr, index) => {
          return (
            <ClientFaq
              value={curr}
              key={index}
              stateValue={this.state.answerOpened}
            />
          );
        })}
        <div className="spaceBack" />
        <div>
          <div className="wisoClientService">미소 고객센터</div>
        </div>
        <div className="clientServiceBorder">
          <img
            src={faqImg}
            alt="고객센터 메인"
            className="clientServiceMainImg"
          />
          <div className="callWiso">
            <div className="infoWiso">
              오전 8시 - 오후 10시 (연중무휴)
              <br />
              서울특별시 성동구 아차산로 68, 11층
            </div>
            <button className="chatWithWiso">1:1 실시간 문의 (채팅)</button>
            <button className="callWithWiso">
              <img
                src={clientServiceCallIcon}
                alt="call"
                className="clientServiceCallIcon"
              />
              <div>1588-8808</div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceClinet;
