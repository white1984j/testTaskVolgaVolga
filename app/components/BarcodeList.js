import React, {Component} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Button,
  AsyncStorage,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  Easing
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import BarcodeListItem from './BarcodeListItem';
import LottieView from 'lottie-react-native';


const styles = StyleSheet.create({
  wrap: {
    flex: 1
  },
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
  },
  TextEmpty: {
    margin: 8,
    fontWeight: 'bold'
  }
})

class BarcodeList extends Component {
  constructor(props){
    super(props);
    this.state = {
      lastBarcode: {id: '', text: ''},
      barcode: [],
      progress: new Animated.Value(0),
      animIsPlaying: false
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

  onDelete = (id) => {
    const barcodeListFiltered = this.state.barcode.filter( barcode => barcode.id !== id )
    this.setState((prevState, props) => {
      return {barcode: barcodeListFiltered};
    }); 
    try {
      AsyncStorage.setItem('Barcodes', JSON.stringify(barcodeListFiltered) );
    }catch (error){
      console.log('setValues', error)
    }
  }

  onEdit = (id, text) => {
    try {
      const barcodeListFiltered = this.state.barcode.map( barcode => {
        if( String(barcode.id) === String(id) )
          return {id: barcode.id, text: text};
        return barcode;
      });
      this.setState((prevState, props) => {
        return {barcode: barcodeListFiltered};
      }); 
    
      AsyncStorage.setItem('Barcodes', JSON.stringify(barcodeListFiltered) );
    }catch (error){
      console.log('setValues', error)
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

  deteleAll = () => {
    this.setState( prevState => ({
      animIsPlaying: true
    }));
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
    }).start(({ finished }) => {
      if (finished) {
        this.setState( prevState => ({
          animIsPlaying: false,
          progress: new Animated.Value(0),
          lastBarcode: {id: '', text: ''},
          barcode: [],
        }))
      }
    });
    try {
      AsyncStorage.setItem('Barcodes', '' );
    }catch (error){
      console.log('deleteValues', error)
    }
  }

  render() {

    const getBody = () => {
      if( this.state.barcode.length ){
        if( this.state.animIsPlaying )
          return <LottieView source={require('../lottie/success.json')} progress={this.state.progress} />
        return <ScrollView>
          <FlatList
            data={ this.state.barcode }
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return <BarcodeListItem text={item.text} id={item.id} onDelete={this.onDelete.bind(null, item.id)} onEdit={this.onEdit} />
            }}
          />
          <Button
            title="Очистить весь список"
            onPress={this.deteleAll}
          />
        </ScrollView>
      }else{
        return <Text style={styles.TextEmpty}>Пусто</Text>
      }
    };

    return (
      <View style={styles.wrap}>
        {getBody()}
        
      </View>
    );
  }

}




export default BarcodeList;