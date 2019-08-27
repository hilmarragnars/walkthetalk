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

import Header from './layouts/header.jsx';
import HomePage from './layouts/home-page.jsx';
import Login from './accounts/login.jsx';
import Register from './accounts/register.jsx';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("react-app"));
