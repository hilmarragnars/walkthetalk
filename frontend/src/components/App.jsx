import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from "../store";
import { loadUser } from "../actions/auth.js"

import Header from './layouts/header.jsx';
import HomePage from './layouts/home-page.jsx';
import Login from './accounts/login.jsx';
import Register from './accounts/register.jsx';
import PrivateRoute from './common/private-route.js';



class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("react-app"));
