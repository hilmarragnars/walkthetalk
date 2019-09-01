import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTodos, deleteTodo } from '../../actions/todos';
import styled from 'styled-components';
import FlexBox from '../custom-styles/FlexBox.jsx'
// import Button from '../custom-styles/Button.jsx'
import { Button } from '@smooth-ui/core-sc';

const TodoListWrapper = styled.div`
`
const TodoListTitle = styled.h2``
const TheTodoList = styled.ul`
  list-style: none;
  padding-left: 0;
`
const TodoListItem = styled.li``
const DeleteButton = styled(Button)`
  font-size: 10px;
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
      <FlexBox column alignCenter>
        <TodoListTitle>TodoList</TodoListTitle>
        <TheTodoList>
          {this.props.todos.map(todo =>
            <TodoListItem key={todo.id}>
              {todo.title}
              <DeleteButton secondary onClick={this.props.deleteTodo.bind(this, todo.id)}>Delete</DeleteButton>
            </TodoListItem>
          )}
        </TheTodoList>
      </FlexBox>
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
