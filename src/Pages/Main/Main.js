import React from "react";
import "./Main.scss";
import Line from "../../Components/Line/Line";
import Daily from "../../Images/DailyImg.png";
import Detail from "../../Components/Detail/Detail";
import ServiceBox from "../../Components/ServiceBox/ServiceBox";
import ServiceData from "../../Components/ServiceBox/ServiceData";
import Nav from "../../Components/Nav/Nav";
function Main() {
  return (
    <>
      <Nav />
      <div className="mainContainer">
        <div className="daily">
          <div className="dailyLeft">
            <div className="dailyText">
              일상에 필요한 모든것을 쉽고 간편하게 하여 당신의 일상을 더 좋게
              만들어 나갑니다.
            </div>
            <button className="dailyBtn">
              <div className="dailyBtnComment">자세히 보기</div>
              <img
                className="dailyArrow"
                src="https://miso.kr/common/brand.svg"
                alt="화살표 이미지"
              />
            </button>
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
        <Line />
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
            <ServiceBox data={current} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Main;
