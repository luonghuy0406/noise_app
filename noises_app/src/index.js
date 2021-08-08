import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import {questionReducer} from './reducers/index.js'
import {createStore} from "redux";

import App from './App'

const rootElement = document.getElementById('root')
const store = createStore(questionReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
