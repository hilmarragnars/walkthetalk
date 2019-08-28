import axios from 'axios';
import { returnErrors } from "./messages";
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types';


// Check the token and load the uers
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  //TODO use async wait with axios
  axios.get('/api/auth/user', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    }).catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

export const login = (username, password) => dispatch => {
  const config = {
    headers: {
      'content-type': 'application/json'
    }
  }
  const body = JSON.stringify({ username, password })

  //TODO use async wait with axios
  axios.post('/api/auth/login', body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    }).catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

export const logout = () => (dispatch, getState) => {

  //TODO use async wait with axios
  axios.post('/api/auth/logout/', null, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: LOGOUT_SUCCESS
      });
    }).catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const register = ({username, password, email}) => dispatch => {
  const config = {
    headers: {
      'content-type': 'application/json'
    }
  }
  const body = JSON.stringify({ username, email, password })

  //TODO use async wait with axios
  axios.post('/api/auth/register', body, config)
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    }).catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

// Setup config with token - helper function
export const tokenConfig = getState => {
  const token = getState().auth.token;
  const config = {
    headers: {
      'content-type': 'application/json'
    }
  };
  if(token) {
    config.headers['Authorization'] = `Token ${token}`;
  };
  return config;
};
