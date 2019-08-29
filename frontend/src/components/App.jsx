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
import store from "../store";
import { loadUser } from "../actions/auth.js"
import GlobalStyle from "./custom-styles/global-style"

import Header from './layouts/header.jsx';
import HomePage from './layouts/home-page.jsx';
import Login from './accounts/login.jsx';
import Register from './accounts/register.jsx';
import PrivateRoute from './common/private-route.js';

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
