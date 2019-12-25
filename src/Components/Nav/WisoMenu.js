import React, { Component } from "react";
import "./Nav.css";

class WisoMenu extends Component {
  render() {
    console.log(this.props.value);
    return (
      <nav>
        <ul className="menu_list">
          <li className="menu_list_item">
            <a className="menu_link" href={this.props.value.link}>
              {this.props.value.label}
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default WisoMenu;
