import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginComponent from './LoginScreen_Component'

const LoginScreen = StackNavigator({
    LoginScreen: {
      screen: LoginComponent,
      // Optional: Override the `navigationOptions` for the screen
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
});

export default LoginScreen;
