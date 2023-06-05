import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';
import {StackNavigator} from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function DetailScreen({ navigation,route }) {
  const { itemId, itemName,itemPhone, itemEmail, itemLocation,itemPrice,Username} = route.params;
  return (
    <View style={styles.container}>
      
      <View style={styles.detailsContainer}>
      <Icon name="account" size={25} color="#ffd700" />
        <Text style={styles.name}>{itemName}</Text>
        <Icon name="phone" size={25} color="#ffd700" />
        <Text style={styles.price}>visible after booking</Text>
        <Icon name="mail" size={25} color="#ffd700" />
        <Text style={styles.price}>visible after booking</Text>
        <Icon name="cash" size={25} color="#ffd700" />
        <Text style={styles.price}>{itemPrice}</Text>
        <Icon name="map" size={25} color="#ffd700" />
        <Text style={styles.price}>{itemLocation}</Text>
        <Text style={{fontWeight:'bold'}}>Rating</Text>
        <View style={styles.ratingContainer}>
        
          <Icon name="star" size={18} color="#ffd700" />
          <Icon name="star" size={18} color="#ffd700" />
          <Icon name="star" size={18} color="#ffd700" />
          <Icon name="star" size={18} color="#ffd700" />
          <Icon name="star" size={18} color="#000000" />
          <Text style={styles.rating}></Text>
        </View>
        
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Booking',{itemPhone,itemName,itemLocation,itemEmail,Username,itemPrice})}
        >
          <Text style={styles.buttonText}>Book Therapist</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  rating: {
    fontSize: 16,
    marginLeft: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#1b3a5d',
    paddingVertical: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: '#c1a64b',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DetailScreen;
