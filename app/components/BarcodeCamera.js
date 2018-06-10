import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  AsyncStorage,
  Vibration
} from 'react-native';

import Camera from 'react-native-camera';

import Sound from 'react-native-sound';


export default class BarcodeScan extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: true
    }
    Sound.setCategory('Playback', true);
  };

  static navigationOptions = {
    title: 'Вернуться к списку',
  };

  onBarCodeRead = (e) => {
    if( !this.state.status )
      return false;

    this.setState({status: false});

    const callback = (error, sound) => {
      if (error) {
        console.log('error');
      }
      // Run optional pre-play callback
      sound.play(() => {
        // Success counts as getting to the end
        console.log('play');
        // Release when it's done so we're not using up resources
        Vibration.vibrate(200);
        console.log( this.state.status );
        this.props.navigation.navigate('Barcode', {
          id: String(new Date().getTime()),
          text: e.data,
        });

        setTimeout( () => {
          this.setState({status: true})
        }, 2000)
      });
    };
    // If the audio is a 'require' then the second parameter must be the callback.
    const sound = new Sound(require('../sounds/soundCamera.mp3'), error => callback(error, sound));
     
  };

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
  };
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