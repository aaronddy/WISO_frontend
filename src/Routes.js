import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";

import Nav from "./Components/Nav/Nav";
import Reservation from "./Pages/Reservation/Reservation";
import MovingBookingPage from "./Pages/MovingBooking/MovingBookingPage";
import Toogle from "./Toggle";
import Footer from "./Components/Footer/Footer";
import WithMiso from "./Pages/WithMiso/WithMiso";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Nav" component={Nav} />
          <Route exact path="/Reservation" component={Reservation} />
          <Route exact path="/MovingBooking" component={MovingBookingPage} />
          <Route exact path="/Toggle" component={Toogle} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/WithMiso" component={WithMiso} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
