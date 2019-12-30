import React, { Component } from "react";

export class SignUpInfoBox extends Component {
  render() {
    return (
      <>
        <li>
          <label for={this.props.for}>{this.props.label} </label>
          <input
            onChange={this.props.errorMessage}
            className={this.props.InfoBox}
            type={this.props.type}
            placeholder={this.props.indicator}
          />
        </li>
      </>
    );
  }
}

export default SignUpInfoBox;
