import React, { Component } from "react";
import "./MovingBookingPage.scss";
import MovingBookingComp from "./MovingBookingComp";
import SelectOption from "./SelectOption";
import DaumPostcode from "react-daum-postcode";
import { withRouter } from "react-router-dom";

// import PostCode from "../../Components/PostcodeSearch/PostCode";
// import { fullAddress } from "../../Components/PostcodeSearch/PostCode";
class MovingBookingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Address: "",
      phone: "",
      idp: false,
      mode1: false,
      mode2: false,
      mode3: false,
      address: "",
      isActived: false
    };
  }

  handleData = data => {
    this.setState({
      isActived: !this.state.isActived,
      address: data.address
    });
  };

  handler = e => {
    console.dir(e.target);
    if (e.target.innerText === "가정이사") {
      this.setState({
        mode1: true,
        mode2: false,
        mode3: false
      });
    }
    if (e.target.innerText === "소형이사") {
      this.setState({
        mode1: false,
        mode2: true,
        mode3: false
      });
    }
    if (e.target.innerText === "사무실이사") {
      this.setState({
        mode1: false,
        mode2: false,
        mode3: true
      });
    }
  };

  goToMain = () => {
    this.props.history.push("/");
  };
  // idp1 만 클릭되었으면, idp1: false가 setState에서 true로 바뀐다.

  Bookingdone = () => {
    if (this.state.mode1 === true) {
      this.setState({ mode1: "1" });
    }
    if (
      this.state.mode1 === "1" &&
      this.state.phone.length === 11 &&
      this.state.address !== undefined
    ) {
      fetch("http://18.191.213.70:8080/move", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: "1",
          move_categories_id: this.state.mode1,
          address: this.state.address,
          phone_number: toString(this.state.phone)
        })
      })
        .then(res => res.json())
        .then(res => {
          alert("가정 이사 서비스를 문의 주셔서 감사합니다.");
          this.goToMain();
        });
    }
    if (this.state.mode2 === true) {
      this.setState({ mode2: "2" });
    }
    if (
      this.state.mode2 === "2" &&
      this.state.phone.length === 11 &&
      this.state.address !== undefined
    ) {
      fetch("http://18.191.213.70:8080/move", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: "1",
          move_categories_id: this.state.mode2,
          address: this.state.address,
          phone_number: toString(this.state.phone)
        })
      })
        .then(res => res.json())
        .then(res => {
          alert("소형이사 서비스를 문의해주셔서 감사합니다.");
          this.goToMain();
        });

      // this.goToMain.bind(this);
    }
    if (this.state.mode3 === true) {
      this.setState({ mode3: "3" });
    }
    if (
      this.state.mode3 === "3" &&
      this.state.phone.length === 11 &&
      this.state.address !== undefined
    ) {
      fetch("http://18.191.213.70:8080/move", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: "1",
          move_categories_id: this.state.mode3,
          address: this.state.address,
          phone_number: toString(this.state.phone)
        })
      })
        .then(res => res.json())
        .then(res => {
          alert("사무실 서비스를 문의해주셔서 감사합니다.");
          this.goToMain();
        });

      // this.goToMain.bind(this);
    }
  };

  SeAddress = () => {
    // window.open(
    //   "http://localhost:3000/PostCode",
    //   "a",
    //   "width=500, height=300, left=460, top=280"
    // );
    this.setState({
      isActived: !this.state.isActived
    });
  };

  FillAddress = () => {
    this.setState({
      Address: this.props.fullAddress
    });
  };

  render() {
    console.log(this.state.mode1);
    console.log(this.state.mode2);
    console.log(this.state.mode3);
    // console.log(this.state.Address);
    // console.log(this.fullAddress);
    // console.log(<PostCode />);
    // console.log(this.props);
    console.log(this.state.address);
    console.log(this.state.phone);

    return (
      <div className="MovingBookingPageTotal">
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
            heading="서비스 받으실 주소 및 번호를 검색해 주세요"
          />
          <div>
            <form className="bookingInfo center column container formTitle">
              <input
                value={this.state.address}
                type="text"
                class="formControl inputName"
                placeholder="주소"
              />
              <div className="searchBtn">
                <div onClick={this.SeAddress} className="center">
                  검색하기
                </div>
              </div>
              {this.state.isActived && (
                <DaumPostcode onComplete={this.handleData} />
              )}
            </form>
            <form className="bookingInfo center column container formTitle">
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
            </form>
          </div>
          <div className="center">
            <button
              type="button"
              className={
                this.state.address && this.state.phone.length === 11
                  ? "btnAfter"
                  : "btnBefore"
              }
              onClick={this.Bookingdone}
            >
              견적 문의
            </button>
          </div>
        </div>
        <div className="formGroup">
          <hr></hr>
        </div>
        {/* Footer fixed scss will be fixed then I will import in here */}
      </div>
    );
  }
}

export default withRouter(MovingBookingPage);
