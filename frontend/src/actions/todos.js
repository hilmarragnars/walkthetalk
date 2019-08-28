import axios from 'axios';
import { tokenConfig } from './auth'
import { GET_TODOS, DELETE_TODO, ADD_TODO } from './types';

//TODO catch errors

// GET TODOS
export const getTodos = () => async (dispatch, getState) => {
  try {
    const res = await axios.get('/api/todos/', tokenConfig(getState));
    dispatch({
      type: GET_TODOS,
      payload: res.data
    });
  }catch(e) {
    console.log("Get todos failed");
    console.log(e);
  }
};

// DELETE TODO
export const deleteTodo = (id) => async (dispatch, getState) => {
  try {
    const res = await axios.delete(`/api/todos/${id}/`, tokenConfig(getState));
    dispatch({
      type: DELETE_TODO,
      payload: id
    });
  }catch(e) {
    console.log(e);
  }
};

// ADD TODO
export const addTodo = (todo) => async (dispatch, getState) => {
  try {
    const res = await axios.post('/api/todos/', todo, tokenConfig(getState));
    dispatch({
      type: ADD_TODO,
      payload: res.data
    });
  }catch(e) {
    console.log(e);
  }
};
