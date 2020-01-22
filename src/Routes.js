import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Nav from './Components/NavBlue/Nav';
import Reservation from './Pages/Reservation/Reservation';
import SignIn from './Pages/SignIn/SignIn';
import Footer from './Components/Footer/Footer';
import SignUp from './Pages/SignUp/SignUp';
import MovingBookingPage from './Pages/MovingBooking/MovingBookingPage';
import WithMiso from './Pages/WithMiso/WithMiso';
import ClientService from './Pages/ClientService/ClientService';
import HomeCleanBookingPage from './Pages/HomeCleanBookingPage/HomeCleanBookingPage';
import Helper from './Pages/Helper/Helper';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/Nav' component={Nav} />
          <Route exact path='/Reservation' component={Reservation} />
          <Route exact path='/SignIn' component={SignIn} />
          <Route exact path='/SignUp' component={SignUp} />
          <Route exact path='/MovingBooking' component={MovingBookingPage} />
          <Route exact path='/footer' component={Footer} />
          <Route exact path='/WithMiso' component={WithMiso} />
          <Route exact path='/ClientService' component={ClientService} />
          <Route exact path='/Helper' component={Helper} />
          <Route
            exact
            path='/HomeCleanBooking'
            component={HomeCleanBookingPage}
          />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
