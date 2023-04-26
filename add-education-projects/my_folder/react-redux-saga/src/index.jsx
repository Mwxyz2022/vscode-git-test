import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App.jsx'
import { store } from './store.js'
import './styles/index.scss'

const rootElement = document.querySelector('#root')

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, rootElement)
