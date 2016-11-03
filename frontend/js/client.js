// Bring in react module
import React from 'react'
import ReactDOM from 'react-dom'

// definition of site's routes
import routes from './routes/routes'

// module for redux store
import {Provider} from "react-redux"
// definition of site's redux store
import store from "./store"

// link to styling
require('!style!css!sass!../css/style.scss')

// render the store and routes in the app element of the HTML 
const app = document.getElementById('app')
ReactDOM.render(<Provider store={store}>
  {routes}
</Provider>, app);
