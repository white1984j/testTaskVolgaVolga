import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  AsyncStorage,
  Vibration
} from 'react-native';

import Camera from 'react-native-camera';

export default class BarcodeScan extends Component {

  static navigationOptions = {
    title: 'Вернуться к списку',
  };

  onBarCodeRead = (e) => {
    Vibration.vibrate(200);

    this.props.navigation.navigate('Barcode', {
      id: String(new Date().getTime()),
      text: e.data,
    });
  }

  render () {
    return (
      <View  style={styles.container}>
          <Camera
            style={styles.preview}
            onBarCodeRead={ this.onBarCodeRead }
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