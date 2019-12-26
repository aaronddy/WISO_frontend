import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Reservation from "./Pages/Reservation/Reservation";
<<<<<<< HEAD
import SignIn from "./Pages/SignIn/SignIn";
=======
import Footer from "./Component/Footer/Footer";
>>>>>>> 0dceebf15bf4c53cec96268ecacfc08bc82db38a

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Reservation" component={Reservation} />
<<<<<<< HEAD
          <Route exact path="/SignIn" conponent={SignIn} />
=======
          <Route exact path="/footer" component={Footer} />
>>>>>>> 0dceebf15bf4c53cec96268ecacfc08bc82db38a
        </Switch>
      </Router>
    );
  }
}

export default Routes;
