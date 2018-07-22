import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, ScrollView, StatusBar, WebView, ActivityIndicator, Image, Dimensions } from 'react-native';
import { SafeAreaView, StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { scale, moderateScale, verticalScale, DeviceWidth, DeviceHeight } from '../HelperComponents/ScaleFunctions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Avatar } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements'

class ListComponent extends Component {

  avatarTouch = () => {
//avatarTouch() {
/*
    fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          dataSource: responseJson.movies,
        }, function(){
            console.log("Facebook Movie API Returned!")
        });

        console.log(responseJson.movies)
      })
      .catch((error) =>{
        console.error(error);
      });
*/

      fetch('http://127.0.0.1:8888/PHPHW/api.php?action=get_app_list')
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("Local Host PHP API Returned!")
          console.log(responseJson)
        })
        .catch((error) =>{
          console.error(error);
        });

  };

  render() {
    return (
      <ScrollView style={styles.scrollContainer}>

        <View style={styles.cardContainer}>
          <View style={styles.cardHeader}>
            <Avatar height = {50} width = {50} rounded source={require('../pictures/JoshPic.jpg')}
               onPress={this.avatarTouch}
            />
            <View style={{ marginLeft: scale(8) }}>
              <Text style={{ fontSize: scale(18), fontWeight: 'bold',}}> Chicago, Il </Text>
              <Text style={{ fontSize: scale(12) }}> 4/18/2018 </Text>
            </View>
          </View>

          <Image style={styles.imageStyle} source={require('../pictures/ChicagoSkyline.jpg')} />
          <Text style={{ marginBottom: scale(8) }} > Had a great time in Chicago! </Text>
          <View style={{flex: 1, flexDirection: 'row', borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: '#404040', margin: scale(2), }}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Icon name='edit' color='#404040' size={scale(18)} />
                <Text style={{ fontSize: scale(12), color: '#404040' }}> Edit </Text>
              </View>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name={'ios-share-alt-outline'} size={scale(22)} color='#404040' />
                <Text style={{ fontSize: scale(12), color: '#404040' }}> Share </Text>
              </View>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name={'ios-trash-outline'} size={scale(22)} color='#404040' />
                <Text style={{ fontSize: scale(12), color: '#404040' }}> Delete </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.cardHeader}>
            <Avatar
              height = {50}
              width = {50}
              rounded
              source={require('../pictures/JoshPic.jpg')}
              onPress={() => console.log("Works!")}
              avatarStyle = {styles.avatarContainer}
            />
            <View style={{ marginLeft: scale(8) }}>
              <Text style={{ fontSize: scale(18), fontWeight: 'bold',}}> Estes Park, Co </Text>
              <Text style={{ fontSize: scale(12) }}> 4/18/2018 </Text>
            </View>
          </View>
          <Image style={styles.imageStyle} source={require('../pictures/RockyMountains.jpg')} />
          <Text style={{ marginBottom: scale(8) }} > Went hiking in the Rockies </Text>
          <View style={{flex: 1, flexDirection: 'row', borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: '#404040', margin: scale(2), }}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Icon name='edit' color='#404040' size={scale(18)} />
                <Text style={{ fontSize: scale(12), color: '#404040' }}> Edit </Text>
              </View>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name={'ios-share-alt-outline'} size={scale(22)} color='#404040' />
                <Text style={{ fontSize: scale(12), color: '#404040' }}> Share </Text>
              </View>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name={'ios-trash-outline'} size={scale(22)} color='#404040' />
                <Text style={{ fontSize: scale(12), color: '#404040' }}> Delete </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.cardHeader}>
            <Avatar
              height = {50}
              width = {50}
              rounded
              source={require('../pictures/JoshPic.jpg')}
              onPress={() => console.log("Works!")}
              avatarStyle = {styles.avatarContainer}
            />
            <View style={{ marginLeft: scale(8) }}>
              <Text style={{ fontSize: scale(18), fontWeight: 'bold',}}> Sydney, Australia </Text>
              <Text style={{ fontSize: scale(12) }}> 4/18/2018 </Text>
            </View>
          </View>
          <Image style={styles.imageStyle} source={require('../pictures/Sydney.png')} />
          <Text style={{ marginBottom: scale(8) }} > Put a shrimp on the Bar-bee! </Text>
          <View style={{flex: 1, flexDirection: 'row', borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: '#404040', margin: scale(2), }}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Icon name='edit' color='#404040' size={scale(18)} />
                <Text style={{ fontSize: scale(12), color: '#404040' }}> Edit </Text>
              </View>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name={'ios-share-alt-outline'} size={scale(22)} color='#404040' />
                <Text style={{ fontSize: scale(12), color: '#404040' }}> Share </Text>
              </View>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name={'ios-trash-outline'} size={scale(22)} color='#404040' />
                <Text style={{ fontSize: scale(12), color: '#404040' }}> Delete </Text>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
    );
  }
}

// Now page styles
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor : '#f2f2f2',
    marginBottom: scale(8) },
  cardHeader: {
    flex: 1,
    flexDirection: 'row',
    marginTop: scale(4),
    marginLeft: scale(4),
    marginBottom: scale(4)},
  scrollContainer: { backgroundColor : '#bfbfbf' },
  imageStyle: {
    marginBottom: scale(8),
    width: (DeviceWidth()),
    height: 200,
    resizeMode: 'center'
  },
  avatarContainer: {
    paddingHorizontal: scale(8),
  }
});

ListComponent.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  casinoColor: state.auth.casinoColor,
  casinoName: state.auth.casinoName,
  darkerTint: state.auth.darkerTint,
});

export default connect(mapStateToProps)(ListComponent);
