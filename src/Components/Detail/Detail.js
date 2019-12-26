import React from "react";
import "./Detail.scss";

function Detail() {
  return (
    <button className="dailyBtn">
      <div className="dailyBtnComment">자세히 보기</div>
      <img
        className="dailyArrow"
        src="https://miso.kr/common/brand.svg"
        alt="화살표 이미지"
      />
    </button>
  );
}

export default Detail;
