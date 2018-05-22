import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import {
  Text,
  View
} from 'react-native';



export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <View>
          <Text>
            Welcome!123
          </Text>
        </View>
      </Provider>
    );
  }
}
