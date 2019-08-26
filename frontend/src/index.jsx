import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from 'redux-starter-kit'
import { Provider } from 'react-redux';
import rootReducer from './reducers'
import TodoList from './components/todo-list.jsx';
import HomePage from './layouts/home-page.jsx';


const store = configureStore({
  reducer: rootReducer
})

ReactDOM.render((
  <Provider store={store}>
    <HomePage />
  </Provider>
), document.getElementById('react-app'));
