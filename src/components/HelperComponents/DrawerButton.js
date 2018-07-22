import { TouchableOpacity, StyleSheet } from 'react-native';
import React, { Component }  from 'react';
import sharedStyles from './SharedStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DrawerButton = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('DrawerOpen')}
    style={styles.button}
  >
  <Ionicons
    name={'ios-menu'}
    size={26}
    style={{ color: 'white' }}
  />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 10
  },
})

export default DrawerButton
