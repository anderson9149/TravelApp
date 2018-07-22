import React, {Component} from 'react';
import { Button, ScrollView, StatusBar, View, StyleSheet, Image, TouchableOpacity, Text, WebView, ActivityIndicator } from 'react-native';
import { StackNavigator, SafeAreaView } from 'react-navigation';
import sharedStyles from '../HelperComponents/SharedStyles';
import ShareComponent from './ShareComponent';
import DrawerButton from '../HelperComponents/DrawerButton';
import { connect } from 'react-redux';

const ShareScreenWrapped = ({ screenProps }) => {
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
    Share: {
      screen: ShareComponent,
    },
  }, stackNavigatorConfigs);
  return <CustomNavigator screenProps={screenProps} />;
};

class ShareScreen extends Component {
  render() {
    return <ShareScreenWrapped screenProps={{
      casinoName : this.props.casinoName,
      headerColor: this.props.headerColor,
      rootNavigation: this.props.screenProps.rootNavigation}} />;
  }
}

const mapStateToProps = state => ({
  casinoName: state.auth.casinoName,
  headerColor: state.auth.headerColor,
});

export default connect(mapStateToProps)(ShareScreen);
