import React, { Component } from "react";
import "./SignIn.css";
import LogoBtn from "./LogoBtn";
import InputForm from "./InputForm";

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};
class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      formErros: {
        email: "",
        password: ""
      }
    };

    this.hanleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state.formErros)) {
      console.log(`
      --submitting--
      Email: ${this.state.email}
      Password: ${this.state.password}
      `);
    } else {
      console.error("Form Invalid - DISPLAY ERROR MESSAGE");
    }
  };
  socialLogin = url => {
    window.location.href = url;
  };

  render() {
    return (
      <div className="container">
        <h1 className="head">로그인</h1>
        <div className="member_border">
          <h2 className="quickLogin">간편 로그인</h2>
          <LogoBtn />
          <p className="or">
            <span className="or_span">또는</span>
          </p>
          <InputForm />
          <p className="no_mem">
            아직 미소 회원이 아니신가요?
            <a
              className="signUp"
              href="https://www.youtube.com/watch?v=UoT2oava9ns"
            >
              회원가입
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default SignIn;
