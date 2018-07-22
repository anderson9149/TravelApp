import React, { Component }   from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, DrawerNavigator, DrawerItems, SafeAreaView  } from 'react-navigation';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, StyleSheet, Button, Image} from 'react-native';
import sharedStyles from '../components/HelperComponents/SharedStyles';
import { scale, moderateScale, verticalScale, DeviceWidth, DeviceHeight } from '../components/HelperComponents/ScaleFunctions';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerSelection : {
        Home: { text: 'Home', route:'Corporate' },
        Account: { text: 'Account', route:'Corporate' },
      },
      drawerSelection_Book : {
        Expedia: { text: 'Expedia', route:'Expedia' },
        Travelocity: { text: 'Travelocity', route:'Travelocity' },
        Kayak: { text: 'Kayak', route:'Kayak' },
        AirBnB: { text: 'AirBnB', route:'AirBnB' },
        Orbitz: { text: 'Orbitz', route:'Orbitz' },
        PriceLine: { text: 'PriceLine', route:'PriceLine' },
      }
    }
  }

  navigateToScreen = (route) => () => {
    //console.log("************ Navigate: " + route)
    switch (route) {
      case 'Home':
        this.props.setHome();
        break;
      case 'Account':
        //this._signOutAsync();
        this.props.setAccount();
        break;
      case 'Expedia':
        this.props.setExpedia();
        break;
      case 'Travelocity':
        this.props.setTravelocity();
        break;
      case 'Kayak':
        this.props.setKayak();
        break;
      case 'AirBnB':
          this.props.setAirBnB();
          break;
      case 'Orbitz':
          this.props.setOrbitz();
          break;
      case 'PriceLine':
          this.props.setPriceLine();
          break;
    }
    const navigateAction = NavigationActions.navigate({ routeName: route });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <SafeAreaView style={drawerStyles.safeAreaContainer}>
        <ScrollView>
          <View>
            <View style={drawerStyles.headerContainer}>
              <Image source={require('../components/pictures/TravelLogo_transparent2.png')} style={drawerStyles.headerLogo} />
            </View>
            <View style={drawerStyles.dividerContainer}>
              <Text style={drawerStyles.dividerText}> Pin Places </Text>
            </View>
            {Object.keys(this.state.drawerSelection).map( (key) =>
              <View style={ (key == this.props.casinoName) ? drawerStyles.selectedContainer : drawerStyles.selectionContainer } key={key}>
                <Text style={ (key == this.props.casinoName) ? drawerStyles.navItemStyleSelected : drawerStyles.navItemStyle }
                      onPress={this.navigateToScreen(this.state.drawerSelection[key].route)}> {this.state.drawerSelection[key].text}
                </Text>
              </View>
              )
            }
            <View style={drawerStyles.dividerContainer}>
              <Text style={drawerStyles.dividerText}> Book Travel </Text>
            </View>
            {Object.keys(this.state.drawerSelection_Book).map( (key) =>
              <View style={ (key == this.props.casinoName) ? drawerStyles.selectedContainer : drawerStyles.selectionContainer } key={key}>
                <Text style={ (key == this.props.casinoName) ? drawerStyles.navItemStyleSelected : drawerStyles.navItemStyle }
                      onPress={this.navigateToScreen(this.state.drawerSelection_Book[key].route)}> {this.state.drawerSelection_Book[key].text}
                </Text>
              </View>
              )
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

// Drawer Styles
const drawerStyles = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: '#1a8cff'
  },
  headerContainer: {
    flexDirection:'row',
    paddingHorizontal: 16,
    //paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    textAlign: 'left',
    fontSize: 20,
    color: 'white',
    padding: 6
  },
  headerLogo: {
    width: scale(150 * .8),
    height: scale(40 * .8),
    margin: 8,
  },
  dividerContainer: {
    backgroundColor: '#d1ccca',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'black',
  },
  dividerText:{
    fontSize: 16,
    color: '#092F1D',
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  selectionContainer:
  {
    backgroundColor: '#f2f2f2',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'black',
  },
  selectedContainer:
  {
    backgroundColor: '#1a8cff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'black',
  },
  navItemStyle: {
    fontSize: 16,
    color: '#092F1D',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  navItemStyleSelected: {
    fontSize: 16,
    color: 'white',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
});

SideMenu.propTypes = {
  navigation: PropTypes.object,
  isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  casinoName: state.auth.casinoName,
});

const mapDispatchToProps = dispatch => ({
  setHome: () => dispatch({ type: 'Home' }),
  setAccount: () => dispatch({ type: 'Account' }),
  setExpedia: () => dispatch({ type: 'Expedia' }),
  setTravelocity: () => dispatch({ type: 'Travelocity' }),
  setKayak: () => dispatch({ type: 'Kayak' }),
  setAirBnB: () => dispatch({ type: 'AirBnB' }),
  setOrbitz: () => dispatch({ type: 'Orbitz' }),
  setPriceLine: () => dispatch({ type: 'PriceLine' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
