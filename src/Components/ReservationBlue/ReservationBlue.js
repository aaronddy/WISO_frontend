import React, { Component } from "react";
import "./ReservationBlue.scss";

class ReservationBlue extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isBottom = window.scrollY > 900;
      if (isBottom !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  render() {
    return (
      <>
        <button
          className={
            this.state.scrolled
              ? "reservationBlue"
              : " reservationBlue scrolled"
          }
        >
          예약하기
        </button>
      </>
    );
  }
}
export default ReservationBlue;
