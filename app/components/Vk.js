import React, { Component } from 'react';
import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class Vk extends Component{
  render(){
    return(
      <Text>
        <Icon name="rocket" size={30} color="#900" />
      </Text>
    )   
  }
}

export default Vk;