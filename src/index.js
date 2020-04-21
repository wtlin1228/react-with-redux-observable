import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from 'core/store'
import App from 'view/App'

ReactDOM.render(
  <ReduxProvider store={configureStore()}>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
)
