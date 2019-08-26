import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTodos } from '../actions/todos';
import styled from 'styled-components';

const TodoListWrapper = styled.div`
  margin: 0 16px;
`
const TodoListTitle = styled.h2`
`
const TheTodoList = styled.ul`
  list-style: none;
`
const TodoListItem = styled.li`
`

class TodoList extends Component {

  componentDidMount() {
    this.props.getTodos()
  }

  render() {
    return (
      <TodoListWrapper>
        <TodoListTitle>This is the TodoList</TodoListTitle>
        <TheTodoList>{this.props.todos.map(todo => <TodoListItem key={todo.id}>{todo.title}</TodoListItem>)}</TheTodoList>
      </TodoListWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: Object.values(state.todos)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getTodos: () => dispatch(getTodos())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

// export default TodoList
