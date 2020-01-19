import React, { Component } from "react";
import ReactTransitionGroup from "react-addons-css-transition-group";
import "./InnerModal.scss";
import InnerClose from "../../Images/close.png";
import { Link } from "react-router-dom";

class InnerModal extends Component {
  render() {
    return (
      <>
        {this.props.ko ? (
          <ReactTransitionGroup
            transitionName={"Modal-anim"}
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            <div className="innerModal-overlay">
              <div className="innerModal">
                <button
                  className="innerModalBtn"
                  onClick={this.props.innerModalClose}
                >
                  <img src={InnerClose} alt="close"></img>
                </button>
                <div className="innerModalContentWrap">
                  <div className="innerModalContentInner">
                    <div className="innerModalTopTitle">가사도우미 예약</div>
                    <p className="innerModalContent">
                      원하시는 서비스를 선택해주세요.
                    </p>
                    <Link to="/Helper">
                      <button className="innerOneday">1회 예약</button>
                      <button className="innerWeek">정기 예약</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ReactTransitionGroup>
        ) : (
          <ReactTransitionGroup
            transitionName={"Modal-anim"}
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          />
        )}
      </>
    );
  }
}

export default InnerModal;
