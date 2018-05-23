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

import {reqTranslate} from '../actions'

class Translate extends Component{
  constructor(props){
    super(props);
    this.state = {
      translateInput: "",
      translateOutput: "",
      language: "en"
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange = (value) => {
    this.setState( () => {
      return { translateInput: value }
    })
  }
  onSubmit = () => {
    const {translateInput, language} = this.state;
    this.props.reqTranslate( translateInput, language );
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
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Italian" value="it" />
          <Picker.Item label="Spanish" value="es" />
        </Picker>
        <Button
          onPress={this.onSubmit}
          title="Перевести"
        />
        {this.props.translate.error ?
          <Text>Призошла ошибка</Text>
          : <TextInput
          style={{height: 40, color: '#000'}}
          value={this.props.translate.text}
          placeholder="Перевод"
          editable={false}
        />}
      </View>
    );
  }
};

const mapStateToProps = (state) => ({translate: state.translate})

const mapDispatchToProps = (dispatch) => ({
  reqTranslate: (text, lang) => dispatch(reqTranslate(text, lang))
})

export default connect(mapStateToProps, mapDispatchToProps)(Translate);