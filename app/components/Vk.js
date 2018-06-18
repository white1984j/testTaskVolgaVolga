import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Button
} from 'react-native';

//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';


class Vk extends Component{
  render(){
    return(
      <ScrollView  >
        <View style={styles.container}>
          <View style={styles.topLine} >
            <View style={styles.topLinePath}>
              <TouchableHighlight style={styles.topLineTouch} onPress={() => {}} underlayColor="#385e8a">
               <Icon name="ios-menu" size={30} color="#fff" />
              </TouchableHighlight>
              <Text style={[styles.topLineName, styles.topLineTouch]}>
                Zhenya
              </Text>
            </View>
            <View style={styles.topLinePath}>
              <TouchableHighlight style={styles.topLineTouch} onPress={() => {}} underlayColor="#385e8a">
               <Icon name="ios-notifications" size={30} color="#fff" />
              </TouchableHighlight>
              <TouchableHighlight style={styles.topLineTouch} onPress={() => {}} underlayColor="#385e8a">
               <Icon name="ios-mail" size={30} color="#fff" />
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.personal} >
            <TouchableOpacity onPress={() => {}} underlayColor="#e0e0e0">
              <Image source={require('../resource/VkPersonal.jpg')} style={styles.personalImg} />
            </TouchableOpacity>
            <View>
              <Text style={styles.personalName}>Zhenya Bely</Text>
              <Text style={styles.personalOnline}>online</Text>
              <Text style={styles.personalText}>
                update status message
              </Text>
              <Text style={styles.personalText}>
                Nizhny Novgorod
              </Text>
            </View>
          </View>
          <TouchableHighlight onPress={() => {}} underlayColor="#385e8a" >
            <View style={styles.sectionTitle} >
              <Text style={styles.sectionTitleName}>Photos</Text>
              <Text style={styles.sectionTitleNumber}>7</Text>
            </View>
          </TouchableHighlight>
          <View style={styles.personalPhoto} >
            <ScrollView horizontal >
              <TouchableHighlight onPress={() => {}} style={styles.personalPhotoPath} underlayColor="gray" >
                <Image source={require('../resource/VkPersonal.jpg')} style={styles.personalPhotoImg} />
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {}} style={styles.personalPhotoPath} underlayColor="gray" >
                <Image source={require('../resource/VkPersonal.jpg')} style={styles.personalPhotoImg} />
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {}} style={styles.personalPhotoPath} underlayColor="gray" >
                <Image source={require('../resource/VkPersonal.jpg')} style={styles.personalPhotoImg} />
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {}} style={styles.personalPhotoPath} underlayColor="gray" >
                <Image source={require('../resource/VkPersonal.jpg')} style={styles.personalPhotoImg} />
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {}} style={styles.personalPhotoPath} underlayColor="gray" >
                <Image source={require('../resource/VkPersonal.jpg')} style={styles.personalPhotoImg} />
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {}} style={styles.personalPhotoPath} underlayColor="gray" >
                <Image source={require('../resource/VkPersonal.jpg')} style={styles.personalPhotoImg} />
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {}} style={styles.personalPhotoPath} underlayColor="gray" >
                <Image source={require('../resource/VkPersonal.jpg')} style={styles.personalPhotoImg} />
              </TouchableHighlight>
            </ScrollView>
          </View>
          <TouchableHighlight onPress={() => {}} underlayColor="#385e8a" >
            <View style={styles.sectionTitle} >
              <Text style={styles.sectionTitleName}>Info</Text>
            </View>
          </TouchableHighlight>
          <View>
            <FlatList
              style={styles.personalInfo}
              data={[
                {
                  label: 'Birthday',
                  value: 'April 20',
                },{
                  label: 'Relationship status',
                  value: 'Single',
                },{
                  label: 'Studied at',
                  value: 'АФ ННГУ им. Н. И. Лобачевского (бывш. АГПИ им. Гайдара)',
                },{
                  label: 'button',
                  value: 'Go to full info »',
                }
              ]}
              keyExtractor={ (item, index) => item.label }
              renderItem={({item}) => {
                if( item.label === 'button' ){
                  return <TouchableHighlight onPress={() => {}} underlayColor="gray" >
                      <Text style={styles.personalInfoButton}>{item.value}</Text>
                    </TouchableHighlight>
                }else{
                  return <View style={styles.perfonalInfo}>
                    <Text>{item.label}: </Text>
                    <TouchableHighlight onPress={() => {}} underlayColor="#e0e0e0" >
                      <Text style={styles.perfonalInfoLink} >{item.value}</Text>
                    </TouchableHighlight>
                  </View>
                }

              }}
            />
          </View>
          <TouchableHighlight onPress={() => {}} underlayColor="#385e8a" >
            <View style={styles.sectionTitle} >
              <Text style={styles.sectionTitleName}>Others</Text>
            </View>
          </TouchableHighlight>
          <View>
            <FlatList
              style={styles.perfonalOthers}
              data={[
                {
                  label: 'Photos of me ',
                  value: '1',
                },{
                  label: 'Friends ',
                  value: '2',
                },{
                  label: 'Photos ',
                  value: '1',
                },{
                  label: 'Music',
                  value: '1488',
                },{
                  label: 'Videos ',
                  value: '1109',
                },{
                  label: 'Gifts ',
                  value: '46',
                },{
                  label: 'Documents  ',
                  value: '300',
                },{
                  label: 'Noteworthy pages',
                  value: '59',
                },{
                  label: 'Followers ',
                  value: '801',
                }
              ]}
              keyExtractor={ (item, index) => item.label }
              renderItem={({item, index}) => <TouchableHighlight onPress={() => {}} underlayColor="#e0e0e0" >
                  <View style={index === 0 ? styles.personalOthersPath : styles.personalOthersPathBorder}>
                    <Text style={styles.personalOthersText} >{item.label}: </Text>
                    <Text style={styles.personalOthersNum} >{item.value}</Text>
                  </View>
                </TouchableHighlight>    
              }
            />
          </View>
        </View>
      </ScrollView>
    )   
  };
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: '#DEE5EB'
  },
  sectionTitleName: {
    color: '#657e9b',
    fontSize: 12,
    fontWeight: 'bold'
  },
  sectionTitleNumber: {
    color: '#9FB2C6',
    fontSize: 12,
    marginLeft: 6,
    fontWeight: 'bold'
  },
  topLine: {
    height: 48,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#5181b8',
  },
  topLineName: {
    fontSize: 18,
    color: '#fff'
  },
  topLinePath: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  topLineTouch: {
    padding: 15
  },
  personal: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 12,
    backgroundColor: '#f7f7f7'
  },
  personalImg: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginRight: 8
  },
  personalName: {
    fontSize: 16,
    color: '#565656',
    fontWeight: 'bold'
  },
  personalState: {
    color: '#777',
    fontSize: 13
  },
  personalText: {
    color: '#777',
    fontSize: 12
  },
  personalPhoto: {
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10
  },
  personalPhotoPath: {
    flexDirection: 'row',
    width: 75,
    height: 57,
    margin: 2,
    justifyContent: 'center',
    backgroundColor: '#f1f1f1'
  },
  personalPhotoImg: {
    maxWidth: 56
  },
  personalInfo: {
    marginTop: 5,
    marginRight: 12,
    marginBottom: 10,
    marginLeft: 12
  },
  perfonalInfo: {
    padding: 4,
    flexDirection: 'row',
  },
  perfonalInfoLink: {
    color: "#306096"
  },
  personalInfoButton: {
    textAlign: 'center',
    backgroundColor: '#E9EDF1',
    borderRadius: 3,
    padding: 7,
    fontSize: 12,
    color: '#306096'
  },
  personalOthersPath: {
    flexDirection: 'row',
    padding: 12
  },
  personalOthersPathBorder: {
    flexDirection: 'row',
    padding: 12,
    borderTopWidth: 1,
    borderColor: '#e2e2e2'
  },
  personalOthersText: {
    color: 'red',
    fontWeight: 'bold',
    color: '#306096',
    fontSize: 13
  },
  personalOthersNum: {
    color: 'red',
    fontWeight: 'bold',
    color: '#85A1BD'
  }
});

export default Vk;