import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Container from '../custom-styles/container.jsx'
import FormTodo from '../todos/FormTodo.jsx'
import TodoList from '../todos/TodoList.jsx'
import UserList from '../users/UserList.jsx'

class HomePage extends Component {
  render() {
    return (
      <Container>
        <TodoList />
        <UserList />
        <FormTodo />
      </Container>
    )
  }
}

export default HomePage
