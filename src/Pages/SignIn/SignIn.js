import React, { Component } from "react";
import "./SignIn.scss";
import LogoBtn from "./LogoBtn";
import axios from "axios";
import wisoLogo from "../../Images/logoImages/wiso_blue_1.png";
import { withRouter } from "react-router-dom";

const emailRegex = RegExp(
  /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });
  return valid;
};

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      button: "",
      formErrors: {
        email: "",
        password: ""
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state.formErrors)) {
      console.log(`
      --submitting--
      Email: {this.state.email}
      Password: {this.state.password}
      `);
    } else {
      console.error("Form Invalid - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "이메일 형식이 아닙니다.";
        break;
      case "password":
        formErrors.password =
          value.length < 8 && value.length > 0
            ? "최소한 8자리 이상이어야 합니다."
            : "";
        break;
      default:
        break;
    }

    this.setState({
      [name]: value
    });
    console.log(this.state);
    console.log(this.state.email);
  };

  postSignIn = e => {
    e.preventDefault();

    console.log(`email:${this.state.email}\npassword:${this.state.password}`);

    axios
      .post("http://18.216.136.166:8080/user/auth", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        if (res.data) {
          localStorage.setItem("access_token", res.data.access_token);
        }
        // 연결이 됐을 시, then
        // SignUp route 연결
        this.props.history.push("/");
        console.log(res.data);
      })
      .catch(err => {
        // 연결이 안 됐을 시, catch
        console.log(err.response);
        alert("로그인과 비밀번호를 다시 확인해 주세요");
      });
  };

  socialLogin = url => {
    window.location.href = url;
  };

  render() {
    const { formErrors } = this.state;
    console.log(formErrors);

    return (
      <div className="containerLogin">
        <h1 className="head">
          <img
            src={wisoLogo}
            className="wisoLogo"
            alt="logo"
            // history={this.props.history}
          />
        </h1>
        <div className="memberBorder">
          <h2 className="quickLogin">다른 서비스로 로그인</h2>
          <LogoBtn history={this.props.history} />
          <div className="lineDiv" />
          <div>
            <div className="loginWiso">wiso 로그인</div>
            <form className="loginForm" onSubmit={this.postSignIn}>
              <div className="loginEmail_div">
                <label htmlFor="loginEmail"></label>
                <input
                  className={
                    formErrors.email.length > 0 ? "typeBoxError" : "typeBox"
                  }
                  type="text"
                  placeholder="이메일"
                  name="email"
                  onChange={this.handleChange}
                />
                {formErrors.email.length > 0 && (
                  <div className="loginErrorMessage">{formErrors.email}</div>
                )}
              </div>
              <div className="loginPwDiv">
                <input
                  className={
                    formErrors.password.length > 0 ? "typeBoxError" : "typeBox"
                  }
                  type="password"
                  placeholder="비밀번호"
                  name="password"
                  onChange={this.handleChange}
                />
                {formErrors.password.length > 0 && (
                  <div className="loginErrorMessage">{formErrors.password}</div>
                )}
              </div>
              <button
                type="submit"
                className={
                  formErrors.email || formErrors.password.length > 8
                    ? "submitBtn error"
                    : "submitBtn"
                }
              >
                이메일로 로그인
              </button>
            </form>
            <p className="noMember">
              아직 미소 회원이 아니신가요?
              <a className="signUpForMem" href="/SignUp">
                회원가입
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
