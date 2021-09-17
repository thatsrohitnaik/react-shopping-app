import React,{component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Product from './Components/Pages/Product'

export default function AppRoute(){

  return <Router>
    <Switch> 
   <Route path='/prod' component={Product} />
  </Switch></Router>
}