import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  AsyncStorage,
  Vibration
} from 'react-native';

import Camera from 'react-native-camera';

export default class BarcodeScan extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: true
    }
  }

  static navigationOptions = {
    title: 'Вернуться к списку',
  };

  onBarCodeRead = (e) => {
    if( !this.state.status )
      return false;
    Vibration.vibrate(200);
    console.log( this.state.status );
    this.props.navigation.navigate('Barcode', {
      id: String(new Date().getTime()),
      text: e.data,
    });

    this.setState( (prevState) => {
      return {status: false};
    })
    setTimeout( () => {
      this.setState( (prevState) => {
        return {status: true};
      })
    }, 2000)
  }

  render () {
    return (
      <View  style={styles.container}>
          <Camera
            style={styles.preview}
            onBarCodeRead={ this.state.status ? this.onBarCodeRead : () => {} }
            ref={cam => this.camera = cam}
            aspect={Camera.constants.Aspect.fill}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});