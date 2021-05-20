import React, {useState} from 'react';
import {Switch, Route } from 'react-router-dom';
import { Contact } from './Contact';
import { About } from './About';
import { Info } from './Info';
import { Navigation } from './Navigation'

export function App(){

  return(
    <div id="app">
      <Navigation />

      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/info" component={Info} />
        <Route path="/about" component={About}/>

      </Switch>

    </div>
  )
}