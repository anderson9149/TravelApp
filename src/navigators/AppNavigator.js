import React, { Component }   from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator, DrawerNavigator, DrawerItems, SafeAreaView  } from 'react-navigation'
import StacksInTabsNav from './WCConnectTabs'
import {NavigationActions} from 'react-navigation'
import {ScrollView, Text, View, StyleSheet} from 'react-native'
import SideMenu from './sideMenu'
import BookNowScreen from '../components/Screens/BookNowScreen'

export const AppNavigator = DrawerNavigator({
  Home: {
    screen: StacksInTabsNav
  },
  Account: {
    screen: StacksInTabsNav
  },
  Expedia: {
    screen: BookNowScreen
  },
  Travelocity: {
    screen: BookNowScreen
  },
  Kayak: {
    screen: BookNowScreen
  },
  AirBnB:{
    screen: BookNowScreen
  },
  Orbitz: {
    screen: BookNowScreen
  },
  PriceLine:{
    screen: BookNowScreen
  },
}, {
  contentComponent: SideMenu,
  //drawerWidth: 300
});

export default AppNavigator;
