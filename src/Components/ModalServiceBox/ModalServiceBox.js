import React, { Component } from "react";
import "./ModalServiceBox.scss";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";

class ModalServiceBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: this.props.moving
    };
  }
  render() {
    return (
      <>
        {/* <Link to="/MovingBooking"> */}
        <div
          onClick={() => this.props.clickHandler(this.props.data.mainTitle)}
          className="lifeBox"
        >
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
        {/* </Link> */}
      </>
    );
  }
}
export default ModalServiceBox;

// import React from "react";
// import "./ServiceBox.scss";

// class ServiceBox {
//   return (
//     <a
//       onClick={() => props.serviceHandler(props.data.mainTitle)}
//       className="lifeBox"
//       href={props.link}
//     >
//       <img
//         className="boxImg"
//         src={props.data.subImg}
//         alt="미소 홈 서비스 이미지"
//       />
//       <div className="textWrap">
//         <div className="mainTitle">{props.data.mainTitle}</div>
//         <div className="subTitle">{props.data.subTitle}</div>
//       </div>
//     </a>
//   );
// }
// export default ServiceBox;
