import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTodos, deleteTodo } from '../../actions/todos';
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
const DeleteButton = styled.button`

`


class TodoList extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    getTodos: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired

  };

  componentDidMount() {
    this.props.getTodos()
  }

  render() {
    return (
      <TodoListWrapper>
        <TodoListTitle>This is the TodoList</TodoListTitle>
        <TheTodoList>
          {this.props.todos.map(todo =>
            <TodoListItem key={todo.id}>
              {todo.title}
              <DeleteButton onClick={this.props.deleteTodo.bind(this, todo.id)}>Delete</DeleteButton>
            </TodoListItem>
          )}
        </TheTodoList>
      </TodoListWrapper>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todos
});

export default connect(
  mapStateToProps,
  { getTodos, deleteTodo }
)(TodoList);
