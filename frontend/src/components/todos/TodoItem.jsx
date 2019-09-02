import React from 'react';
import { Button } from '@smooth-ui/core-sc';

function TodoItem(props) {
  
    const handleClick = () => {
      props.onDelete(props.todo.id)
    }
    return (
      <li>
        <p>{props.todo.title}</p>
        <Button onClick={handleClick}>Delete</Button>
      </li>
    )
}

export default TodoItem
