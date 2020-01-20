import React, { Component } from "react";
import "./ClientService.scss";
import faqImg from "../../Images/faq@2x.png";
import clientServiceCallIcon from "../../Images/phone.png";
import ClientServiceCategories from "./ClientServiceCategories";
import FaqBox from "./FaqBox";
import FnqData from "./FnqData";
import Nav from "../../Components/NavBlue/Nav";
import Footer from "../../Components/Footer/Footer";

class clientService extends Component {
  constructor() {
    super();
    this.state = {
      number: 1
    };
  }

  takeState = id => {
    this.setState({
      number: id
    });
    console.log(this.state.number);
  };

  list = () => {
    if (this.state.number === 1) {
      return FnqData.section1.articles.map((curr, idx) => (
        <FaqBox article={curr} key={idx} stateNum={this.state.number} />
      ));
    } else if (this.state.number === 2) {
      return FnqData.section2.articles.map((curr, idx) => (
        <FaqBox article={curr} key={idx} stateNum={this.state.number} />
      ));
    } else if (this.state.number === 3) {
      return FnqData.section3.articles.map((curr, idx) => (
        <FaqBox article={curr} key={idx} stateNum={this.state.number} />
      ));
    } else if (this.state.number === 4) {
      return FnqData.section4.articles.map((curr, idx) => (
        <FaqBox article={curr} key={idx} stateNum={this.state.number} />
      ));
    }
  };
  render() {
    return (
      <>
        <Nav />
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
          <ClientServiceCategories takeState={this.takeState} />
          {this.list()}
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
        <Footer />
      </>
    );
  }
}

export default clientService;
