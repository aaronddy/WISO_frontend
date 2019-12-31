import React, { Component } from "react";
import "./MovingBookingPage.scss";
import MovingBookingComp from "./MovingBookingComp";
import SelectOption from "./SelectOption";
import { conditionalExpression } from "@babel/types";

class MovingBookingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      idp: false,
      mode1: false,
      mode2: false,
      mode3: false
    };
  }

  handle = e => {
    if (e.target.value.length > 1) {
      console.dir(e.target);
      console.log(this.state.name);
      console.log(this.state.phone);
      this.setState({
        name: console.log(e.target.value),
        phone: console.log(e.target.value)
      });
    }
  };

  handler = e => {
    console.dir(e.target);
    if (e.target.innerText === "가정이사") {
      this.setState({
        mode1: true,
        mode2: false,
        mode3: false
      });
    } else if (e.target.innerText === "소형이사") {
      this.setState({
        mode1: false,
        mode2: true,
        mode3: false
      });
    } else if (e.target.innerText === "사무실이사") {
      this.setState({
        mode1: false,
        mode2: false,
        mode3: true
      });
    }
  };

  //idp1 만 클릭되었으면, idp1: false가 setState에서 true로 바뀐다.

  alert = () => {
    {
      alert("문의가 완료 되었습니다.");
    }
  };

  render() {
    console.log(this.state.mode1);
    console.log(this.state.mode2);
    console.log(this.state.mode3);

    return (
      <div>
        <nav className="navbar navbarDefault">
          <div className="container pd">
            <div className="navbarHeader">
              <span>miso</span>
            </div>
          </div>
        </nav>
        <div className="container formTitle">
          <div className="appContainer">
            <div>
              <div className="container center">
                <MovingBookingComp
                  atr="sectionHeading"
                  heading="포장 이사 견적 문의"
                />
              </div>
              <div className="formGroup">
                <hr></hr>
              </div>
            </div>
          </div>
          <div className="container center sectionSubheading">
            <MovingBookingComp
              atr="sectionSubheading"
              heading="이사 종류를 선택해 주세요"
            />
          </div>
          <div className="center">
            <SelectOption
              clicked={this.handler}
              change={
                this.state.mode1
                  ? "moveButtonBlue center"
                  : "moveButtonWraper center"
              }
              category="house"
              service="가정이사"
            />
            <SelectOption
              clicked={this.handler}
              change={
                this.state.mode2
                  ? "moveButtonBlue center"
                  : "moveButtonWraper center"
              }
              category="house"
              service="소형이사"
            />
            <SelectOption
              clicked={this.handler}
              change={
                this.state.mode3
                  ? "moveButtonBlue center"
                  : "moveButtonWraper center"
              }
              category="office"
              service="사무실이사"
            />
          </div>
          <div>
            <a
              className="outerFree"
              href="http://rebrand.ly/80grh8"
              target="_blank"
            >
              <MovingBookingComp
                atr="sectionPreheading center"
                heading="서비스 상세 안내 보기"
              />
            </a>
          </div>
        </div>
        <div className="container">
          <MovingBookingComp
            atr="sectionSubheading center"
            heading="이름과 연락처를 알려주세요"
          />
          <div className="bookingInfo center column container formTitle">
            <input
              onChange={e => {
                this.setState({
                  name: e.target.value
                });
              }}
              type="text"
              class="formControl inputName"
              placeholder="이름"
            ></input>
            <input
              onChange={e => {
                this.setState({
                  phone: e.target.value
                });
              }}
              type="number"
              class="formControl inputPhone"
              placeholder="연락처"
            ></input>
          </div>
          <div className="center">
            <button
              onChange={this.handle.bind(this)}
              type="button"
              className={
                this.state.name && this.state.phone ? "btnAfter" : "btnBefore"
              }
              onClick={this.alert}
            >
              견적 문의
            </button>
          </div>
        </div>
        <div className="formGroup">
          <hr></hr>
        </div>
        {/* Footer part component사용 예정 */}
      </div>
    );
  }
}

export default MovingBookingPage;
