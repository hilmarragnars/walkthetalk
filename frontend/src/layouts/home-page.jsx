import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import Header from '../components/header.jsx'
// import TodoList from '../components/todo-list.jsx'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
`
const theme = {
  fontSizeXL: '64px'
}
const SiteLayout = styled.div`
`

class HomePage extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <SiteLayout>
          <GlobalStyle />
          <Header/>
          {/*<TodoList/>*/}
        </SiteLayout>
      </ThemeProvider>
    );
  }
}

export default HomePage
