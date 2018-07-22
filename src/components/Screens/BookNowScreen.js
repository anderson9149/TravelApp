import React from 'react';
import { StackNavigator } from 'react-navigation';
import BookNowComponent from './BookNowScreen_Component'
import { View, Image } from 'react-native';
import DrawerButton from '../HelperComponents/DrawerButton';

const BookNowScreen = StackNavigator(
    {
      BookNowScreen: {
        screen: BookNowComponent,
        // Optional: Override the `navigationOptions` for the screen
          navigationOptions: ({ navigation }) => ({
            headerTitle:  <View style={{flexDirection:'row'}}>
                            <Image source={require('../pictures/TravelLogo_transparent2.png')} style={{width: 150, height: 40}} />
                          </View>,
            headerStyle: { backgroundColor: '#1a8cff' },
            //headerTitleStyle: { color: 'white' },
            headerLeft: <DrawerButton navigation={navigation} />
          }),
      },
    },
);

export default BookNowScreen;
