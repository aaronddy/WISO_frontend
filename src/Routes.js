import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Reservation from "./Pages/Reservation/Reservation";
import Footer from "./Components/Footer/Footer";
import WithMiso from "./Pages/WithMiso/WithMiso";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Reservation" component={Reservation} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/WithMiso" component={WithMiso} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
