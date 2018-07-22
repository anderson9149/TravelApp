import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, AsyncStorage, Button, Image, ImageBackground } from 'react-native';
import { SafeAreaView, StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { scale, moderateScale, verticalScale, DeviceWidth, DeviceHeight } from '../HelperComponents/ScaleFunctions';
import NavigationService from '../../../NavigationService.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

class LoginComponent extends Component {
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    //this.props.navigation.navigate('App');
    NavigationService.navigate('App');
  };

  render() {
    const resizeMode = 'center';

    return (
      <ImageBackground source={require('../pictures/LoginPic4.png')} style={{ width: DeviceWidth(), height: DeviceHeight()}} blurRadius={2} >
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.imageContainer}>
            <Image source={require('../pictures/TravelLogo.png')} style={styles.image}/>
          </View>

          <View style={styles.inputContainer}>
              <Ionicons style={styles.inputIcon} name="ios-mail" size={20} color="#000"/>
              <TextInput
                style={styles.input}
                placeholder="email"
                onSubmitEditing = { () => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none">
              </TextInput>
          </View>

          <View style={styles.inputContainer}>
              <Ionicons style={styles.inputIcon} name="ios-lock" size={20} color="#000"/>
              <TextInput
                style={styles.input}
                secureTextEntry
                placeholder="password"
                ref={ (input) => this.passwordInput = input }>
              </TextInput>
          </View>

          <TouchableOpacity style={styles.button} onPress={this._signInAsync} >
            <Text style={{ textAlign: 'center', color: 'white', fontWeight: '700', fontSize: scale(20) }}>
              Sign In
            </Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row'}} >
            <TouchableOpacity onPress={this._signInAsync} style={{ flex: 1 }} >
              <Text style={{ textAlign: 'center', color: 'white', textDecorationLine: 'underline' }}>
                New Sign Up
              </Text>
            </TouchableOpacity>
          </View>

        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

// Loign styles
styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: verticalScale(40),
    width: scale(250),
  },
  imageContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scale(20),
  },
  image:{
    width: scale(99),
    height: scale(66),
    resizeMode: 'stretch'
  },
  button:{
    justifyContent: 'center',
    backgroundColor: '#1a8cff',
    height: verticalScale(40),
    marginLeft: scale(25),
    marginRight: scale(25),
    marginBottom: scale(10),
    marginTop: scale(10),
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : 'white',
    height: verticalScale(40),
    marginBottom: scale(1),
    marginLeft: scale(25),
    marginRight: scale(25),
    paddingHorizontal: scale(10),
  },
  inputIcon: {
    color: 'grey',
    padding: scale(10),
  },
});

export default LoginComponent;
