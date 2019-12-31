import React from "react";
import "./ServiceBox.scss";

function ServiceBox(props) {
  return (
    <div className="lifeBox">
      <img
        className="boxImg"
        src={props.data.subImg}
        alt="미소 홈 서비스 이미지"
      />
      <div className="textWrap">
        <div className="mainTitle">{props.data.mainTitle}</div>
        <div className="subTitle">{props.data.subTitle}</div>
      </div>
    </div>
  );
}
export default ServiceBox;
