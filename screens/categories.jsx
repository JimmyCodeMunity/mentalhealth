import React from 'react';
import { View, StyleSheet, Text,SafeAreaView,TouchableOpacity } from 'react-native';
import {StackNavigator} from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Category = ({navigation,route}) => {
  const {Username} = route.params;
  const categories = [
    { id: 1, title: 'General Therapy', color: '#FF6347' },
    { id: 2, title: 'Marriage Counselling', color: '#4169E1' },
    { id: 3, title: 'Addiction & Drugs', color: '#32CD32' },
    { id: 4, title: 'Trauma', color: '#FF8C00' },
    { id: 5, title: 'Grief', color: '#FF8C00' },
    
  ];

  return (
    <SafeAreaView style={styles.container}>
      {categories.map(category => (
        <TouchableOpacity
        onPress={() => navigation.navigate('Doctors',{categoryName:category.title,Username})}
         key={category.id} style={[styles.card, { backgroundColor: category.color }]}>
          <Text style={styles.title}>{category.title}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems:"center",
    padding: 16,
    paddingVertical:30,
  },
  card: {
    width: '45%',
    aspectRatio: 1,
    margin: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadow: true,
    shadowOpacity:2,
  },
  title: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default Category;
