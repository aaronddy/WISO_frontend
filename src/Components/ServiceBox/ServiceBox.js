import React from "react";
import "./ServiceBox.scss";

function ServiceBox() {
  return (
    <div className="lifeBox">
      <img
        className="boxImg"
        src={this.props.data.subImg}
        alt="미소 홈 서비스 이미지"
      />
      <div className="textWrap">
        <div className="mainTitle">{this.props.data.mainTitle}</div>
        <div className="subTitle">{this.props.data.subTitle}</div>
      </div>
    </div>
  );
}
export default ServiceBox;
