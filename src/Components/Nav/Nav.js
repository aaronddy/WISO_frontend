import React, { Component } from "react";
import WisoMenu from "./WisoMenu";
import "./Nav.scss";
import "../../Styles/Nav.scss";
import DrawerToggleButton from "../ToolBar/DrawerToggleButton";
import SideDrawer from "../ToolBar/SideDrawer";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      scrolledNav: false,
      sideDrawerOpened: false,
      toggleBtnSpinned: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 30;
      // console.log(window.scrollY);
      if (isTop !== true) {
        this.setState({ scrolledNav: true });
      } else {
        this.setState({ scrolledNav: false });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpened: !prevState.sideDrawerOpened };
    });
    console.log(this.state.sideDrawerOpened);
  };

  // toggleBtnSpinHandler = () => {
  //   this.setState(prevState => {
  //     return { toggleBtnSpinned: !prevState.toggleBtnSpinned };
  //   });
  //   console.log(this.state.toggleBtnSpinned);
  // };

  moveToMain = url => {};

  render() {
    return (
      <header>
        <div>
          <nav
            className={
              this.state.scrolled
                ? "navigationMenu scrolledNav"
                : "navigationMenu"
            }
          >
            <WisoMenu />
            <DrawerToggleButton
              click={this.drawerToggleClickHandler}
              // animated={this.toggleBtnSpinHandler}
            />
            <SideDrawer show={this.state.sideDrawerOpened} />
          </nav>
        </div>
      </header>
    );
  }
}

export default Nav;
