import React, { Component } from "react";
import "./ReservationBlue.scss";
import Modal from "../Modals/Modal";
// import InnerModal from "../InnerModal/InnerModal";

class ReservationBlue extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
      isModalOpen: false,
      clicked: false
      // innerModalOpen: false
    };
  }
  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const isBottom = window.scrollY > 900;
    if (isBottom !== true) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  render() {
    return (
      <>
        <button
          className={
            this.state.scrolled
              ? "reservationBlue"
              : " reservationBlue scrolled"
          }
          onClick={this.openModal}
        >
          예약하기
        </button>
        <Modal isOpen={this.state.isModalOpen} close={this.closeModal} />
      </>
    );
  }
}
export default ReservationBlue;

// <Modal isOpen={this.state.isModalOpen} close={this.closeModal} />;
