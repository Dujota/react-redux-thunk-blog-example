import React from 'react'
import ReactDOM from 'react-dom'

// REDUX
import { Provider } from "react-redux";
import { createStore } from 'redux';

// Components
import App from "./components/App"

// Reducers
import reducers from '.reducers'

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App/>
  </Provider>,
  document.querySelector('#root')
)


