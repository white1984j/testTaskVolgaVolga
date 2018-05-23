import React, { Component } from 'react';
import store from './store';
import {Provider} from 'react-redux';
import Navigation from './components/Navigation';


export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Navigation />
      </Provider>
    );
  }
};
