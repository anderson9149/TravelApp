import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, ScrollView, StatusBar, Image } from 'react-native';
import { SafeAreaView, StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import BucketScreen from '../components/Screens/BucketScreen';
import AccountScreen from '../components/Screens/AccountScreen';
import ListScreen from '../components/Screens/ListScreen';
import MapScreen from '../components/Screens/MapScreen';
import shareScreen from '../components/Screens/ShareScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import sharedStyles from '../components/HelperComponents/SharedStyles';
import { connect } from 'react-redux';

const StacksInTabsNavWrapped = ({ screenProps }) => {
  const CustomNavigator = TabNavigator({
    ListTab: {
      screen: ListScreen,
      navigationOptions: {
        tabBarLabel: 'List',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-list' : 'ios-list-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    MapTab: {
      screen: MapScreen,
      navigationOptions: {
        tabBarLabel: 'Map',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-map' : 'ios-map-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    BucketTab: {
      screen: BucketScreen,
      navigationOptions: {
        tabBarLabel: 'Bucket',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-paper-plane' : 'ios-paper-plane-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    ShareTab: {
      screen: shareScreen,
      navigationOptions: {
        tabBarLabel: 'Share',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-share-alt' : 'ios-share-alt-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    AccountTab: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarLabel: 'Account',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-person' : 'ios-person-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    /*
    MoreTab: {
      screen: MoreScreen,
      navigationOptions: {
        tabBarLabel: 'More',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-more' : 'ios-more-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    */
  },{
    //tabBarPosition: 'top',
    //animationEnabled: true,
    tabBarOptions: { activeTintColor: screenProps.darkerTint },
  })

  return <CustomNavigator screenProps={screenProps} />;
};

class StacksInTabsNav extends Component {
  render() {
    return <StacksInTabsNavWrapped screenProps={{
      casinoName : this.props.casinoName,
      headerColor: this.props.headerColor,
      darkerTint: this.props.darkerTint,
      rootNavigation: this.props.navigation}} />;
  }
}

const mapStateToProps = state => ({
  casinoName: state.auth.casinoName,
  headerColor: state.auth.headerColor,
  darkerTint: state.auth.darkerTint,
});

export default connect(mapStateToProps)(StacksInTabsNav);

//export default StacksInTabsNav;
