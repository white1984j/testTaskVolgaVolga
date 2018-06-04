import React, {Component} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Button,
  AsyncStorage,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const styles = StyleSheet.create({
  BarcodeListItem: {
    display: 'flex',
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
    display: 'flex',
    flexDirection: 'row'
  },
  BarcodeListBtn: {
    padding: 8
  },
  BarcodeHeaderCamera: {
    padding: 8
  }
})

class BarcodeList extends Component {
  constructor(props){
    super(props);
    this.state = {
      lastBarcode: {id: '', text: ''},
      barcode: []
    }
    this.getValues();
  }

  static navigationOptions = ({ navigation }) => {
    const nav = navigation.state.params || {};

    return {
      headerTitle: 'Список Barcodes',
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('BarcodeCamera')} style={styles.BarcodeHeaderCamera}>
          <Icon name="camera" size={24} color="#000"  />
        </TouchableOpacity>
      ),
    };
  };


  static getDerivedStateFromProps(props, state) {
    const { navigation } = props;
    const id = navigation.getParam('id');
    const text = navigation.getParam('text');
    console.log('getDerivedStateFromProps', state);
    if( !id || !text || ( state.lastBarcode.id === id && state.lastBarcode.text === text ) )
      return null;
    else{
      try {
        AsyncStorage.setItem('Barcodes', JSON.stringify([...state.barcode, {id: id, text: text}]) );
      }catch (error){
        console.log('setValues', error)
      }
      return {
        lastBarcode: {id: id, text: text},
        barcode: [...state.barcode, {id: id, text: text}]
      };
    }
  }

  componentDidMount(){
    this.getValues();
  }

  getValues = async () => {
    try {
      // await AsyncStorage.clear();
      const value = await AsyncStorage.getItem('Barcodes');
      if (value !== null ){
        this.setState((prevState, props) => {
          return {barcode: JSON.parse(value)};
        }); 
      }
    } catch (error) {
      console.log('get error')
    }
  }

  render() {
    console.log('render barcodelist');
    //console.log('this', this);

    const getBody = () => {
      if( this.state.barcode.length ){
        return <FlatList
          data={ this.state.barcode }
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <View style={styles.BarcodeListItem}>
              <Text style={styles.BarcodeListText}>{item.text}</Text>
              <View style={styles.BarcodeListBtnWrap}>
                <TouchableOpacity style={styles.BarcodeListBtn}>
                  <Icon name="edit" size={24} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.BarcodeListBtn}>
                  <Icon name="trash-o" size={24} color="#000"  />
                </TouchableOpacity>
              </View>
            </View>
          }}
        />
      }else{
        return <Text>Пусто</Text>
      }
    };

    return (
      <View >
        {getBody()}
{/*        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('BarcodeCamera')}
        />*/}
      </View>
    );
  }

}




export default BarcodeList;