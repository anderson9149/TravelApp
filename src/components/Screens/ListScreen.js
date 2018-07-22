import React, {Component} from 'react';
import { Button, ScrollView, StatusBar, View, StyleSheet, Image, TouchableOpacity, Text, WebView, ActivityIndicator } from 'react-native';
import { StackNavigator, SafeAreaView } from 'react-navigation';
import sharedStyles from '../HelperComponents/SharedStyles';
import ListComponent from './ListScreen_Component';
import DrawerButton from '../HelperComponents/DrawerButton';
import { connect } from 'react-redux';

const ListScreenWrapped = ({ screenProps }) => {
  const stackNavigatorConfigs = {
    navigationOptions: ({ navigation }) => ({
      headerTitle:  <View style={{flexDirection:'row'}}>
                      <Image source={require('../pictures/TravelLogo_transparent2.png')} style={{width: 150, height: 40, margin: 8}} />
                    </View>,
      headerStyle: { backgroundColor: screenProps.headerColor },
      headerTitleStyle: { color: 'white' },
      headerLeft: <DrawerButton navigation={screenProps.rootNavigation} />
    }),
  };
  const CustomNavigator = StackNavigator({
    List: {
      screen: ListComponent,
    },
  }, stackNavigatorConfigs);
  return <CustomNavigator screenProps={screenProps} />;
};

class ListScreen extends Component {
  render() {
    return <ListScreenWrapped screenProps={{
      casinoName : this.props.casinoName,
      headerColor: this.props.headerColor,
      rootNavigation: this.props.screenProps.rootNavigation}} />;
  }
}

const mapStateToProps = state => ({
  casinoName: state.auth.casinoName,
  headerColor: state.auth.headerColor,
});

export default connect(mapStateToProps)(ListScreen);
