import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Welcome= ({route}) => {
    const { username, email } = route.params;
  return (
    <View>
      <Text>welcome {username},{email}</Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})