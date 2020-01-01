import React from "react";
import "./SignUp.scss";

class SignUpCheckBox extends React.Component {
  // this.props.checekd는 부모에서 보내준 true 값이다.  this.props.checked를 true로 바꿔주는데, 왜 안되는 거지??

  render() {
    return (
      <>
        <li className={this.props.ltype}>
          <input
            onClick={this.props.SingleClicked}
            type="checkbox"
            className={this.props.name}
            checked={this.props.checked}
          />
          <label for={this.props.lText}>
            <a href={this.props.terms}>{this.props.termsText}</a>
          </label>
        </li>
      </>
    );
  }
}

export default SignUpCheckBox;
