/**
* index.js - root file of the application
*/ 
/* REACT related imports*/
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import middlewares from './middlewares'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App'
/* Creating the REDUX STORE const store */
const store = createStore(rootReducer, middlewares)
/* Loading the <App/> root view-component of the app
* <Provided/> by the {store}
* inside ReactDOM.render() */
ReactDOM.render(
  <Provider store={store}>
	  <BrowserRouter><App/></BrowserRouter>
  </Provider>,
document.getElementById('root')
)
