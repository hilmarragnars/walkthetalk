import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTodos, deleteTodo } from '../../actions/todos';
import styled from 'styled-components';
import FlexBox from '../custom-styles/FlexBox.jsx';
import TodoItem from './TodoItem.jsx';
import { Button } from '@smooth-ui/core-sc';


const TodoListTitle = styled.h2``
const TheTodoList = styled.ul`
  list-style: none;
  padding-left: 0;
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

  handleDelete = (id) => {
    this.props.deleteTodo(id)
  }

  render() {
    return (
      <FlexBox column alignCenter>
        <TodoListTitle>TodoList</TodoListTitle>
        <TheTodoList>
          {this.props.todos.map(todo =>
            <TodoItem key={todo.id} todo={todo} onDelete={this.handleDelete} />
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
