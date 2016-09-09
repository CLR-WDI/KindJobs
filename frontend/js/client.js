import React from 'react'

import routes from './routes/routes'

import ReactDOM from 'react-dom'
import {Provider} from "react-redux"

import store from "./store"

require('!style!css!sass!../css/style.sass')

const app = document.getElementById('app')
ReactDOM.render(<Provider store={store}>
  {routes}
</Provider>, app);
