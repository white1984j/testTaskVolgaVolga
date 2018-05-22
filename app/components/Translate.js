import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
  Text,
  View,
  Button,
  Alert,
  TextInput,
  Picker
} from 'react-native';

class Translate extends Component{
  constructor(props){
    super(props);
    this.state = {
      translateInput: "",
      translateOutput: "",
      language: "English"
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange = (value) => {
    this.setState( () => {
      return { translateInput: value }
    })
  }
  onSubmit = () => {
    Alert.alert( this.state.translateInput );
  }
  render() {
    return (
      <View>
        <TextInput
          style={{height: 40}}
          onChange={ (event) => this.onChange(event.nativeEvent.text) }
          placeholder="Введите текст для перевода"
        />
        <Picker
          selectedValue={this.state.language}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})} >
          <Picker.Item label="English" value="eng" />
          <Picker.Item label="Italian" value="ita" />
          <Picker.Item label="Spanish" value="spa" />
        </Picker>
        <TextInput
          style={{height: 40, color: '#000'}}
          value={this.state.translateOutput}
          placeholder="Перевод"
          editable={false}
        />
        <Button
          onPress={this.onSubmit}
          title="Перевести"
        />
      </View>
    );
  }
};

const mapStateToProps = (state) => ({translate: state.translate})

export default connect(mapStateToProps)(Translate);