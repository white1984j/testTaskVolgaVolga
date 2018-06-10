import React, {Component} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Button,
  AsyncStorage,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class BarcodeListItem extends Component{
	constructor(props){
		super(props);
		this.state = {
			edit: false,
			text: this.props.text
		}
	};

	onEdit = () => {
		if( this.state.edit )
			this.props.onEdit( this.props.id, this.state.text );
		this.setState( prevState => ({ edit: !prevState.edit }) );
	};

	render(){
		console.log('render list', this.state);
		return( <View style={styles.BarcodeListItem}>
        { this.state.edit 
          ? <TextInput style={styles.BarcodeListText} onChangeText={(text) => this.setState({text: text})} >{this.state.text}</TextInput>
          : <Text style={styles.BarcodeListText}>{this.state.text}</Text> }
        <View style={styles.BarcodeListBtnWrap}>
          <TouchableOpacity style={styles.BarcodeListBtn} onPress={ this.onEdit }  >
            <Icon name={ this.state.edit ? 'save' : 'edit' } size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.BarcodeListBtn} onPress={ this.props.onDelete } >
            <Icon name="trash-o" size={24} color="#000"  />
          </TouchableOpacity>
        </View>
      </View>
		)
	};
};

const styles = StyleSheet.create({
  BarcodeListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  BarcodeListText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8
  },
  BarcodeListBtnWrap: {
    flexDirection: 'row'
  },
  BarcodeListBtn: {
    padding: 8
  }
});

export default BarcodeListItem;