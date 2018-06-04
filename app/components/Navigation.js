import React, {Component} from 'react';
import { createBottomTabNavigator, createStackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import Icon from 'react-native-vector-icons/FontAwesome';

import Translate from './Translate';
import Vk from './Vk';
import BarcodeList from './BarcodeList';
import BarcodeCamera from './BarcodeCamera';


const Barcode = createStackNavigator({
  Barcode: { screen: BarcodeList },
  BarcodeCamera: { screen: BarcodeCamera },
});


export default createBottomTabNavigator(
  {
    Translate: Translate,
    Vk: Vk,
    Barcode: { screen: Barcode }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Translate') {
          iconName = 'language';
        } else if (routeName === 'Vk') {
          iconName = 'vk';
        } else if (routeName === 'Barcode')
          iconName = 'barcode'

        return <Icon name={iconName} size={24} color="#fff" />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#c3c3c3',
      labelStyle: {
        fontSize: 16
      },
      style: {
        paddingTop: 4,
        backgroundColor: '#5181b8',
      },
    }
  }
);