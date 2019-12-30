import React from "react";

import MainSlideData from "./MainSlideData";
import "./MainSlide.scss";
import ReservationBlue from "../ReservationBlue/ReservationBlue";

function MainSlide() {
  const slideImage = MainSlideData.map((current, index) => (
    <img className="titleImage" src={current.image} key={index} alt="" />
  ));
  return (
    <div className="mainSlideImageWrap">
      {slideImage}
      <div className="slideImgTextWrap">
        <div className="slideImgText">
          <div className="slideTitleText">미소</div>
          <div className="slideTitleText">일상의 변화</div>
          <div className="slideImgSubWrap">
            <div className="subText">모두의 일상이 행복하도록</div>
            <div className="subText">미소가 함께 할게요</div>
          </div>
          <ReservationBlue />
        </div>
      </div>
    </div>
  );
}
export default MainSlide;
