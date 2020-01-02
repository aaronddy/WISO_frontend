import React from "react";
import SignUpCheckBox from "./SignUpCheckbox";
import "./SignUp.scss";
import LogoBtn from "./SignUpLogoBtn";
import SignUpInfoBox from "./SignUpInfoBox";
import { withRouter } from "react-router-dom";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      box1: false,
      box2: false,
      box3: false,
      box4: false,
      Nametext: "",
      Emailtext: "",
      PWtext: "",
      PWChecktext: "",
      Phonetext: "",
      PW: "",
      name: "",
      email: "",
      pw: "",
      pwConfirm: "",
      Phone: "",
      errorColorNamePart: "",
      errorColorEmailPart: "",
      errorColorPasswordPart: "",
      errorColorPasswordConfirmPart: "",
      errorColorPhonePart: "",
      SignUpButton: "SignUpButtonBefore",
      MissingPartList: []
    };
  }

  AllClicked = e => {
    // console.dir(e.target);
    // console.log(e.target.checked);
    // console.log(this.state);
    const newObj = {
      box1: !this.state.box1,
      box2: !this.state.box2,
      box3: !this.state.box3,
      box4: !this.state.box4
    };
    console.log(this.state.box1);
    this.setState(newObj);
  };

  SingleClicked = e => {
    console.dir(e.target);
    if (e.target.className === "serviceTerm") {
      this.setState({
        box1: !this.state.box1
      });
    }
    if (e.target.className === "InfoSecurity") {
      this.SecondClicked(e);
    }
    if (e.target.className === "PromotionSms") {
      this.ThirdClicked(e);
    }
    if (e.target.className === "PromotionMail") {
      this.FourthClicked(e);
    }
  };

  // componentDidUpdate() {
  //   console.log(this.state.box1);
  //   console.log(this.state.agreeBox);
  // }

  goToSignIn = () => {
    this.props.history.push("/SignIn");
  };

  SecondClicked = e => {
    console.log("a");
    this.setState({
      box2: !this.state.box2
      // agreeBox: !this.state.box2
      //   ? this.state.agreeBox.push("mendatory2")
      //   : this.state.agreeBox
    });
    console.log(this.state.agreeBox);
  };

  ThirdClicked = e => {
    console.log("b");
    this.setState({ box3: !this.state.box3 });
  };

  FourthClicked = e => {
    console.log("c");
    this.setState({ box4: !this.state.box4 });
  };

  isEmail = email => {
    const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    return emailRegex.test(email) ? true : false;
  };

  errorMessage = e => {
    var email = e.target.value;
    console.dir(e.target);
    if (
      e.target.className === "InfoBox InfoBoxName" &&
      e.target.value.length < 2
    ) {
      this.setState({
        Nametext: "유효한 이름 형식이 아닙니다.",
        errorColorNamePart: "errorColorChange"
        // MissingPartList: [this.state.MissingPartList, null]
      });
    }
    if (
      e.target.className === "InfoBox InfoBoxName" &&
      e.target.value.length >= 2
    ) {
      this.setState({
        Nametext: "좋은 이름입니다.",
        name: e.target.value,
        errorColorNamePart: "",
        // MissingPartList: this.state.MissingPartList.concat([this.state.name])
        MissingPartList: [...this.state.MissingPartList, this.state.name]
      });
    }
    if (e.target.className === "InfoBox InfoBoxMail" && this.isEmail(email)) {
      this.setState({
        Emailtext: "사용 가능합니다.",
        email: e.target.value,
        errorColorEmailPart: ""
        // MissingPartList: [...this.state.MissingPartList, this.state.email]
      });
    }
    if (e.target.className === "InfoBox InfoBoxMail" && !this.isEmail(email)) {
      this.setState({
        Emailtext: "이메일 형식이 아닙니다.",
        errorColorEmailPart: "errorColorChange"
        // MissingPartList: [this.state.MissingPartList, null]
      });
    }
    if (
      e.target.className === "InfoBox InfoBoxPW" &&
      e.target.value.length < 9
    ) {
      this.setState({
        PWtext: "최소 9글자 이상 입력해 주세요.",
        PW: e.target.value,
        errorColorPasswordPart: "errorColorChange"
        // MissingPartList: [this.state.MissingPartList, null]
      });
    }
    if (
      e.target.className === "InfoBox InfoBoxPW" &&
      e.target.value.length >= 9
    ) {
      this.setState({
        PWtext: "사용 가능합니다.",
        PW: e.target.value,
        pw: e.target.value,
        errorColorPasswordPart: ""
        // MissingPartList: [this.state.MissingPartList, this.state.pw]
      });
    }
    if (
      e.target.className === "InfoBox InfoBoxPWCheck" &&
      e.target.value === this.state.PW
    ) {
      this.setState({
        PWChecktext: "비밀번호가 일치합니다.",
        pwConfirm: this.state.pw,
        errorColorPasswordConfirmPart: ""
        // MissingPartList: [this.state.MissingPartList, this.state.pwConfirm]
      });
    }
    if (
      e.target.className === "InfoBox InfoBoxPWCheck" &&
      e.target.value !== this.state.PW
    ) {
      this.setState({
        PWChecktext: "비밀번호가 일치하지 않습니다.",
        errorColorPasswordConfirmPart: "errorColorChange"
        // MissingPartList: [this.state.MissingPartList, null]
      });
    }
    if (
      e.target.className === "InfoBox InfoBoxPhoneNumber" &&
      e.target.value.length === 11
    ) {
      this.setState({
        Phonetext: "확인되었습니다.",
        Phone: e.target.value,
        errorColorPhonePart: ""
        // MissingPartList: [this.state.MissingPartList, this.state.phone]
      });
    }
    if (
      e.target.className === "InfoBox InfoBoxPhoneNumber" &&
      e.target.value.length !== 11
    ) {
      this.setState({
        Phonetext: "올바른 형식이 아닙니다.",
        errorColorPhonePart: "errorColorChange"
        // MissingPartList: [this.state.MissingPartList, null]
      });
    }
  };
  SignUpClick = () => {
    this.SignUpExecute();
    this.SignUpReady();
  };

  SignUpReady = () => {
    {
      {
        this.state.name !== undefined &&
        this.state.email !== undefined &&
        this.state.pw !== undefined &&
        this.state.pwConfirm !== undefined &&
        this.state.box1 &&
        this.state.box2
          ? this.setState({ SignUpButton: "SignUpButtonAfter" })
          : this.setState({ SignUpButton: "SignUpButtonBefore" });
      }
    }
  };

  SignUpExecute = () => {
    if (
      this.state.name !== undefined &&
      this.state.email !== undefined &&
      this.state.pw !== undefined &&
      this.state.pwConfirm !== undefined &&
      this.state.box1 &&
      this.state.box2
    ) {
      fetch("http://10.58.7.197:8000/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.pw,
          phone_number: this.state.Phone
        })
      })
        .then(res => res.json())
        .then(res => {
          this.goToSignIn();
        });
    }
  };

  render() {
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.pw);
    console.log(this.state.pwConfirm);
    console.log(this.state.Phone);
    console.log(this.state.SignUpButton);
    console.log(this.state.box1);
    console.log(this.state.box2);
    console.log(this.state.MissingPartList);
    return (
      <div className="SignUpBody">
        <nav></nav>
        {/* Current nav content is blank*/}
        <h2 className="SignUpHeading">회원가입</h2>
        <section className="contents memberWrap">
          <div className="memberInner">
            <div>
              <LogoBtn />
            </div>
            <p className="orBar">
              <span>또는</span>
            </p>
            <fieldset>
              <legend>이메일 가입</legend>
              <ul className="logInInfo">
                <SignUpInfoBox
                  for="nickName"
                  type="text"
                  label="이름"
                  indicator="이름"
                  InfoBox={"InfoBox InfoBoxName"}
                  errorMessage={this.errorMessage}
                  idx={this.eIndex}
                  errorBorder={this.state.errorColorNamePart}
                />
                <span id={this.errorBorder}>{this.state.Nametext}</span>
                <SignUpInfoBox
                  for="email"
                  type="text"
                  label="이메일"
                  indicator="이메일"
                  InfoBox={"InfoBox InfoBoxMail"}
                  errorMessage={this.errorMessage}
                  errorBorder={this.state.errorColorEmailPart}
                />
                <span id={this.errorBorder}>{this.state.Emailtext}</span>
                <SignUpInfoBox
                  for="password"
                  type="password"
                  label="비밀번호"
                  indicator="비밀번호"
                  InfoBox={"InfoBox InfoBoxPW"}
                  errorMessage={this.errorMessage}
                  errorBorder={this.state.errorColorPasswordPart}
                />
                <span id={this.errorBorder}>{this.state.PWtext}</span>
                <SignUpInfoBox
                  for="passwordConfirm"
                  type="password"
                  label="비밀번호 확인"
                  indicator="비밀번호 확인"
                  InfoBox={"InfoBox InfoBoxPWCheck"}
                  errorMessage={this.errorMessage}
                  errorBorder={this.state.errorColorPasswordConfirmPart}
                />
                <span id={this.errorBorder}>{this.state.PWChecktext}</span>
                <SignUpInfoBox
                  for="phoneNunber"
                  type="number"
                  label="휴대폰 번호"
                  indicator="휴대폰 번호"
                  InfoBox={"InfoBox InfoBoxPhoneNumber"}
                  errorMessage={this.errorMessage}
                  errorBorder={this.state.errorColorPhonePart}
                />
                <span id={this.errorBorder}>{this.state.Phonetext}</span>
              </ul>
              <div className="agreeBox">
                <p className="allSelector">
                  <input
                    onClick={this.AllClicked}
                    className="checkBoxColor"
                    type="checkbox"
                  />
                  <label className="ltype" for="allAgree">
                    아래 약관에 모두 동의합니다.
                  </label>
                </p>
                <ul className="selectionOption">
                  <SignUpCheckBox
                    ltype="ltype"
                    ltext="agree1"
                    termsText="서비스 이용약관 (필수)"
                    terms="https//:www.naver.com"
                    name="serviceTerm"
                    checked={this.state.box1}
                    SingleClicked={this.SingleClicked}
                  />
                  <SignUpCheckBox
                    ltype="ltype"
                    ltext="agree2"
                    termsText="개인정보 처리 방침 (필수)"
                    terms="https//:www.naver.com"
                    name="InfoSecurity"
                    checked={this.state.box2}
                    SingleClicked={this.SingleClicked}
                  />
                  <SignUpCheckBox
                    ltype="ltype"
                    ltext="agree3"
                    termsText="이벤트 등 프로모션 알림 SMS 수신 (선택)"
                    name="PromotionSms"
                    checked={this.state.box3}
                    SingleClicked={this.SingleClicked}
                  />
                  <SignUpCheckBox
                    ltype="ltype"
                    ltext="agree4"
                    termsText="이벤트 등 프로모션 알림 메일 수신 (선택)"
                    name="PromotionMail"
                    checked={this.state.box4}
                    SingleClicked={this.SingleClicked}
                  />
                </ul>
              </div>
              <div>
                <button
                  onClick={this.SignUpClick}
                  className={this.state.SignUpButton}
                >
                  회원가입
                </button>
              </div>
            </fieldset>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(SignUp);
