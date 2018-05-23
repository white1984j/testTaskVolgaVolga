import React, {Component} from 'react';
import { createBottomTabNavigator,StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import Translate from './Translate'
import Vk from './Vk'



export default createBottomTabNavigator(
  {
    Translate: Translate,
    Vk: Vk,
  },
  {
    /* Other configuration remains unchanged */
  }
);