import React from "react";
import "./DrawerToggleButton.scss";

const DrawerToggleButton = props => {
  // let toggleBtnClasses = "isActive";
  // if (props.animated) {
  //   toggleBtnClasses = "";
  // }

  return (
    <div className="containerHamburger">
      <button
        onClick={props.click}
        htmlFor="openSidebarMenu"
        className="sidebarIconToggle"
      >
        <div className="spinner diagonal part-1"></div>
        <div className="spinner horizontal"></div>
        <div className="spinner diagonal part-2"></div>
      </button>
    </div>
  );
};
export default DrawerToggleButton;
