import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppReducer from './src/reducers';
import AuthAppNavigator from './src/navigators/AuthAppNavigator';
import NavigationService from './NavigationService';

class App extends React.Component {
  store = createStore(AppReducer);

  render() {
    return (
      <Provider store={this.store}>
        <AuthAppNavigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}

export default App;
