import React from "react";
import SignUpCheckBox from "./SignUpCheckbox";
import "./SignUp.scss";
import LogoBtn from "./SignUpLogoBtn";
import SignUpInfoBox from "./SignUpInfoBox";

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
      PW: "",
      name: "",
      email: "",
      pw: "",
      pwConfirm: ""
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
        Nametext: "유효한 이름 형식이 아닙니다."
      });
    }
    if (
      e.target.className === "InfoBox InfoBoxName" &&
      e.target.value.length >= 2
    ) {
      this.setState({ Nametext: "좋은 이름입니다.", name: e.target.value });
    }
    if (e.target.className === "InfoBox InfoBoxMail" && this.isEmail(email)) {
      this.setState({ Emailtext: "사용 가능합니다.", email: e.target.value });
    }
    if (e.target.className === "InfoBox InfoBoxMail" && !this.isEmail(email)) {
      this.setState({ Emailtext: "이메일 형식이 아닙니다." });
    }
    if (
      e.target.className === "InfoBox InfoBoxPW" &&
      e.target.value.length < 9
    ) {
      this.setState({
        PWtext: "최소 9글자 이상 입력해 주세요.",
        PW: e.target.value
      });
    }
    if (
      e.target.className === "InfoBox InfoBoxPW" &&
      e.target.value.length >= 9
    ) {
      this.setState({
        PWtext: "사용 가능합니다.",
        PW: e.target.value,
        pw: e.target.value
      });
    }
    if (
      e.target.className === "InfoBox InfoBoxPWCheck" &&
      e.target.value === this.state.PW
    ) {
      this.setState({
        PWChecktext: "비밀번호가 일치합니다.",
        pwComfirm: this.state.pwComfirm
      });
    }
    if (
      e.target.className === "InfoBox InfoBoxPWCheck" &&
      e.target.value !== this.state.PW
    ) {
      this.setState({ PWChecktext: "비밀번호가 일치하지 않습니다." });
    }
  };

  SignUpExecute = () => {
    if (
      this.state.name &&
      this.state.email &&
      this.state.pw &&
      this.state.pwConfirm !== undefined &&
      this.state.box1 &&
      this.state.box2
    ) {
      fetch("http://10.58.9.10:8000/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.data.pw
        })
      })
        .then(res => res.json())
        .then(res => {
          alert("success");
        });
    }
  };
  render() {
    console.log(this.state.box1);
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.pw);
    console.log(this.state.pwConfirm);
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
                />
                <span>{this.state.Nametext}</span>
                <SignUpInfoBox
                  for="email"
                  type="text"
                  label="이메일"
                  indicator="이메일"
                  InfoBox={"InfoBox InfoBoxMail"}
                  errorMessage={this.errorMessage}
                />
                <span>{this.state.Emailtext}</span>
                <SignUpInfoBox
                  for="password"
                  type="password"
                  label="비밀번호"
                  indicator="비밀번호"
                  InfoBox={"InfoBox InfoBoxPW"}
                  errorMessage={this.errorMessage}
                />
                <span>{this.state.PWtext}</span>
                <SignUpInfoBox
                  for="passwordConfirm"
                  type="password"
                  label="비밀번호 확인"
                  indicator="비밀번호 확인"
                  InfoBox={"InfoBox InfoBoxPWCheck"}
                  errorMessage={this.errorMessage}
                />
                <span>{this.state.PWChecktext}</span>
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
                <button onClick={this.SignUpExecute} className="SignUpButton">
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

export default SignUp;
