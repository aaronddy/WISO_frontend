import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Reservation from "./Pages/Reservation/Reservation";
import SignIn from "./Pages/SignIn/SignIn";
import Footer from "./Components/Footer/Footer";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Reservation" component={Reservation} />
          <Route exact path="/SignIn" conponent={SignIn} />
          <Route exact path="/footer" component={Footer} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
