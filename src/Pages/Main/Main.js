import React from "react";
import "./Main.scss";
import Line from "../../Components/Line/Line";
import Daily from "../../Images/DailyImg.png";

function Main() {
  return (
    <>
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
          <div className="dailyRight">
            <img
              className="dailyDogPhoto"
              src={Daily}
              alt="강아지와 있는 이미지"
            />
          </div>
        </div>
        <Line />
      </div>
    </>
  );
}
export default Main;
