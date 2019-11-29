import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Topbar from './Components/Topbar/Topbar';
import HomePage from './Containers/HomePage/HomePage';
import LoginPage from './Containers/LoginPage/LoginPage';
import CounterPage from './Containers/CounterPage/CounterPage';
import ProductDetails from './Containers/ProductDetails/ProductDetails';
import {Routes} from './Config/RouteEndpoints';

import classes from './App.module.css';

class App extends React.Component {
  state = {
    loggedIn: false
  }

  onLogin = () => {
    this.setState({
      loggedIn: true
    });
  }

  onLogout = () => {
    this.setState({
      loggedIn: false
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Topbar loggedIn={this.state.loggedIn} />
            <Route exact path={Routes.HOMEPAGE} component={HomePage} />
            <Route exact path={Routes.LOGIN_PAGE} component={LoginPage} />
            <Route exact path={Routes.COUNTER_PAGE} component={CounterPage} />
            <Route exact path={Routes.PRODUCT_DETAILS+":productId"} component={ProductDetails} />
            {//<Route component={NotFound} />
            }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
