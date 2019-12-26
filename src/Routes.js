import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Reservation from "./Pages/Reservation/Reservation";
import MovingBookingPage from "./Pages/MovingBooking/MovingBookingPage";
import Toogle from "./Toggle"

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Reservation" component={Reservation} />
          <Route exact path="/MovingBooking" component={MovingBookingPage} />
          <Route exact path="/Toggle" component={Toogle} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
