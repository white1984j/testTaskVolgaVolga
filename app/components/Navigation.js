import React, {Component} from 'react';
import { createBottomTabNavigator,StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import Icon from 'react-native-vector-icons/FontAwesome';

import Translate from './Translate';
import Vk from './Vk';



export default createBottomTabNavigator(
  {
    Translate: Translate,
    Vk: Vk,
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
        }

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