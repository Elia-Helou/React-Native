import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BackHeader = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{marginLeft: 10}}>
        <Octicons name="three-bars" size={34} color="black" />
      </View>
      <View style={{marginRight: 10}}>
        <AntDesign name="shoppingcart" size={34} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
});

export default BackHeader;
