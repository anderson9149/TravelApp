import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, ScrollView, StatusBar, WebView, ActivityIndicator, Image, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView, StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import sharedStyles from '../HelperComponents/SharedStyles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { scale, moderateScale, verticalScale, DeviceWidth, DeviceHeight } from '../HelperComponents/ScaleFunctions';
import Ionicons from 'react-native-vector-icons/Ionicons';

class ShareComponent extends Component {
  shareDigitalPostCard = async () => {
    //await AsyncStorage.setItem('userToken', 'abc');
    //this.props.navigation.navigate('App');
    //NavigationService.navigate('App');
  };

  render() {
    // This is for creating a web view the size fo the current device
    //replaceString = "width=" + width + "&height=" + height
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',   }}>
            <Text style={{ textAlign: 'center', fontSize: scale(12), color: this.props.darkerTint, padding: scale(4), marginTop: scale(16), }}>
              Digital Post Card Preivew
            </Text>
            <View style={styles.gif}>
              <Image source={require('../pictures/giphy.gif')}  />
            </View>
              <TouchableOpacity style={styles.button} onPress={this.shareDigitalPostCard} >
                <Text style={{ textAlign: 'center', color: 'white', fontWeight: '700', fontSize: scale(20) }}>
                  Share Now
                </Text>
              </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1}}>
          <Text style={{ backgroundColor: this.props.darkerTint, textAlign: 'center', fontSize: scale(20), color: '#ffffff', paddingHorizontal: scale(8), paddingVertical: verticalScale(8) }}>
            Select a Trip to Share
          </Text>
          <ScrollView>
            {
              list.map((item, i) => (
                <TouchableOpacity style={ { backgroundColor: '#fff', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: this.props.darkerTint, }} key={item.title} >
                  <View style={styles.item}>
                    <Text style={ {textAlign: 'left', fontSize: scale(14), color: this.props.darkerTint, flex:1}}>
                      {item.title}
                    </Text>
                    <View style={{width: 40, alignItems: 'flex-end', justifyContent: 'flex-end', flex:1}}>
                      <Ionicons name={'ios-arrow-forward'} size={ scale(14) } style={{ color: this.props.darkerTint }} />
                    </View>
                  </View>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(8),
    flexDirection: 'row'
  },
  gif: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  button:{
    justifyContent: 'center',
    backgroundColor: '#1a8cff',
    height: scale(40),
    width: scale(200),
    //marginLeft: scale(25),
    //marginRight: scale(25),
    marginBottom: scale(8),
    marginTop: scale(16),
  },
});

const list = [
  {
    title: 'Chicago, Il',
    icon: 'av-timer'
  },
  {
    title: 'Estes Park, Co',
    icon: 'flight-takeoff'
  },
  {
    title: 'Sydney, Australia',
    icon: 'flight-takeoff'
  },
]

ShareComponent.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  casinoColor: state.auth.casinoColor,
  casinoName: state.auth.casinoName,
  darkerTint: state.auth.darkerTint,
});

export default connect(mapStateToProps)(ShareComponent);
