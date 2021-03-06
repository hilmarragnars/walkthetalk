import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components'
import { Normalize } from '@smooth-ui/core-sc'
import store from "../store";
import { loadUser } from "../actions/auth.js"
import GlobalStyle from "./custom-styles/GlobalStyle"

import Header from './layouts/header.jsx';
import HomePage from './layouts/HomePage.jsx';
import Login from './accounts/login.jsx';
import Register from './accounts/register.jsx';
import PrivateRoute from './common/PrivateRoute.js';

const theme = {
  fontSizeXL: '64px'
}

const SiteWrapper = styled.div``

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Normalize />
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <SiteWrapper>
              <Header />
              <Switch>
                <PrivateRoute exact path="/" component={HomePage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
              </Switch>
            </SiteWrapper>
          </ThemeProvider>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("react-app"));
