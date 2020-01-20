import React, { Component } from "react";
import "./Helper.scss";
//import DateSelector from "../../Components/DateSelector/DateSelector";
import HelperLogo from "../../Images/logoImages/wiso_blue.png";
import SelectOption from "../MovingBooking/SelectOption";
import MovingBookingComp from "../MovingBooking/MovingBookingComp";
import "../HomeCleanBookingPage/HomeCleanBookingPage.scss";
import { withRouter } from "react-router-dom";
import "../../Components/DateSelector/DateSelector.scss";
import DateModal from "../../Components/DateModal/DateModal";
import moment from "moment-timezone";

import api from "../../utils/api";

class Helper extends Component {
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
      starting_time_id: 0,
      ///----
      OpenDate: false,
      defaultDateName: "날짜선택",
      changeName: false,
      sendingDate: {
        year: "",
        month: "",
        date: ""
      },
      isClicked: true
    };
  }
  componentDidUpdate = () => {
    console.table(this.state);
  };
  toParent = (date, month, year) => {
    this.setState(
      {
        sendingDate: {
          year: year,
          month: month,
          date: date
        },
        isClicked: false
      },
      () => {
        console.log(this.state.sendingDate.sec);
      }
    );
  };

  openDateSelector = () => {
    this.setState({ OpenDate: !this.state.OpenDate });
  };
  closeDateSelector = () => {
    this.setState({ OpenDate: false });
  };
  /////
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

  dateHandle = e => {
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
    const { starting_time_id, service_duration_id } = this.state;
    console.log(starting_time_id, service_duration_id);
    if (!starting_time_id || !service_duration_id) return false;

    const { year, month, date } = this.state.sendingDate;
    const service_start_date = moment([year, month, date]).format("YYYY-MM-DD");
    /**
 * {
            "reserve_cycle_id": "1",
            "service_start_date": "2020-02-12",
            "service_duration_id": "1",
            "starting_time_id": "2",
            "reserve_location": "서울시 강남구 테헤란로",
            "have_pet": "1",
            "status_id": "1"
        }
 */

    api
      .post("/housecleaning/onetimereservate", {
        data: {
          starting_time_id,
          service_duration_id,
          service_start_date,
          reserve_cycle_id: 1,
          reserve_location: "서울시 강남구 테헤란로",
          have_pet: 1,
          status_id: 1
        }
      })
      .then(res => {
        alert("예약하신 정보는 마이 페이지에서 확인 가능합니다.");
        this.goToMain();
      });

    // fetch("http://18.216.136.166:8080/housecleaning/ontimereservate", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //   })
    // })

    api
      .post("/housecleaning/ontimereservate", {
        data: {
          starting_time_id,
          service_duration_id,
          service_start_date
        }
      })
      .then(res => {
        alert("예약하신 정보는 마이 페이지에서 확인 가능합니다.");
        this.goToMain();
      });
  };

  render() {
    return (
      <>
        <div className="helpercontainer">
          <nav className="helperNavBarwrap">
            <div className="helperNavBar">
              <img
                className="helperNavBarImg"
                src={HelperLogo}
                alt="wisoLogo"
              ></img>
            </div>
          </nav>
          <main className="helperInnerContainer">
            <div className="contentTitle">
              <h2>1회 청소 예약</h2>
            </div>
            <div className="contentPara">
              <p>청소를 언제하고 싶으신가요?</p>
            </div>
          </main>
          <div className="helperBtn">
            {/* <DateSelector /> */}
            <div>
              <button className="daySelector" onClick={this.openDateSelector}>
                {this.state.isClicked
                  ? this.state.defaultDateName
                  : `${this.state.sendingDate.year}년 ${this.state.sendingDate.month}월 ${this.state.sendingDate.date}일`}
              </button>
              <DateModal
                toParent={this.toParent}
                // value={this.state.date}
                openSelector={this.state.OpenDate}
                closeSelector={this.closeDateSelector}
              />
            </div>
          </div>
        </div>
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
                  clicked={this.dateHandle}
                  change={
                    this.state.morning
                      ? "moveButtonBlue center timeSize "
                      : "moveButtonWraper center timeSize"
                  }
                  category="오전 9시"
                  service="오전 9시"
                />
                <SelectOption
                  clicked={this.dateHandle}
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
                  clicked={this.dateHandle}
                  change={
                    this.state.morning
                      ? "moveButtonBlue center timeSize "
                      : "moveButtonWraper center timeSize"
                  }
                  category="오전 10시"
                  service="오전 10시"
                />
                <SelectOption
                  clicked={this.dateHandle}
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
      </>
    );
  }
}
export default Helper;
