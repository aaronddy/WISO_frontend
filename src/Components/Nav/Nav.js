import React, { Component } from "react";
import WisoMenu from "./WisoMenu";
import "./Nav.scss";
import DrawerToggleButton from "../ToolBar/DrawerToggleButton";
import SideDrawer from "../ToolBar/SideDrawer";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
      sideDrawerOpened: false,
      toggleBtnSpinned: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 30;
      // console.log(window.scrollY);
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
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
              this.state.scrolled ? "navigationMenu scrolled" : "navigationMenu"
            }
          >
            <img
              src="/Images/wiso_blue_1.png"
              alt="wiso_logo"
              className={this.state.scrolled ? "wisoLogoBlue" : "wisoLogoWhite"}
              onClick={ev => {
                this.moveToMain("localhost:3000");
              }}
            />
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
