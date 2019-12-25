import React, { Component } from "react";
import "./Nav.css";
import WisoMenu from "./WisoMenu";
import MenuData from "./Data";

class Nav extends Component {
  moveToMain = url => {};

  render() {
    return (
      <header>
        <div className="container">
          <img
            src="/images/wiso_white.png"
            alt="wiso_logo"
            className="wiso_logo_white"
            onClick={ev => {
              this.moveToMain("localhost:3000");
            }}
          />
          {MenuData.map((curr, idx) => {
            return <WisoMenu value={curr} key={idx} />;
          })}
        </div>
      </header>
    );
  }
}

export default Nav;
