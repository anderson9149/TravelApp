import React, { Component } from 'react';
import { PStyleSheet, Text, View, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import { SafeAreaView, StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import sharedStyles from '../HelperComponents/SharedStyles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { scale, moderateScale, verticalScale} from '../HelperComponents/ScaleFunctions';
import DrawerButton from '../HelperComponents/DrawerButton';
import NavigationService from '../../../NavigationService.js';

class AccountComponent extends Component {
  componentWillMount() {
  this.props.navigation.setParams({
      navigation: this.props.screenProps.rootNavigation,
    })
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    NavigationService.navigate('Auth');
    //this.props.navigation.navigate('Auth');
    //this.props.navigation.navigate('AccountScreen');
  };

  render() {
    return (
      <View style={styles.container} >
        <Text style={{ textAlign: 'center', fontSize: scale(20), color: this.props.darkerTint }}> User Info Goes Here </Text>
        <TouchableOpacity style={styles.button} onPress={this._signOutAsync} >
          <Text style={{ textAlign: 'center', color: 'white', fontWeight: '700', fontSize: scale(20) }}> Logout </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
AccountComponent.navigationOptions = ({ navigation }) => {
  const { params } = navigation.state;
  return {
    headerLeft: <DrawerButton navigation={params ? params.navigation : null} />
  };
}

// Account styles
styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    padding: scale(20),
  },
  input: {
    backgroundColor : 'white',
    height: verticalScale(40),
    marginBottom: scale(20),
    paddingHorizontal: scale(10)
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
});

AccountComponent.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  headerColor: state.auth.headerColor,
  casinoName: state.auth.casinoName,
  darkerTint: state.auth.darkerTint
});

export default connect(mapStateToProps)(AccountComponent);
