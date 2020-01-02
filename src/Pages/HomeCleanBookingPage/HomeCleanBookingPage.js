import React, { Component } from "react";
import SelectOption from "../MovingBooking/SelectOption";
import MovingBookingComp from "../MovingBooking/MovingBookingComp";
import "./HomeCleanBookingPage.scss";

export class HomeCleanBookingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time1: false,
      time2: false,
      time3: false,
      morning: false,
      noon: false
    };
  }

  handler = e => {
    console.dir(e.target);
    if (e.target.innerText === "3시간") {
      this.setState({
        time1: true,
        time2: false,
        time3: false
      });
    }
    if (e.target.innerText === "4시간") {
      this.setState({
        time1: false,
        time2: true,
        time3: false
      });
    }
    if (e.target.innerText === "8시간") {
      this.setState({
        time1: false,
        time2: false,
        time3: true
      });
    }
  };

  dayHandle = e => {
    if (e.target.innerText === "오전 9시") {
      this.setState({
        morning: true,
        noon: false
      });
    }
    if (e.target.innerText === "오후 2시") {
      this.setState({
        morning: false,
        noon: true
      });
    }
    if (e.target.innerText === "오전 10시") {
      this.setState({
        morning: true,
        noon: false
      });
    }
  };

  render() {
    console.log(this.state.time1);
    console.log(this.state.time2);
    console.log(this.state.time3);
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
        <div className="checkMarkContainer">
          <span className="checkMark"></span>
          <span className="checkMarkTextContainer">오전 9시~오후 1시</span>
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
    );
  }
}

export default HomeCleanBookingPage;
