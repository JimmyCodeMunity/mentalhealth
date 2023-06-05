import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView,Button,TouchableOpacity,RefreshControl, ActivityIndicator} from 'react-native';
import {StackNavigator} from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LottieView from 'lottie-react-native';


const Stack = createNativeStackNavigator();

const Doctors = ({navigation,route}) => {
  const {Username} =route.params;
  const {categoryName} = route.params;
  const [query,setQuery] = useState('Mentheal');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    // Simulating loading content
    setTimeout(() => {
      setContent('Hello World');
      setIsLoading(false);
    }, 3000);
  }, []);
  //const {navigate} = this.props.navigation();
  //const {params} = this.props.navigation.state;
  //192.168.0.108
  //www.tangaraschools.org/api/collect.php
  

  const fetchData = () => {
    setIsRefreshing(true);
    fetch('https://www.tangaraschools.org/api/collect.php')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setIsRefreshing(false);
      })
      .catch((error) => {
        console.error(error);
        setIsRefreshing(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data.filter(item => item.category === categoryName);

  return (
    <ScrollView
      style={styles.body}
      refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={fetchData} />}
    >
      <View style={styles.heading}>
        <Text style={styles.catname}>{categoryName}</Text>
      </View>
      {isLoading ? (
        <View style={styles.loaderContainer}>
        <LottieView style={{width:300}}
          source={require('../assets/waiting.json')}
          autoPlay
          loop
          
        />
          <Text style={styles.waitingText}>Searching...</Text>
        </View>
      ) : filteredData.length > 0 ? (
        filteredData.map((item) => (
          <TouchableOpacity style={styles.container} key={item.username}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.username}</Text>
              
              <Text style={styles.author}>Charge:Khs. {item.price}</Text>
              <Text style={styles.author}>{item.category}</Text>
              <Text style={styles.year}>{item.location}</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate('Details', {
                  itemPhone: item.phone,
                  itemName: item.username,
                  itemLocation: item.location,
                  itemEmail: item.email,
                  itemPrice: item.price,
                  Username
                })
              }
            >
              <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))
      ) : (
        <Text style={styles.noDoctorsText}>No doctors available</Text>
      )}
    </ScrollView>
  );
};

export default Doctors;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    
  },
  textContainer: {
    flex: 1,
  },
  
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  author: {
    fontSize: 16,
    marginBottom: 4,
  },
  year: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: '#1b3a5d',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heading:{
    alignItems:"center",
    paddingVertical:23,
    
  },
  catname:{
    fontSize:23,
    fontWeight: 'bold',
  },
  noDoctorsText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  waitingText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
