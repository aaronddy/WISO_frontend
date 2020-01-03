import React, { Component } from "react";
import SelectOption from "../MovingBooking/SelectOption";
import MovingBookingComp from "../MovingBooking/MovingBookingComp";
import "./HomeCleanBookingPage.scss";
import { withRouter } from "react-router-dom";

export class HomeCleanBookingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: [],
      time1: false,
      time2: false,
      time3: false,
      morning: false,
      noon: false,
      service_duration_id: 0,
      starting_time_id: 0
    };
  }
  componentDidUpdate = () => {
    console.table(this.state);
  };

  handler = e => {
    const text = e.target.innerText;
    const state = (() => {
      switch (text) {
        case "3시간":
          return {
            time1: true,
            time2: false,
            time3: false
          };
        case "4시간":
          return {
            time1: false,
            time2: true,
            time3: false
          };
        case "8시간":
          return {
            time1: false,
            time2: false,
            time3: true
          };
        default:
          return {
            time1: false,
            time2: false,
            time3: false
          };
      }
    })();
    this.setState(state, () => {
      const { time1, time2, time3, noon } = this.state;
      const service_duration_id = (() => {
        if (time1) return 1;
        if (time2) return 2;
        if (time3) return 3;
        return 0;
      })();
      this.setState({
        service_duration_id
      });
    });
  };

  // ArrayId = () => {
  //   if (this.state.time.includes("2")) {
  //     this.state.time.splice(this.state.time.indexOf("2"), 1);
  //   }
  //   if (this.state.time.includes("3")) {
  //     this.state.time.splice(this.state.time.indexOf("3"), 1);
  //   }
  //   this.setState({
  //     time: this.state.time.concat(["1"])
  //   });
  // };

  dayHandle = e => {
    const text = e.target.innerText;
    const state = (() => {
      switch (text) {
        case "오전 9시":
          return {
            morning: true,
            noon: false
          };
        case "오후 2시":
          return {
            morning: false,
            noon: true
          };
        case "오전 10시":
          return {
            morning: true,
            noon: false
          };
        default:
          return {
            morning: false,
            noon: false
          };
      }
    })();
    this.setState(state, () => {
      const { time1, time2, time3, noon } = this.state;
      const starting_time_id = (() => {
        if (time3) return 0;
        if (noon) return 3;
        if (time1) return 2;
        if (time2) return 1;
        return 0;
      })();
      this.setState({
        starting_time_id
      });
    });
  };

  duration = () => {
    if (this.state.morning && this.state.time1) {
      return "오전 10시~오후 1시";
    }
    if (this.state.noon && this.state.time1) {
      return "오후 2시~오후 5시";
    }
    if (this.state.morning && this.state.time2) {
      return "오전 9시~오후 1시";
    }
    if (this.state.noon && this.state.time2) {
      return "오후 2시~오후 6시";
    }
    if (this.state.time3) {
      return "오전 9시~오후 5시";
    }
  };

  Bookingdone = () => {
    //   this.setState(this.state.time1? {time1: "3시간"}: this.state.morning? {morning:"오전10시"})
    // if (this.state.time1 === true && ) {
    // }
    // if (this.state.morning === "2") {
    // }
    // this.setState({
    //   time: {
    //     service_duration_id: this.state.time1,
    //     starting_time_id: this.state.morning
    //   }
    // });
    const { starting_time_id, service_duration_id } = this.state;
    console.log(starting_time_id, service_duration_id);
    if (!starting_time_id || !service_duration_id) return false;
    fetch("http://18.191.213.70:8080/move", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        starting_time_id,
        service_duration_id
      })
    })
      .then(res => res.json())
      .then(res => {
        alert("예약하신 정보는 마이 페이지에서 확인 가능합니다.");
        this.goToMain();
      });
    // if (this.state.time1 === true) {
    //   this.setState({ time1: "1" });
    // }
    // if (this.state.noon === true) {
    //   this.setState({ noon: "3" });
    // }
    // this.setState({
    //   time: {
    //     service_duration_id: this.state.time1,
    //     starting_time_id: this.state.noon
    //   }
    // });
    //   if (this.state.time1 === true && this.state.noon === true) {
    //     fetch("http://18.191.213.70:8080/move", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({
    //         starting_time_id: this.state.noon,
    //         service_duration_id: this.state.time1
    //       })
    //     })
    //       .then(res => res.json())
    //       .then(res => {
    //         alert("예약하신 정보는 마이 페이지에서 확인 가능합니다.");
    //         this.goToMain();
    //       });
    //   }

    //   // this.goToMain.bind(this);
    //   // if (this.state.time2 === true) {
    //   //   this.setState({ time2: "2" });
    //   // }
    //   // if (this.state.morning === true) {
    //   //   this.setState({ morning: "1" });
    //   // }
    //   // this.setState({
    //   //   time: {
    //   //     service_duration_id: this.state.time2,
    //   //     starting_time_id: this.state.morning
    //   //   }
    //   // });
    //   if (this.state.time1 === true && this.state.morning === true) {
    //     fetch("http://18.191.213.70:8080/move", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({
    //         starting_time_id: this.state.morning,
    //         service_duration_id: this.state.time2
    //       })
    //     })
    //       .then(res => res.json())
    //       .then(res => {
    //         alert("예약하신 정보는 마이 페이지에서 확인 가능합니다.");
    //         this.goToMain();
    //       });
    //   }
    //   // if (this.state.time2 === true) {
    //   //   this.setState({ time2: "2" });
    //   // }
    //   // if (this.state.noon === true) {
    //   //   this.setState({ noon: "3" });
    //   // }
    //   // this.setState({
    //   //   time: {
    //   //     service_duration_id: this.state.time2,
    //   //     starting_time_id: this.state.noon
    //   //   }
    //   // });
    //   if (this.state.time1 === true && this.state.noon === true) {
    //     fetch("http://18.191.213.70:8080/move", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({
    //         starting_time_id: this.state.noon,
    //         service_duration_id: this.state.time3
    //       })
    //     })
    //       .then(res => res.json())
    //       .then(res => {
    //         alert("예약하신 정보는 마이 페이지에서 확인 가능합니다.");
    //         this.goToMain();
    //       });
    //   }
    //   // if (this.state.time3 === true) {
    //   //   this.setState({ time3: "3" });
    //   // }
    //   // this.setState({
    //   //   time: {
    //   //     service_duration_id: this.state.time3
    //   //   }
    //   // });
    //   if (this.state.time3 === true) {
    //     fetch("http://18.191.213.70:8080/move", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({
    //         service_duration_id: this.state.time3
    //       })
    //     })
    //       .then(res => res.json())
    //       .then(res => {
    //         alert("예약하신 정보는 마이 페이지에서 확인 가능합니다.");
    //         this.goToMain();
    //       });
    //   }
  };

  render() {
    console.log(this.state.time1);
    console.log(this.state.time2);
    console.log(this.state.time3);
    // console.log(this.state.time);
    return (
      <div className="HomeCleanBookingPage">
        <div className="formGroup center">
          <hr></hr>
        </div>
        <div className="container formTitle">
          <div className="container center sectionSubheading GroupForm">
            <MovingBookingComp
              atr="sectionSubheading"
              heading="서비스 시간을 선택해 주세요"
            />
          </div>
          <div className="center">
            <div className="center TimeTotalSize GroupForm">
              <SelectOption
                clicked={this.handler}
                change={
                  this.state.time1
                    ? "moveButtonBlue center timeSize "
                    : "moveButtonWraper center timeSize"
                }
                category="3시간"
                service="3시간"
              />
              <SelectOption
                clicked={this.handler}
                change={
                  this.state.time2
                    ? "moveButtonBlue center timeSize"
                    : "moveButtonWraper center timeSize"
                }
                category="4시간"
                service="4시간"
              />
              <SelectOption
                clicked={this.handler}
                change={
                  this.state.time3
                    ? "moveButtonBlue center timeSize"
                    : "moveButtonWraper center timeSize"
                }
                category="8시간"
                service="8시간"
              />
            </div>
          </div>
        </div>
        <div className="ServiceStartingTime">
          <div className="container center sectionSubheading GroupForm">
            <MovingBookingComp
              atr={
                this.state.time1 === false &&
                this.state.time2 === false &&
                this.state.time3 === false
                  ? "ServiceStartingTimeHidden sectionSubheading "
                  : this.state.time2 === true
                  ? "ServiceStartingTime sectionSubheading center "
                  : "ServiceStartingTimeHidden sectionSubheading"
              }
              heading="시작 시간을 선택해주세요"
            />
          </div>
          <div
            className={
              this.state.time1 === false &&
              this.state.time2 === false &&
              this.state.time3 === false
                ? "ServiceStartingTimeHidden sectionSubheading"
                : this.state.time2 === true
                ? "ServiceStartingTime sectionSubheading center"
                : "ServiceStartingTimeHidden sectionSubheading"
            }
          >
            <div className="center TimeTotalSize">
              <SelectOption
                clicked={this.dayHandle}
                change={
                  this.state.morning
                    ? "moveButtonBlue center timeSize "
                    : "moveButtonWraper center timeSize"
                }
                category="오전 9시"
                service="오전 9시"
              />
              <SelectOption
                clicked={this.dayHandle}
                change={
                  this.state.noon
                    ? "moveButtonBlue center timeSize"
                    : "moveButtonWraper center timeSize"
                }
                category="오후 2시"
                service="오후 2시"
              />
            </div>
          </div>
        </div>
        <div className="ServiceStartingTime">
          <div className="container center sectionSubheading GroupForm">
            <MovingBookingComp
              atr={
                this.state.time1 === false &&
                this.state.time2 === false &&
                this.state.time3 === false
                  ? "ServiceStartingTimeHidden sectionSubheading"
                  : this.state.time1 === true
                  ? "ServiceStartingTime sectionSubheading center"
                  : "ServiceStartingTimeHidden sectionSubheading"
              }
              heading="시작 시간을 선택해주세요"
            />
          </div>
          <div
            className={
              this.state.time1 === false &&
              this.state.time2 === false &&
              this.state.time3 === false
                ? "ServiceStartingTimeHidden sectionSubheading"
                : this.state.time1 === true
                ? "ServiceStartingTime sectionSubheading center"
                : "ServiceStartingTimeHidden sectionSubheading"
            }
          >
            <div className="center TimeTotalSize">
              <SelectOption
                clicked={this.dayHandle}
                change={
                  this.state.morning
                    ? "moveButtonBlue center timeSize "
                    : "moveButtonWraper center timeSize"
                }
                category="오전 10시"
                service="오전 10시"
              />
              <SelectOption
                clicked={this.dayHandle}
                change={
                  this.state.noon
                    ? "moveButtonBlue center timeSize"
                    : "moveButtonWraper center timeSize"
                }
                category="오후 2시"
                service="오후 2시"
              />
            </div>
          </div>
        </div>
        <div
          className={
            this.state.time1 === false &&
            this.state.time2 === false &&
            this.state.time3 === false
              ? "ServiceStartingTimeHidden"
              : this.state.morning === false && this.state.noon === false
              ? "ServiceStartingTimeHidden"
              : ""
          }
        >
          <div className="checkMarkContainer">
            <span className="checkMark"></span>
            <span className="checkMarkTextContainer">{this.duration()}</span>
          </div>
          <div className="detailsServiceTime">
            <p>
              <smaill>서비스 요금은 주소에 따라 다르게 책정됩니다.</smaill>
              <div>
                <button>상세 가격 안내 보기</button>
              </div>
            </p>
          </div>
        </div>
        <div className="center">
          <button
            type="button"
            className={
              (this.state.time1 || this.state.time2 || this.state.time3) &&
              (this.state.morning || this.state.noon) !== false
                ? "btnAfter"
                : "btnBefore"
            }
            onClick={this.Bookingdone}
          >
            예약완료
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(HomeCleanBookingPage);
