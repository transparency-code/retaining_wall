import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './core/store/store'
import Rwapp from 'core'
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <Provider store={store}>
    <Rwapp/>
  </Provider>,
  document.getElementById('root')
);



