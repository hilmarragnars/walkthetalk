import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Container from '../custom-styles/container.jsx'
import FormTodo from '../todos/form-todo.jsx'
import TodoList from '../todos/todo-list.jsx'


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
