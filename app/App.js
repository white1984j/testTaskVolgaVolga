import React, { Component } from 'react';
import store from './store';
import {Provider} from 'react-redux';
import Translate from './components/Translate';


export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Translate />
      </Provider>
    );
  }
};
