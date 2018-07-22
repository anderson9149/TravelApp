import React, { Component } from 'react';
import { StyleSheet, View, WebView, ActivityIndicator } from 'react-native';
import { SafeAreaView, StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { scale, moderateScale, verticalScale, DeviceWidth, DeviceHeight } from '../HelperComponents/ScaleFunctions';
import NavigationService from '../../../NavigationService.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class BookNowComponent extends Component {
  render() {
    //console.log("************ webPage: " + this.props.casinoName)
    webPage = '';
    switch (this.props.casinoName) {
      case 'Expedia':
        webPage = 'https://www.expedia.com/'
        break
      case 'Travelocity':
        webPage = 'https://www.travelocity.com/'
        break
      case 'Kayak':
        webPage = 'https://www.kayak.com/'
        break
      case 'AirBnB':
        webPage = 'https://www.airbnb.com/'
        break
      case 'Orbitz':
        webPage = 'https://www.orbitz.com'
        break
      case 'PriceLine':
        webPage = 'https://www.priceline.com/'
        break
    }

    return (
      <WebView
        source={{uri: webPage}}
        startInLoadingState={true}
        bounces={true}
        renderLoading={ () => { return (
          <View style={styles.container}>
            <ActivityIndicator size='large' />
          </View>
        );}}
      />
    );
  }
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  flexDirection: 'row',
},
});

BookNowComponent.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  casinoColor: state.auth.casinoColor,
  casinoName: state.auth.casinoName,
  darkerTint: state.auth.darkerTint
});

export default connect(mapStateToProps)(BookNowComponent);
