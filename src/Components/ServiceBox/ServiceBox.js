import React from "react";
import "./ServiceBox.scss";

class ServiceBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainTitle: this.props.data.mainTitle,
      subTitle: this.props.data.subTitle,
      subImg: this.props.data.subImg
    };
  }
  render() {
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
}
export default ServiceBox;
