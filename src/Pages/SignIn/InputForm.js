import React, { Component } from "react";
import "./InputForm.css";

class Input_form extends Component {
  render() {
    return (
      <form className="login_form">
        <div>
          <input className="typeBox" type="text" placeholder="이메일" />
        </div>
        <div>
          <input className="typeBox" type="text" placeholder="비밀번호" />
        </div>
        <button type="submit" className="submitBtn">
          이메일로 로그인
        </button>
      </form>
    );
  }
}

export default Input_form;
