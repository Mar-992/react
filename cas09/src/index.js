import React from 'react';
import ReactDOM from 'react-dom'
import {App} from './components/App'
import {Route, BrowserRouter} from 'react-router-dom'
import "./css/style.css"


ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById('root')
)