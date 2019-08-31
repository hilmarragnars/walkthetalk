import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Container from '../custom-styles/Container.jsx'
import FormTodo from '../todos/FormTodo.jsx'
import TodoList from '../todos/TodoList.jsx'


class HomePage extends Component {
  render() {
    return (
        <Container>
          <TodoList/>
          <FormTodo/>
        </Container>
    );
  }
}

export default HomePage
