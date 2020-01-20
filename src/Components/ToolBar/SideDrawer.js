import React from "react";
import "./SideDrawer.scss";

const SideDrawer = props => {
  let drawerClasses = "sidebarMenu";
  if (props.show) {
    drawerClasses = "sidebarMenu sidebarMenu_open";
  }
  return (
    <div className={drawerClasses}>
      <ul className="sidebarMenuInner">
        <li className="sidebarMenu_item_big">
          <a href="#">가사도우미</a>
        </li>
        <li className="sidebarMenu_item_big">
          <a href="#">이사</a>
        </li>
        <div className="makeLine" />
        <li className="sidebarMenu_item_small">
          <a href="#">파트너</a>
        </li>
        <li className="sidebarMenu_item_small">
          <a href="#">고객센터</a>
        </li>
        <li className="sidebarMenu_item_small">
          <a href="#">로그인</a>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
