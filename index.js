import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Navbar from './Components/Other/Navbar';
import Drawer from './Components/Other/Drawer';
import Card from './Components/Other/Card';

import {SettingComponent} from './Context/Setting/SettingContext';
import AppRoute from './Route';
import {ProductComponent } from './Context/Product/ProductContext';
import Product from './Components/Pages/Product';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
    <SettingComponent>
    <ProductComponent>
     <Navbar/>
     <Drawer/>
     <AppRoute />
     <Product/>
     </ProductComponent>
     </SettingComponent>
    );
  }
}

render(<App />, document.getElementById('root'));
