import React, { Component } from "react";
import ModalServiceBox from "../ModalServiceBox/ModalServiceBox";
import ServiceData from "../../Components/ServiceBox/ServiceData";
import "./Modal.scss";
import CloseImg from "../../Images/close.png";
import ReactTransitionGroup from "react-addons-css-transition-group";
import InnerModal from "../InnerModal/InnerModal";
import { withRouter } from "react-router-dom";

// 27열 모달 윈도우 클릭 시 화면 닫기 삭제
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cal: false,
      innerModalOpen: false
    };
  }

  openModalTwo = () => {
    this.setState({ innerModalOpen: true });
  };

  closeModalTwo = () => {
    this.setState({ innerModalOpen: false });
  };

  modalHandler = e => {
    if (e === "가사도우미") {
      this.openModalTwo();
      console.log(this.state.cal);
    } else if (e === "이사") {
      this.props.history.push("/MovingBooking");
    }
  };
  render() {
    return (
      <>
        {this.props.isOpen ? (
          <ReactTransitionGroup
            transitionName={"Modal-anim"}
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            <div className="Modal-overlay">
              <div className="Modal">
                <button onClick={this.props.close} className="modalCloseButton">
                  <img
                    className="closeButtonImage"
                    src={CloseImg}
                    alt="closeImg"
                  ></img>
                </button>
                <div className="modalContentWrap">
                  <div className="modalContentInner">
                    <div className="modalTopTitle">예약하기</div>
                    <div className="serviceContent">
                      {ServiceData.map((current, index) => (
                        <ModalServiceBox
                          onClick={this.openModalTwo}
                          clickHandler={this.modalHandler}
                          data={current}
                          key={index}
                        />
                      ))}
                      <InnerModal
                        ko={this.state.innerModalOpen}
                        innerModalClose={this.closeModalTwo}
                      />
                    </div>
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
export default withRouter(Modal);
