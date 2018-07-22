import React, {Component} from 'react';
import { Button, ScrollView, StatusBar, View, StyleSheet, Image, TouchableOpacity, Text, WebView, ActivityIndicator } from 'react-native';
import { StackNavigator, SafeAreaView } from 'react-navigation';
import MapComponent from './Map_Component';
import sharedStyles from '../HelperComponents/SharedStyles';
//import MenuScreen from './HomeScreen_Menu';
//import LandBasedScreen from './HomeScreen_MenuSelection';
import DrawerButton from '../HelperComponents/DrawerButton';
import { connect } from 'react-redux';

const MapWrapped = ({ screenProps }) => {
  const stackNavigatorConfigs = {
    navigationOptions: ({ navigation }) => ({
      headerTitle:  <View style={{flexDirection:'row'}}>
                      <Image source={require('../pictures/TravelLogo_transparent2.png')} style={{width: 150, height: 40}} />
                    </View>,
      headerStyle: { backgroundColor: screenProps.headerColor },
      headerTitleStyle: { color: 'white' },
      headerLeft: <DrawerButton navigation={screenProps.rootNavigation} />
    }),
  };
  const CustomNavigator = StackNavigator({
    Map: {
      screen: MapComponent,
    },
  }, stackNavigatorConfigs);
  return <CustomNavigator screenProps={screenProps} />;
};

class MapScreen extends Component {
  render() {
    return <MapWrapped screenProps={{
      casinoName : this.props.casinoName,
      headerColor: this.props.headerColor,
      rootNavigation: this.props.screenProps.rootNavigation}} />;
  }
}

const mapStateToProps = state => ({
  casinoName: state.auth.casinoName,
  headerColor: state.auth.headerColor,
});

export default connect(mapStateToProps)(MapScreen);
