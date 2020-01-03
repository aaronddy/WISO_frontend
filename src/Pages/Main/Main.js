import React, { Component } from "react";
import "./Main.scss";
import Daily from "../../Images/images/DailyImg.png";
import Line from "../../Components/Line/Line";
import MainSlide from "../../Components/MainSlide/MainSlide";
import Detail from "../../Components/Detail/Detail";
import ServiceBox from "../../Components/ServiceBox/ServiceBox";
import ServiceData from "../../Components/ServiceBox/ServiceData";
import Footer from "../../Components/Footer/Footer";
import WithMiso from "../../Pages/WithMiso/WithMiso";
import Nav from "../../Components/Nav/Nav";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: ""
    };
  }
  clickHandler = value => {
    //목요일 if ,else에 들어갈 router 연결
    if (value === "가사도우미") {
      this.setState({ link: "https://www.miso.kr/homeclean" });
    } else if (value === "이사") {
      this.setState({ link: "https://www.miso.kr/moving" });
    }
  };
  render() {
    return (
      <div>
        <div>
          <Nav />
          <div className="mainContainer">
            <MainSlide />
            <div className="daily">
              <div className="dailyLeft">
                <div className="dailyText">
                  일상에 필요한 모든것을 쉽고 간편하게 하여 당신의 일상을 더
                  좋게 만들어 나갑니다.
                </div>
                <Detail />
              </div>
              <div className="dailyRight">
                <img
                  className="dailyDogPhoto"
                  src={Daily}
                  alt="강아지와 있는 이미지"
                />
              </div>
            </div>
            <Line />
            <div className="homeServiceWrapper">
              <div className="lifeTitle">
                <div className="lifeText">생활의 모든 것, 미소 홈서비스</div>
                <div className="lifeHiddenWrap">
                  <div className="lifeHidden">생활의 모든 것,</div>
                  <div className="lifeHidden">미소 홈 서비스</div>
                </div>
              </div>
              <div className="HomeImageWrapper">
                {ServiceData.map((current, index) => (
                  <ServiceBox
                    serviceHandler={this.clickHandler}
                    data={current}
                    key={index}
                    link={this.state.link}
                  />
                ))}
              </div>
            </div>
          </div>
          <WithMiso />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
